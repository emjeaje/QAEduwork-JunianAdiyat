///<reference types="cypress"/>

describe('Test Login & Logout', () => {
	beforeEach(() => {
		cy.visit('http://zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.url().should('include', 'index.html')
		cy.get('#signin_button').click()
	})

	it('Should login with invalid data & show alert', () => {
		cy.fixture('test_user').then(tu => {
			const uname = tu.invalid.uname
			const pwd = tu.invalid.pwd
			//getting element to input username and type username
			cy.get('#user_login').clear()
			cy.get('#user_login').type(uname)
			//getting element to input username and type passowrd
			cy.get('#user_password').clear()
			cy.get('#user_password').type(pwd)
			//getting element checkbox and click it
			cy.get('#user_remember_me').click()
			cy.get('input[name="submit"]').click()
		})
		cy.get('.alert')
			.should('be.visible')
			.and('contain.text', 'Login and/or password are wrong.')
	})

	it('Should login with valid data & logout', () => {
		cy.fixture('test_user').then(tu => {
			const uname = tu.valid.uname
			const pwd = tu.valid.pwd
			//getting element to input username and type username
			cy.get('#user_login').clear()
			cy.get('#user_login').type(uname)
			//getting element to input username and type passowrd
			cy.get('#user_password').clear()
			cy.get('#user_password').type(pwd)
			//getting element checkbox and click it
			cy.get('#user_remember_me').click()
		})
		cy.get('input[name="submit"]').click()
		cy.contains('username').click()
		cy.contains('Logout').click()
		// cy.get('#logout_link').click();
		cy.url().should('include', 'index.html')
		cy.get('strong').should('contain.text', 'Home')
	})
})
