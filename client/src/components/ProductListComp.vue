<template>
<div id="productlist">
  <div class="container">
    <div class="row">
      <div class="col" >

        <div class="row">

          <div class="col-4"  v-for="(product,index) in products" :key="index">
            <div class="card" style="width: 21rem">
                <img class="card-img-top" src="'http://localhost:3535/' + {{product.productImage}}" alt="Card image">  
              <div class="card-header">
                  {{product.productName}}
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">{{product.productNo}}</li>
                  <li class="list-group-item">{{product.email}}</li>
                  <li class="list-group-item">{{product.productCategory}}</li>
                  <li class="list-group-item " aria-current="true">
                      <button type="button" class="btn btn-light" @click="getProductID(product._id)">Ürüne git</button> | 
                      <button type="button" class="btn btn-light" @click="goUpdateProduct(product._id)">Update</button> | 
                      <button type="button" class="btn btn-light" @click="deleteProduct(product._id)">Delete</button>
                  </li>
              </ul>
            </div>
          </div>
        </div>

</div>
      <br>
    </div>
  </div>
</div>
  
</template>

<script>
import ProductsService from '../ProductsService';
export default {
  name: 'ProductListComp',
  data(){
    return{
      products:[],
      error:'',
    }
  },
  computed:{
  },
  async created(){
    try {
      this.products=await ProductsService.getProducts();
    } catch (error) {
      this.error=error.message;
    }
  },
  methods:{
     
    
    async getProductID(id){
      try {
        this.$router.replace(`/products/${id}`);
    } catch (error) {
      this.error=error.message;
    }
    },
    async goUpdateProduct(id){
      this.$router.replace(`/products/update/id/${id}`);
    },
    async deleteProduct(id){
      await ProductsService.deleteProduct(id);
      alert('Ürün silindi.');
       window.location.reload()
    }

  }
}
</script>

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
.card{
  margin-top: 25%;
  margin-bottom: 25%;
  margin-right: 25%;
  margin-left: 25%;
}

.card-header{
  color: brown;
  background-color:thistle; 
}

</style>
