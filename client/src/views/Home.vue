<template>
  <div class="home" :style="myStyle">
    <ProductListComp />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductListComp from "@/components/ProductListComp.vue";
export default {
  name: "Home",
  data() {
    return {
      myStyle: {
        backgroundColor: "white",
      },
    };
  },
  components: {
    ProductListComp,
  },
};
</script>
