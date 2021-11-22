<script setup>
import ProductCard from './ProductCard.vue'
import { useProductsStore } from '../store'

const productsStore = useProductsStore()
productsStore.fetchProducts()
</script>

<template>
  <i-fontisto-spinner-fidget
    v-if="!productsStore.products.length"
    class="text-8xl animate-spin animate-duration-1000"
  />
  <section class="grid items-center">
    <div class="h-full" v-for="product in productsStore.products" :key="product.id">
      <ProductCard
        :id="product.id"
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