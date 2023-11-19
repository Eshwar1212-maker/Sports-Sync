describe('unauthenticated-nav', () => {
  it('Navbar contains correct logo', () => {
    cy.visit('')
    cy.get('[data-test="navbar-logo"]').contains("Synced")
    cy.get('[data-test="sign-in-button"]').contains("SIGN IN")
    cy.get('[data-test="getting-started-NavItem"]').contains("Getting Started")
    cy.get('[data-test="Workspaces-NavItem"]').contains("Workspaces")
    cy.get('[data-test="Tracking-NavItem"]').contains("Tracking")
    cy.get('[data-test="About-NavItem"]').contains("About")
  })
}) 