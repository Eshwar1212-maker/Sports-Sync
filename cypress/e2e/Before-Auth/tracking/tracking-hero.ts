describe('hero', () => {
    it('Navbar contains correct logo', () => {
      cy.visit('/workspaces')
      cy.get('data-test="tracker-hero-title"').contains("Charts tracking every inch of your progress")
    })
  }) 