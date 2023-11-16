import React from 'react'
import Modal from './Modal'

describe('<Modal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Modal />)
  })
})