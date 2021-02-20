<template>
  <div id="basketcomp">
    <h3>this is basket comp</h3>
    <div class="container">
      <h2>burası sepettekilerin listesi</h2>
      {{ sepetAdet }}
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col-4" v-for="(product, index) in ShowBasket" :key="index">
              <div class="card" style="width: 21rem">
                <!--   <img
                  class="card-img-top"
                  :src="url(product.productImage)"
                  alt="Card image"
                /> -->

                <div class="card-header">
                  {{ product.productName }}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{{ product.productNo }}</li>
                  <li class="list-group-item">{{ product.email }}</li>
                  <li class="list-group-item">{{ product.productCategory }}</li>
                  <li class="list-group-item">Adet: {{ sepetAdet }}</li>
                  <li class="list-group-item" aria-current="true">
                    <button type="button" class="btn btn-light">Show Product</button>
                    |
                    <button type="button" class="btn btn-light">Delete to Basket</button>
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
//import ProductsService from "../ProductsService";
import { mapGetters } from "vuex";
export default {
  name: "Basket",
  data() {
    return {
      products: [],
      error: "",
      sepetAdet: 0,
    };
  },
  computed: {
    ...mapGetters(["ShowBasket"]),
  },
  /*async created() {
    try {
      this.products = await ProductsService.getProducts();
    } catch (error) {
      this.error = error.message;
    }
  }, */
};
</script>
