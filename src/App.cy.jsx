import App from './App.vue'

const counterSelector = '[data-testid=counter]'

describe('<App />', () => {
  it('renders', () => {
    cy.viewport(800, 600)
    cy.mount(App)
    cy.get(counterSelector).should('be.visible')
  })
})
