
<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: Array
})

const emit = defineEmits(['select'])
const selected = ref(props.items[0])

const select = (item) => {
  selected.value = item
  emit('select', item)
}
</script>

<template>
  <div
    class="grid items-center justify-center grid-flow-col text-center text-gray-600 rounded w-min"
  >
    <div
      tabindex="1"
      class="px-2 py-1 transition duration-300 outline-none cursor-pointer shadow-blue-600 last:rounded-tr last:rounded-br first:rounded-bl first:rounded-tl"
      :class="{
        'bg-white hover:shadow-blue-600 focus:shadow-blue-600 shadow-md hover:shadow-lg focus:shadow-lg hover:bg-white focus:bg-white': item.key === selected.key,
        'bg-blue-50 hover:bg-blue-100 focus:bg-blue-100': item.key !== selected.key
      }"
      v-for="item in items"
      :key="item.key"
      @click="select(item)"
      @keypress.enter.space="select(item)"
    >{{ item.text }}</div>
  </div>
</template>

<style lang="scss" scoped>
// .tabs {
//   grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
// }
</style>