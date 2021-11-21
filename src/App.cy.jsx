import { mount } from '@cypress/vue'
import App from './App.vue'

const counterSelector = '[data-testid=counter]'

describe('<App />', () => {
  it('renders', () => {
    cy.viewport(800, 600)
    mount(App)
    cy.get(counterSelector).should('be.visible')
  })
})
