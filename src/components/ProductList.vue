<template>
 <ul class="catalog__list">
    <ProductItem v-for="item in products" :product="item" :key="item"/>
</ul>
</template>

<script>

import ProductItem from './ProductItem.vue'

export default {
  props: ['products'],
  components: { ProductItem: ProductItem }
}
</script>
