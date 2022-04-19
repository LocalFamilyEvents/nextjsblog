/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('header', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('displays the site logo', () => {
        cy.get('header')
            .find('img[src="/images/logo.svg"]')
            .should('have.attr', 'alt')
            .and('include', 'planethurley.com logo')
    })

    it('displays the dark theme toggle', () => {
        cy.get('header')
            .find('svg[data-icon="moon"]');
    })

    it('displays the light theme toggle', () => {
        cy.get('header')
            .find('svg[data-icon="sun"]');
    })

    it('displays the react hooks hop link', () => {
        cy.get('header')
            .contains('React Hooks Shop')
            .should('have.attr', 'href', '/playground/hooks-shop')
    })
})
