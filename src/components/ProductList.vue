<script setup>
import ProductCard from './ProductCard.vue'
defineProps({
  products: Array
})
</script>

<template>
  <section class="grid items-center justify-center">
    <div class="h-full" v-for="product in products" :key="product.id">
      <ProductCard
        :img="product.img"
        :description="product.description"
        :additional="product.additional"
        :rating="product.rating"
        :price="product.price"
      />
    </div>
  </section>
</template>

<style lang="scss" setup>
section {
  grid-template-columns: repeat(auto-fill, 280px);
}
</style>