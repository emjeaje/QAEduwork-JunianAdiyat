/// <reference types="cypress"/>
describe("Test zerowebappsecurity", () => {
  //visit link
  it("Login to zero.webappsecurity", () => {
    cy.visit("http://zero.webappsecurity.com/");
    cy.get("#signin_button").click();
    cy.url().should("include", "login.html");

    cy.fixture("test_user").then((tu) => {
      const uname = tu.uname;
      const pwd = tu.pwd;

      cy.login(uname, pwd);
    });

    cy.get("#pay_bills_tab > a").click();
  });
});
