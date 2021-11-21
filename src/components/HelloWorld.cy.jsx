import { mount } from '@cypress/vue'
import HelloWorld from './HelloWorld.vue'

// Reusable Selectors
const textSelector = '[data-testid=message]'
const counterSelector = '[data-testid=counter]'

// Constants
const msg = 'Welcome to Stress-free Testing with Vue 3!'

describe('<HelloWorld />', () => {
  it('renders', () => {
    // The first argument is the component to be mounted.
    // The second argument is optional and is used for passing in props,
    // plugins, etc. The complete documentation for this signature can be
    // found in the Vue Test Utils docs.

    mount(HelloWorld, { props: { msg } })
      .get(textSelector)
      .should('contain.text', msg)
  })

  it('has a counter', () => {
    mount(HelloWorld, { props: { msg } })
      .get(counterSelector)
      .should('have.text', 'count is: 0')
      .click()
      .should('have.text', 'count is: 1')
      .should('have.focus')
  })
})

it.skip('JSX syntax example', () => {
  // The JSX Syntax for Vue is less documented, however it will be very useful later
  // on when we begin to use wrapper components to test slots and CSS.

  mount(<HelloWorld msg={msg} />)
    .get(textSelector)
    .should('contain.text', msg)
})
