/// <reference types="cypress"/>
describe ('Test zerowebappsecurity',()=>{
    //visit link
    it('Login to zero.webappsecurity',()=>{
        cy.visit('http://zero.webappsecurity.com/');
        cy.get('#signin_button').click();
        cy.url().should('include','login.html');

        //getting element to input username and type username
        cy.get('#user_login').clear();
        cy.get('#user_login').type('username');

        //getting element to input username and type passowrd
        cy.get('#user_password').clear();
        cy.get('#user_password').type('password');

        //getting element checkbox and click it
        cy.get('#user_remember_me').click();

        //getting element login button and click it
        cy.get('.btn-primary').click();
        cy.url().should('include','index.html');
    });
});