<template>
    <div id="addProduct">
        <div class="container">
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <h5>Add a product</h5>
                    <br>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Product name" v-model="productdata.productName">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Product no" v-model="productdata.productNo">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-md-6">
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="productdata.email">
          </div>
          <div class="col-md-6">
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" v-model="productdata.password">
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Category" v-model="productdata.productCategory">
          </div>
        </div>
        <br>
        <button type="button" class="btn btn-primary" @click="createProduct()">Ürün ekle</button>
                </div>
                <div class="col-3"></div>
            </div>
        </div>
    </div>
</template>

<script>

import ProductsService from '../ProductsService';
export default {
    name:'AddProduct',
    data(){
    return{
      products:[],
      error:'',
      productdata:{
        productName:'',
        productNo:'',
        productCategory:'',
        email:'',
        password:'',
      },
    }
  },
  methods: {
      async createProduct(){
          await ProductsService.insertProducts(this.productdata);
      alert('Ürün eklendi.');
      this.$router.replace(`/`);
      }
  },
}
</script>