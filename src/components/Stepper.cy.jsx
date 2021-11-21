import { mount } from '@cypress/vue'
import Stepper from './Stepper.vue'

const textSelector = '[data-testid=counter]'
const incrementSelector = '[data-testid=increment]'
const decrementSelector = '[data-testid=decrement]'

describe('<Stepper />', () => {
  it('renders', () => {
    mount(<Stepper />)
    cy.get(textSelector).should('contain.text', '0')
    cy.get(incrementSelector).click()
    cy.get(textSelector).should('contain.text', '1')
    cy.get(decrementSelector).click().click()
    cy.get(textSelector).should('contain.text', '-1')
  })
})
