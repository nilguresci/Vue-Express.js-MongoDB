<template>
  <div id="showProduct">
    <h1>This is a showproduct</h1>
    <h3>{{productID}}</h3>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <ul class="list-group">
          <li class="list-group-item active" aria-current="true">{{Product.productName}}</li>
          <li class="list-group-item " aria-current="true">{{Product.productNo}}</li>
          <li class="list-group-item " aria-current="true">{{Product.email}}</li>
          <li class="list-group-item " aria-current="true">{{Product.password}}</li>
          <li class="list-group-item " aria-current="true">{{Product._id}}</li>
        </ul>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsService from '../ProductsService'
export default {
  name:'ShowProduct',
  data(){
    return{
      Product:[],
    }
  },
  computed:{
    productID(){
      return this.$route.params.id;
    }
  },
  async created(){
    try {
       console.log('created içinde');
      this.Product=await ProductsService.getProductID(this.productID);
    } catch (error) {
      this.error=error.message;
    }
  },

}
</script>