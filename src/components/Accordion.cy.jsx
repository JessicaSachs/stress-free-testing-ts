import Accordion from './Accordion.vue'

const headerSelector = '[data-testid=header]'
const contentSelector = '[data-testid=content]'

describe('<Accordion />', () => {
  it('renders', () => {
    const slots = {
      default: () => <p data-testid="content">Content Within the slot</p>,
      target: () => <h1 data-testid="header">Header</h1>,
    }

    cy.mount(() => (
      <div class="p-12">
        <h1 class="text-lg">Accordion Examples</h1>
        <h1 class="pb-8">Click on the header to toggle the card</h1>
        <Accordion vSlots={slots}></Accordion>
      </div>
    ))

    // Use the header selectors and content selectors to interact
    // with the accordion and test that it correctly expands and collapses.
  })
})
