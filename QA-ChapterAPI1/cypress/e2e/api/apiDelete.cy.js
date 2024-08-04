describe('Delete user', () => {
    it('test delete user', () => {
        cy.request('DELETE','https://reqres.in/api/users/2').then((result) => {
            expect(result.status).equal(204)
            expect(result.headers.server).to.eq('cloudflare')
        })
    });
});