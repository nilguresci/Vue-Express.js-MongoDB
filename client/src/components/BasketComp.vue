<template>
  <div id="basketcomp">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col-4" v-for="(product, index) in ShowBasket" :key="index">
              <div class="card border-light" style="width: 21rem">
                <!--   <img
                  class="card-img-top"
                  :src="url(product.productImage)"
                  alt="Card image"
                /> -->
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <a href="#" class="card-link" @click="getProductID(product._id)">{{
                      product.productName
                    }}</a>
                  </li>
                  <li class="list-group-item">
                    <button type="button" class="btn btn-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dash"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                        />
                      </svg>
                    </button>
                    |
                    {{ product.adet }} |
                    <button type="button" class="btn btn-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                    </button>
                  </li>
                  <li class="list-group-item">Price: 20 TL</li>

                  <li class="list-group-item" aria-current="true">
                    <button type="button" class="btn btn-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                      Delete to Basket
                    </button>
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
  methods: {
    async getProductID(id) {
      try {
        this.$router.replace(`/products/${id}`);
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 10%;
  margin-bottom: 10%;
  margin-right: 5%;
  margin-left: 5%;
}
.card-link {
  color: black;
  font-size: 20px;
  padding: 20px;
}
ul {
  color: darksalmon;
}
</style>
