<template>
<div id="productlist">
  <div class="container">
    <div class="row">
      <div class="col">
      </div>
      <div class="col">
        <ul class="list-group" v-for="(product,index) in products" :key="index">
          <li class="list-group-item active" aria-current="true">{{product.productName}}</li>
          <li class="list-group-item " aria-current="true">{{product.productNo}}</li>
          <li class="list-group-item " aria-current="true">{{product.email}}</li>
          <li class="list-group-item " aria-current="true">{{product.password}}</li>
          <li class="list-group-item " aria-current="true">
            <button type="button" class="btn btn-primary" @click="getProductID(product._id)">Ürüne git</button>
          </li>
           <hr>
        </ul>
        
      </div>
      <div class="col">
        <h5>Ürün kayıt</h5>
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
        <button type="button" class="btn btn-primary" @click="createProduct()">Ürün ekle</button>
      </div>
    </div>
  </div>
</div>
  
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
