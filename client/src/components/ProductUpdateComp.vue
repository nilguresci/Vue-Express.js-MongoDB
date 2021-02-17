<template>
    <div id="updateProduct">
        this is a update page
        <div class="container">
            <div class="row">
                <div class="col"></div>
                <div class="col">
        <h5>Update Product</h5>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Product name" v-model="Product.productName">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Product no" v-model="Product.productNo">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Product category" v-model="Product.productCategory">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-md-6">
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="Product.email">
          </div>
        </div>
        <br>
        <button type="button" class="btn btn-primary" @click="updateProduct(Product._id)">Update</button>
      </div>
      <div class="col"></div>
            </div>
        </div>
        </div>
</template>

<script>
import ProductsService from '../ProductsService'
export default {
    name:'UpdateProduct',
    data(){
return{
    Product:{},
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
  methods: {
    async updateProduct(id){
      await ProductsService.updateProduct(id,this.Product);
      alert('ürün güncellendi.')
      this.$router.replace(`/`);
    }
  },
}
</script>