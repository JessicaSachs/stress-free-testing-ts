<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)

const quickLinks = [
  { text: 'Vue Test Utils API for Vue 3', href: 'https://next.vue-test-utils.vuejs.org/api/' },
  { text: `Lachlan Miller's Vue Testing Handbook`, href: 'https://lmiller1990.github.io/vue-testing-handbook/' },
  { text: 'Interacting with Elements using Cy Commands', href: 'https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability' },
  { text: 'Cypress API', href: 'https://docs.cypress.io/api/table-of-contents' },
  { text: 'Chai Matchers', href: 'https://docs.cypress.io/guides/references/assertions#Chai' },
]
</script>

<template>
  <div class="flex flex-col gap-2 text-center">
    <h1 data-testid="message" class="text-4xl">{{ msg }}</h1>

    <p>
      A pre-conference workshop for
      <a href target="_blank">Vue Toronto 2021</a>.
    </p>

    <p>
      A version of this repository written in Typescript is available:
      <a
        href
        target="_blank"
      >Stress Free Testing (Typescript!)</a>.
    </p>

    <p class="pb-4">
      <b>🔗 Quick Links:</b>
      <span>
        <a
          v-for="link in quickLinks"
          :key="link.href"
          :href="link.href"
          target="_blank"
          class="px-2 sibling:border-l-1"
        >{{ link.text }}</a>
      </span>
    </p>

    <h2 class="text-xl">Play with the Counter after your tests finish</h2>
    <button
      class="px-2 py-1 mx-auto rounded hover:ring-1 focus:ring-1 border-1 focus:outline-none w-120px"
      data-testid="counter"
      type="button"
      @click="count++"
    >count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test live reload.
    </p>
  </div>
</template>

<style scoped lang="scss">
</style>
