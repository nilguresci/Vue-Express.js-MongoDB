<template>
  <div class="basket">
    this is basket page
    <BasketComp />
  </div>
</template>

<script>
import BasketComp from "@/components/BasketComp.vue";
export default {
  name: "Basket",
  data() {
    return {};
  },
  components: { BasketComp },
};
</script>
