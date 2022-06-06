describe('Home', () => {
  it('show home', () => {
    cy.visit('/')
    cy.get('h1')
  })
})
