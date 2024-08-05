//bagaimana cara mengambil data dari response body?
describe('Validate Content Response', () => {
    it.only('coba validate status code', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).as('pokemon');

        cy.get('@pokemon').then((response) => {
            expect(response.status).equal(200),
            expect(response.body.abilities[0].ability['name']).to.eq("limber")
        })
    });
});