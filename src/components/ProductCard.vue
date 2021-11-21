<script setup>
import Card from './Card.vue'
import StarRating from 'vue-star-rating'
defineProps({
  img: Object,
  description: String,
  rating: Number,
  price: String,
  additional: String
})
</script>

<template>
  <Card>
    <template #img>
      <img class="mx-auto text-center rounded h-224px" :src="img.src" :alt="img.alt" />
    </template>
    <p class="leading-relaxed tracking-wide text-gray-800">{{ description }}</p>
    <p class="text-2xl font-bold leading-loose text-gray-1000">{{ price }}</p>
    <p class="text-sm leading-relaxed text-gray-500">{{ additional }}</p>
    <template #footer>
      <p class="items-center self-end text-sm">
        <StarRating
          inactive-color="transparent"
          active-color="#FB8200"
          border-color="#FB8200"
          text-class="text-xs font-bold text-gray-600"
          :border-width="1"
          read-only
          :star-size="8"
          :padding="3"
          :increment="0.01"
          :rating="rating"
          class="pt-2 text-sm"
        />
      </p>
    </template>
  </Card>
</template>