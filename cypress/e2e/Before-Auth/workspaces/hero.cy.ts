describe('hero', () => {
    it('Navbar contains correct logo', () => {
      cy.visit('/workspaces', { failOnStatusCode: false });
      cy.get('[data-test="workspace-title"]', { timeout: 10000 }).should('exist');
      cy.get('[data-test="workspace-title"]').contains("Create your own team calendars")
      cy.get('[data-test="workspace-hero-description"]').contains("Synced is the easiest way for individual athletes or teams to plan, manage, and visualize their events in a shared team calendar.")
    })
  })    