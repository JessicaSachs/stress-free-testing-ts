import Card from './Card.vue'
import { mount } from '@cypress/vue'
import CoffeeIcon from '~icons/mdi/coffee'
import faker from 'faker'

describe('<Card/>', () => {
  it('renders the default slot', () => {
    mount(
      <Card image={false} class="m-10 text-center group">
        {/* Consider using data-testid or cy.findByText to target and test if the default slot was rendered */}
        <CoffeeIcon class="text-4xl mx-auto group-hover:text-blue-600 duration-250 transition" />
        <div>{faker.lorem.words(10)}</div>
      </Card>,
    )
  })
})
