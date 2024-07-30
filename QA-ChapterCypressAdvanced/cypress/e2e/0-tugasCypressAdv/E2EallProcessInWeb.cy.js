//--------------------
//Test Automation di web SAUCEDEMO
//--------------------

///<reference types="cypress"/>

function validData(){
    cy.fixture('test_user').then(tu=>{
        const uname = tu.sauce_valid.uname;
        const pwd = tu.sauce_valid.pwd;
        //getting & typing on username field
        cy.get('#user-name').clear();
        cy.get('#user-name').type(uname);
        //getting & typing on password field
        cy.get('#password').clear();
        cy.get('#password').type(pwd);
    })
    cy.get('#login-button').click();
}

function invalidData(){
    cy.fixture('test_user').then(tu=>{
        const uname = tu.sauce_invalid.uname;
        const pwd = tu.sauce_invalid.pwd;
        //getting & typing on username field
        cy.get('#user-name').clear();
        cy.get('#user-name').type(uname);
        //getting & typing on password field
        cy.get('#password').clear();
        cy.get('#password').type(pwd);
    })
    cy.get('#login-button').click();
    cy.get('h3').should('contain.text','Epic sadface: Username and password do not match any user in this service')
}

describe('Automation on saucedemo.com',() =>{
    beforeEach('baseURL',()=>{
        cy.visit('https://saucedemo.com/',{timeout:10000});
    });

    //login with invalid data
    //--------------------
    // it('Should login with invalid data',()=>{
    //     invalidData();
    // });

    //login with valid data
    //--------------------
    // it('Should login with valid data',()=>{
    //     validData();
    // });

    //Saucelabs Backpack detail and Add to cart
    //--------------------
    // it('Should login with valid data > click Saucelabs Backpack > add to cart ',()=>{
    //     validData();
    //     cy.get('[data-test="item-4-title-link"]').should('contain.text', 'Sauce Labs Backpack').click();
    //     cy.get('#add-to-cart').should('contain.text', 'Add to cart').click();
    // });

    //Saucelabs Bike Light detail and Add to cart
    //--------------------
    // it('Should login with valid data > click Saucelabs Bike Light > add to cart ',()=>{
    //     validData();
    //     cy.get('[data-test="item-0-title-link"]').should('contain.text', 'Sauce Labs Bike Light').click();
    //     cy.get('#add-to-cart').should('contain.text', 'Add to cart').click();
    // });

    //Saucelabs Bolt T-Shirt detail and Add to cart
    //--------------------
    // it('Should login with valid data > click Saucelabs Bolt T-Shirt > add to cart ',()=>{
    //     validData();
    //     cy.get('[data-test="item-1-title-link"]').should('contain.text', 'Sauce Labs Bolt T-Shirt').click();
    //     cy.get('#add-to-cart').should('contain.text', 'Add to cart').click();
    // });
    
    //Saucelabs Fleece Jacket detail and Add to cart
    //--------------------
    // it('Should login with valid data > click Saucelabs Fleece Jacket > add to cart ',()=>{
    //     validData();
    //     cy.get('[data-test="item-5-title-link"]').should('contain.text', 'Sauce Labs Fleece Jacket').click();
    //     cy.get('#add-to-cart').should('contain.text', 'Add to cart').click();
    // });

    //Saucelabs Onesie detail and Add to cart
    //--------------------
    // it('Should login with valid data > click Saucelabs Onesie > add to cart ',()=>{
    //     validData();
    //     cy.get('[data-test="item-2-title-link"]').should('contain.text', 'Sauce Labs Onesie').click();
    //     cy.get('#add-to-cart').should('contain.text', 'Add to cart').click();
    // });

    //Saucelabs T-Shirt (Red) detail and Add to cart
    //--------------------
    it('Should login with valid data > click T-Shirt (Red) > add to cart ',()=>{
        validData();
        cy.get('[data-test="item-3-title-link"]').should('contain.text', 'T-Shirt (Red)').click();
        cy.get('#add-to-cart').should('contain.text', 'Add to cart').click();
    });

});