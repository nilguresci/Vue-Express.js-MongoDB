<template>
  <div class="basket">
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
