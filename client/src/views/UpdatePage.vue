<template>
  <div class="update">
    <product-update-comp />
  </div>
</template>


<script>
// @ is an alias to /src
import ProductUpdateComp from '@/components/ProductUpdateComp.vue'

export default {
  name: 'Update',
  components: {
    ProductUpdateComp,
  }
}
</script>