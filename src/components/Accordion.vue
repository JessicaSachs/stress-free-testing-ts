<script setup>
import { ref } from 'vue'

const props = defineProps({
  collapseInitially: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '280px'
  }
})


const collapsed = ref(props.collapseInitially)
</script>

<template>
  <button
    @click="collapsed = !collapsed"
    class="p-2 transition duration-150 rounded outline-none focus-within:outline-none ring-2 ring-transparent hover:ring-blue-200 focus:ring-blue-200 hover:border-blue-300 focus:border-blue-300"
    :style="{ width, textAlign: 'initial' }"
  >
    <div class="inline-flex items-center">
      <slot name="target" />
      <i-mdi-chevron-down
        class="inline transition duration-150 transform"
        :class="{
          'rotate-180': collapsed
        }"
      />
    </div>
    <div v-if="collapsed" class="pt-2">
      <slot />
    </div>
  </button>
</template>