<script setup>
import { ref } from 'vue'

const props = defineProps({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 5
  }
})

const counter = ref(props.min)

const decrement = () => {
  // Do not go below the minimum)
  if (counter.value <= props.min) return
  counter.value = counter.value - 1
}

const increment = () => {
  if (counter.value >= props.max) return
  counter.value = counter.value + 1
}
</script>

<template>
  <div
    data-testid="counter"
    class="mx-auto rounded counter hover:ring-1 focus:ring-1 border-1 focus:outline-none w-120px font-16px"
  >
    <button data-testid="decrement" @click="decrement">
      <i-mdi-minus-circle />
    </button>
    <span>{{ counter }}</span>
    <button data-testid="increment" @click="increment">
      <i-mdi-plus-circle />
    </button>
  </div>
</template>

<style scoped lang="scss">
.counter {
  display: inline-flex;
  place-content: center center;
  border: 1px solid indigo;
  border-radius: 0.25rem;
  height: 100%;
  gap: 1rem;

  > * {
    display: inline-flex;
    align-items: center;
    color: indigo;
  }

  > button {
    flex-grow: 1;
    display: flex;
    place-content: center center;
  }
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
