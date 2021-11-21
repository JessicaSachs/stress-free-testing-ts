<script setup>
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
  <a
    href
    @click.prevent
    @keypress.enter.space.prevent
    class="grid h-full grid-cols-1 p-4 text-gray-800 transition duration-200 border-transparent rounded-lg outline-none cursor-pointer border-1 hover:border-blue-300 focus:border-blue-300 hover:ring-2 focus:ring-2 ring-blue-200 w-259px"
  >
    <div class="w-full mb-2 h-224px bg-blue-50">
      <img class="mx-auto text-center rounded h-224px" :src="img.src" :alt="img.alt" />
    </div>
    <p class="leading-relaxed tracking-wide text-gray-800">{{ description }}</p>
    <p class="text-2xl font-bold leading-loose text-gray-1000">{{ price }}</p>
    <p class="text-sm leading-relaxed text-gray-500">{{ additional }}</p>
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
  </a>
</template>