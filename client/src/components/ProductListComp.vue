<template>
  <div id="productlist">
    <div class="container">
      <div class="row">
        <form class="d-flex">
          <input
            class="form-control me-2"
            id="mySearchInput"
            @keypress="mySearchFunction()"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col-4" v-for="(product, index) in products" :key="index">
              <div class="card" style="width: 18rem">
                <img
                  class="card-img-top"
                  :src="url(product.productImage)"
                  alt="Card image"
                />
                <div class="card-header" id="productName">
                  {{ product.productName }}
                </div>
                <ul class="list-group list-group-flush" id="myUL">
                  <li class="list-group-item">{{ product.productNo }}</li>
                  <li class="list-group-item">{{ product.email }}</li>
                  <li class="list-group-item" id="category">
                    {{ product.productCategory }}
                  </li>
                  <li class="list-group-item">{{ priceFix(product.price) }} TL</li>
                  <li class="list-group-item" aria-current="true">
                    <a href="#" class="card-link" @click="getProductID(product._id)"
                      >Show Product</a
                    >

                    <a href="#" class="card-link" @click="AddBasket(product)"
                      >Add to Basket</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsService from "../ProductsService";
import { mapActions } from "vuex";
export default {
  name: "ProductListComp",
  data() {
    return {
      products: [],
      error: "",
      basketProduct: {},
      price: {},
    };
  },
  computed: {},
  async created() {
    try {
      this.products = await ProductsService.getProducts();
    } catch (error) {
      this.error = error.message;
    }
  },
  methods: {
    url(imageurl) {
      return `http://localhost:3535/${imageurl}`;
    },
    priceFix(priceF) {
      return parseFloat(priceF).toFixed(2);
    },

    async getProductID(id) {
      try {
        this.$router.replace(`/products/${id}`);
      } catch (error) {
        this.error = error.message;
      }
    },
    /* async goUpdateProduct(id) {
      this.$router.replace(`/products/update/id/${id}`);
    },
    async deleteProduct(id) {
      await ProductsService.deleteProduct(id);
      alert("Ürün silindi.");
      window.location.reload();
    }, */
    ...mapActions(["addBasket"]),
    //...mapGetters(["ShowBasket"]),
    AddBasket(product) {
      console.log("burası addbasket butonu");
      this.basketProduct = product;
      this.addBasket(this.basketProduct);
      alert("Ürün sepetinize eklendi");
    },
    mySearchFunction() {
      var input = document.getElementById("mySearchInput");
      input = input.value.toUpperCase();
      var i, txtValue;
      console.log("burası döngüden heemn önce");
      let x = document.getElementById("productName");
      console.log("product name alındı");
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < x.length; i++) {
        console.log("burası döngünün içi");
        txtValue = x[i].innerText || x[i].textContent;
        if (!(txtValue.toUpperCase().indexOf(input) > -1)) {
          x[i].style.display = "none";
        } else {
          x[i].style.display = "list-item";
        }
      }

      //......................................
      /* var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul=document.getElementById('productName');
    for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  } */
    },
  },
};
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
  text-align: left;
}
a {
  color: black;
}
.card {
  margin-top: 10%;
  margin-bottom: 10%;
  margin-right: 5%;
  margin-left: 5%;
}
#category {
  text-transform: capitalize;
}
.card-header {
  background-color: white;
  text-align: left;
  text-transform: capitalize;
}
</style>
