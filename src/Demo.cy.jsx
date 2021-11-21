import Demo from './Demo.vue'

const counterSelector = '[data-testid=counter]'

describe('<Demo />', () => {
  it('renders', () => {
    cy.viewport(800, 600)
    cy.mount(Demo)
    cy.get(counterSelector).should('be.visible')
  })
})
