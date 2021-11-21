import { mount as realMount } from '@cypress/vue'

// Global setup and application setup usually done in src/main.js *must*
// also be done within your test environment
Cypress.Commands.add('mount', (component, options = {}) => {
  return realMount(component, options)
})
