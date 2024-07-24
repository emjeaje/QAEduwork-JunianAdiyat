/* 
Lengkapi kode berikut supaya tidak terjadi error

describe('My First Test',()=>{
    it('Clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io');
        cy.pause();
        cy.contains('type').click();
        cy.url().should('include', '...');
        cy.get('.action-email').type('...').should('have.value','...');
    });
});
*/

/// <reference types="cypress" />
describe('My First Test',()=>{
    it('Clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io');
        cy.pause();
        cy.contains('type').click();
        cy.url().should('include','https://example.cypress.io/commands/actions');

        cy.get('.action-email').type('testedu.ja@gmail.com').should('have.value','testedu.ja@gmail.com');
    });
});