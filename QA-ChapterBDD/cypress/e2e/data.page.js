const URL = 'http://zero.webappsecurity.com/login.html';
const unameField = '#user_login';
const unameData = 'username';
const pwdField = '#user_password';
const pwdData = 'password';
const signInBtn = 'Sign in'
const nextPage = '#account_summary_tab'

class Login {
    static visitURL(){
        cy.visit(URL);
    }
    static click_type_username(){
        cy.get(unameField).type(unameData);
    }
    static click_type_password(){
        cy.get(pwdField).type(pwdData);
    }
    static click_signInBtn(){
        cy.contains(signInBtn).click();
    }
    static nPage(){
        cy.get(nextPage)
    }
}

export default Login;