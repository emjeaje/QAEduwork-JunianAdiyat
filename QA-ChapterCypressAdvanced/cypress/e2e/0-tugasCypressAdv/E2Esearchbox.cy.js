///<reference types="cypress" />

describe ('Searchbox test', () => {
    before (()=>{
        cy.visit ('http://zero.webappsecurity.com/')
    })

    it('Should type into searchbox',()=>{
        cy.get('#searchTerm').type('some text {enter}')
        cy.get('h2').should('contain','Search Results')
    })
})