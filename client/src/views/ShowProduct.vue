<template>
  <div class="showproduct" :style="myShowStyle">
    <show-product-comp />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowProductComp from "@/components/ShowProductComp.vue";
export default {
  name: "ShowProduct",
  data() {
    return {
      myShowStyle: {
        backgroundColor: "white",
      },
    };
  },
  components: {
    ShowProductComp,
  },
};
</script>
