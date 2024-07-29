/// <reference types="cypress"/>

describe ('Test saucedemo',()=>{

    beforeEach('Should visit url saucedemo.com',()=>{
       cy.visit('https://www.saucedemo.com/');
   });

   function Isidata(){
       cy.fixture("test_user").then(tu=>{
           const uname = tu.uname;
           const pwd = tu.pwd;
           //getting element to input username and type username
           cy.get('#user-name').click();
           cy.get('#user-name').type(uname);
           //getting element to input username and type passowrd
           cy.get('#password').click();
           cy.get('#password').type(pwd);
       })
       cy.get('#login-button').click();
   }

   // it('Should login with valid data',()=>{
   // });
   //visit link
   it('Should add item to chart',()=>{
       Isidata();
       cy.get('#add-to-cart-sauce-labs-backpack').click();
       cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
   });
});