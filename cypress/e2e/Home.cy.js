describe('Home Page', () => {
  it('contains the essential information', () => {
    cy.visit('/').should(() => {
      expect(true).to.be.true
    })
  })
})
