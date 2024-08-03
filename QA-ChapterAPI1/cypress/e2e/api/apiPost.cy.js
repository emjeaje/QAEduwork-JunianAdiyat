describe('Create new user', () => {
    var users ={
        "name" : "kudaponi",
        "job" : "bertani"
    }
    it('test buat user', () => {
        cy.request('POST','https://reqres.in/api/users',users).then((result) => {
            expect(result.status).equal(201)
            expect(result.body['name']).equal('kudaponi')
            expect(result.body['job']).equal('bertani')
        })
    });
});