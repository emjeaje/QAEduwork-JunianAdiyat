describe ('Get User List',()=>{
    it ('Verify User',()=>{
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users'
        }).as('users')
        cy.get('@users').its('status').should('equal',200);
    })
})