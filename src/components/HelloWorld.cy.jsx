import HelloWorld from './HelloWorld.vue'

it.only('renders', () => {
  cy.mount(HelloWorld, {
    props: { msg: 'Vue Toronto 2021' }
  })
})