<template>
  <div id="showProduct">
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <div class="card" style="width: 21rem">
            <img class="card-img-top" :src="url(Product.productImage)" alt="Card image" />
            <div class="card-header">{{ Product.productName }}</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" aria-current="true">
                Category: {{ Product.productCategory }}
              </li>
              <li class="list-group-item" aria-current="true">
                Email: {{ Product.email }}
              </li>
              <li class="list-group-item" aria-current="true">Id: {{ Product._id }}</li>
              <li class="list-group-item" aria-current="true">
                {{ Product.productNo }} tl
              </li>
            </ul>
            <button type="button" class="btn btn-light" @click="AddBasket(product._id)">
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsService from "../ProductsService";
export default {
  name: "ShowProduct",
  data() {
    return {
      Product: [],
    };
  },
  computed: {
    productID() {
      return this.$route.params.id;
    },
  },
  async created() {
    try {
      console.log("created içinde");
      this.Product = await ProductsService.getProductID(this.productID);
    } catch (error) {
      this.error = error.message;
    }
  },
  methods: {
    url(imageurl) {
      return `http://localhost:3535/${imageurl}`;
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 10%;
  margin-bottom: 78%;
  /*
  margin-right: 25%;
  margin-left: 25%; */
}

.card-header {
  color: brown;
  background-color: thistle;
}
</style>
