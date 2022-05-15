describe('Home', () => {
  it('show home', () => {
    cy.visit('/')
    cy.contains('h1', '@baldeweg/ui')
  })
})
