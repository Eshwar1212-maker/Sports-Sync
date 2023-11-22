describe('hero', () => {
    it('Navbar contains correct logo', () => {
      cy.visit('')
      cy.get('[data-test="hero-title"]').contains("The world's best platform for athletes")
      cy.get('[data-test="hero-get-started"]').contains("Get Started")
    })
  }) 