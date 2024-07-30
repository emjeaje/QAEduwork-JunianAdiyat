// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ------------------------------
Cypress.Commands.add('login',(uname,pwd) => {
    //getting element to input username and type username
    cy.get('#user_login').clear();
    cy.get('#user_login').type(uname);
    //getting element to input username and type passowrd
    cy.get('#user_password').clear();
    cy.get('#user_password').type(pwd);
    //getting element checkbox and click it
    cy.get('#user_remember_me').click();
    //getting element login button and click it
    cy.get('input[name="submit"]').click()
});