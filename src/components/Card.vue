<script setup>
defineProps({
  image: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>
<template>
  <a
    href
    @click.prevent
    @keypress.enter.space.prevent
    class="grid h-full grid-cols-1 p-4 transition duration-200 border-transparent rounded-lg outline-none cursor-pointer border-1 hover:border-blue-300 focus:border-blue-300 hover:ring-2 focus:ring-2 ring-blue-200 w-259px"
  >
    <div
      v-if="image"
      class="w-full mb-2 h-224px bg-blue-50 children:mx-auto children:text-center children:rounded children:h-224px"
    >
      <slot name="img"></slot>
    </div>
    <slot />
    <div v-if="$slots.footer" class="items-center self-end">
      <slot name="footer"></slot>
    </div>
  </a>
</template>