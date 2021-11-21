describe('<Stepper />', () => {
  it('renders', () => {
    // The first argument is the component to be mounted.
    // The second argument is optional and is used for passing in props,
    // plugins, etc. The complete documentation for this signature can be
    // found in the Vue Test Utils docs.

    mount(Stepper).get(textSelector).should('contain.text', msg)
  })
})
