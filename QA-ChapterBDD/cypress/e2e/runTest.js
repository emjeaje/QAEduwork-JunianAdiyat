import Login from './data.page';
const {Given, When, Then} = require('@badeballcypress-cucumber-preprocessor');

Given('I open login page',()=>{
    Login.visitURL();
});

When('I submit login',()=>{
    Login.click_type_username();
    Login.click_type_password();
    Login.click_signInBtn();
});

Then('I should see homepage',()=>{
    Login.nPage().should('be.visible');
});