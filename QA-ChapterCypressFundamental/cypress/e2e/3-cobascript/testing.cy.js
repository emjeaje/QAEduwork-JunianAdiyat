/// <reference types="cypress"/>
describe ('Test siaka undipa',()=>{
    //visit link
    it('Should go to siaka and login',()=>{
        cy.visit('https://siaka.undipa.ac.id/');
        // cy.fixture('test_user').then(tu=>{
        //     const uname = tu.uname;
        //     const pwd = tu.pwd;
        //     //getting element to input username and type username
        // })
        cy.get('.btn').click();
        cy.get('#email').click().clear();
        cy.get('#email').type('172035');
        cy.get('#pasw').click().clear();
        cy.get('#pasw').type('172035');
        
        cy.get('select').select('Mahasiswa').should('have.value', 'MHS');
        cy.get('input[value="Login"]').click();
        cy.url().should('include', 'index.php')
    });
});