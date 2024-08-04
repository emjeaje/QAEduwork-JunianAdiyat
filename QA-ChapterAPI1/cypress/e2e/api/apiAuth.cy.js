describe('Auth test', () => {
    //with url
    // it('test auth user', () => {
    //     cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    //     cy.get('p').should('include.text','Congratulations! You must have the proper credentials.')
    // });
    
    //with headers
    // it('test auth user', () => {
    //     cy.visit('https://the-internet.herokuapp.com/basic_auth',{
    //         headers:{
    //             authorization : "Basic YWRtaW46YWRtaW4="
    //         },
    //         failOnStatusCode: false
    //     });
    //     cy.get('p').should('include.text','Congratulations! You must have the proper credentials.')
    // });
    
    //tugas
    it('test auth user', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get('p').should('include.text','Congratulations! You must have the proper credentials.')

        Cypress.Commands.add('LoginViaAPI', (
            email = Cypress.env('userEmail'),
            password = Cypress.env('userPassword')
        ) =>{
                cy.request('POST', `${Cypress.env('apiUrl')}/user/login`,
                {username: email, password}).then ((response)=>{
                    cy.setCookie('sessionId', response.body.sessionId),
                    cy.setCookie('userId', response.body.userId),
                    cy.setCookie('userName', response.body.userName)
                    cy.visit('/#!/main')
                })
            })
    });
});