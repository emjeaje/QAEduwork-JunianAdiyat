describe('Update user', () => {
    var users ={
        'name' : "kudaponi",
        'job' : "bertani"
    }
    it('test update user', () => {
        cy.request('PUT','https://reqres.in/api/users/2',users).then((result) => {
            expect(result.status).equal(200)
            expect(result.body['name']).to.equal(users.name)
        })
    });
});