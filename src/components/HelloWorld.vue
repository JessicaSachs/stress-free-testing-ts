<script setup>
import Stepper from './Stepper.vue'

defineProps({
  msg: String
})

const quickLinks = [
  { text: 'Official Cypress Component Testing Docs', href: 'https://on.cypress.io/component'},
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
      <a href target="_blank">VueConf US 2022</a>.
    </p>

    <p>
      A version of this repository written in TypeScript is available:
      <a
        href="https://github.com/JessicaSachs/stress-free-testing-ts"
        target="_blank"
      >Stress Free Testing (Typescript!)</a>.
    </p>

    <p class="py-4">
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

    <h2 class="text-xl">Play with the Stepper after your tests finish</h2>

    <!-- Use a selector like data-testid to access the counter
    and call `.click()` from within the test.-->
    <Stepper></Stepper>

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test live reload.
    </p>
  </div>
</template>

<style scoped lang="scss">
</style>
