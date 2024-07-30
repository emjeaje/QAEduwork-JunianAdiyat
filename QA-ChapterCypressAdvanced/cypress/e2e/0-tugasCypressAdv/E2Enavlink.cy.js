//--------------------
//tambahkan assertion yang berbeda dari materi
//--------------------

/// <reference types="cypress"/>
describe('Navbar test', () =>{ 
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content', () => { 
        cy.contains('Online Banking').click();
        cy.url().should('include', 'online-banking.html');
        cy.get('h1').should('be.visible');
        
        //(1)
        cy.get('p').should('contain.text','Pay bills easily');
    });
    
    it('Should display feedback content', () => {
        cy.contains('Feedback').click();
        cy.url().should('include', 'feedback.html');
        
        //(2)
        cy.get('p').should('contain.text','This feedback facility is not secure');
    });
    
    it('Should display homepage content', () => { 
        cy.contains('Zero Bank').click();
        cy.url().should('include', 'index.html');

        //(3)
        cy.get('h4').should('contain.text','Checking Account Activity');
    });
});