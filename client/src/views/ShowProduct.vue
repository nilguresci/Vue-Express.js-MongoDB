<template>
  <div id="showProduct">
    <h1>This is a show product</h1>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <ul class="list-group">
          <li class="list-group-item active" aria-current="true">Product name: {{Product.productName}}</li>
          <li class="list-group-item " aria-current="true">No: {{Product.productNo}}</li>
          <li class="list-group-item " aria-current="true">Category: {{Product.productCategory}}</li>
          <li class="list-group-item " aria-current="true">Email: {{Product.email}}</li>
          <li class="list-group-item " aria-current="true">Id: {{Product._id}}</li>
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