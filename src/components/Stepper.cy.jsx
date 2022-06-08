import Stepper from './Stepper.vue'

const textSelector = '[data-testid=counter]'
const incrementSelector = '[data-testid=increment]'
const decrementSelector = '[data-testid=decrement]'

describe('<Stepper />', () => {
  it('renders', () => {
    cy.mount(<Stepper />)
    cy.get(textSelector).should('contain.text', '0')
    cy.get(incrementSelector).click()
    cy.get(textSelector).should('contain.text', '1')
    cy.get(decrementSelector).click()
    cy.get(textSelector).should('contain.text', '0')
  })

  describe('min', () => {
    it('has a default of 0 for the min prop', () => {
      cy.mount(<Stepper />)
      cy.get(textSelector).should('contain.text', '0').click()
      cy.get(decrementSelector).click()
      cy.get(textSelector).should('contain.text', '0')
    })

    it('is initially set to the min prop', () => {
      cy.mount(<Stepper min={20} />)
      cy.get(textSelector).should('contain.text', '20').click()
      cy.get(decrementSelector).click()
      cy.get(textSelector).should('contain.text', '20')
    })
  })

  describe('max', () => {
    it('supports a max prop', () => {
      cy.mount(<Stepper max={2} />)
      cy.get(textSelector).should('contain.text', '0')
      cy.get(incrementSelector).click().click().click()
      cy.get(textSelector).should('contain.text', '2')
    })

    it('has a default of 5 for the max prop', () => {
      cy.mount(<Stepper />)
      cy.get(textSelector).should('contain.text', '0')
      cy.get(incrementSelector)
        .then(($incrementButton) => {
          for (let i = 0; i < 5; i++) {
            cy.wrap($incrementButton).click()
          }
        })
        .get(textSelector)
        .should('contain.text', '5')
    })
  })
})
