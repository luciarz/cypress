
describe("Funcionalidad de login",()=>{
    it("Login com sucesso",()=>{
        //cy.log("passou no teste");
        cy.visit("www.saucedemo.com");
        //cy.get('[data-test="username"]').type("standard_user");
        cy.xpath('//input[@id="user-name"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('title').should("exist");

    });
});