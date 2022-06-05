class LoginPage{
    txtEmail = '//input[@id="user-name"]';
    txtPassword = '[data-test="password"]';
    btnLogin = '[data-test="login-button"]';
    lblError = '[data-test="error"]';
    
    typeUsername(username){
        cy.xpath(this.txtEmail).type(username);
    }

    typePassword(password){
        cy.get(this.txtPassword).type(password);
    }
    clickLogin(){
        cy.get(this.btnLogin).click();
    }

    assertionErrorShould(type,value){
        cy.get(this.lblError).should(type,value);
    }

    assertionErrorContains(text){
        cy.get(this.lblError).contains(text);
    }
    //Funcionalidades

    realizedLogin(username,password){
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }
}
export default LoginPage