//tambahkan assertion berdasarkan response body yang didapat (selain/bukan headers)
describe('Validate Headers Response', () => {
    it('coba validate header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon');
        cy.get('@pokemon').its('headers').its('content-type').should('include','application/json; charset=utf-8')
        
        //=>
        cy.get('@pokemon').then((response) => {
            expect(response.status).equal(200);
        })
    });
});