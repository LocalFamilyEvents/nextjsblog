/// <reference types="cypress" />
describe('header', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('shows a page title', () => {
        cy.title().should('eq', 'Planet Hurley - Simon Hurley');
    })
})
