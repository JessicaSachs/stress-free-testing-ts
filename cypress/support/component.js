// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Cypress Testing Library - https://testing-library.com/docs/cypress-testing-library/intro/
import '@testing-library/cypress/add-commands'

// The Cypress support.js file is loaded *once per spec* and contains global setup and teardown.

// *Workshop Task*: Fix the application's styles.

// 1. Look inside of src/main.js and import any other global styles.
import 'virtual:windi.css'
import 'virtual:windi-devtools'

// 2. Import main.scss here.
import '../../src/main.scss'


// 3. Import the real mount function and wrap it.
import { mount as realMount } from 'cypress/vue'

// 4. Import any global plugins like Vue Router or Pinia or Vuex
import { createRouter } from '../../src/router'

Cypress.Commands.add('mount', (component, options = {}) => {
  options.global = options.global || {}
  options.global.stubs = options.global.stubs || {}
  options.global.stubs.transition = false
  options.global.plugins = [createRouter()]
  return realMount(component, options)
})

// Example use:
// cy.mount(MyComponent)