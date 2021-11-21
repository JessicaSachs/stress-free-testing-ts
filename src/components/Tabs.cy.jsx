import Tabs from './Tabs.vue'
import { mount } from '@cypress/vue'
import faker from 'faker'

const items = [
  {
    key: faker.datatype.uuid(),
    text: faker.commerce.department(),
  },
  {
    key: faker.datatype.uuid(),
    text: faker.commerce.department(),
  },
  {
    key: faker.datatype.uuid(),
    text: faker.commerce.department(),
  },
]

describe('<Tabs />', () => {
  it('renders the items', () => {
    cy.viewport(400, 200)
    const onSelectSpy = cy.spy().as('selectSpy')
    mount(() => (
      <div class="m-8">
        <Tabs onSelect={onSelectSpy} items={items} />
      </div>
    ))

    // Things to assert:
    // 1. The event was emitted
    // 2. The focus state is set (See `have.focus` assertion)
    // 3. Keybindings are working as expected

    cy.findByText(items[1].text).click().should('have.focus')
    cy.get('@selectSpy').should('have.been.calledWith', items[1])
  })
})
