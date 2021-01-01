<template>
  <div class="home">
    <ProductListComp />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductListComp from '@/components/ProductListComp.vue'

export default {
  name: 'Home',
  components: {
    ProductListComp,
  }
}
</script>
