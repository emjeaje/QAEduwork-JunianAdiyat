describe('Validate Status Code Response', () => {
    //cara 1
    it('coba validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon');
        cy.get('@pokemon').its('status').should('equal',200)
    });

    //cara 2
    it.only('coba validate status code', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).as('pokemon');

        cy.get('@pokemon').then((response) => {
            expect(response.status).equal(200);
        })
    });
});