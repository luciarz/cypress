
import CartPage from "../../pages/cart_page";
import LoginPage from "../../pages/login_page"
import ProductsPage from "../../pages/products_page";

var loginPage = new LoginPage();
var productsPage = new ProductsPage();
var cartPage = new CartPage();

describe("Funcionalidad de login",()=>{
    beforeEach(()=>{
        cy.visit("www.saucedemo.com/"); 
    });
/*
    it("Login com sucesso",()=>{
        loginPage.realizedLogin("standard_user","secret_sauce");

        productsPage.checkIfProductExists();
        //arriba en vez cy.get('.title').should("exist");
        //cy.log("passou no teste");
        //cy.get('[data-test="username"]').type("standard_user");
        //cy.xpath('//input[@id="user-name"]').type("standard_user");
        //cy.get('[data-test="password"]').type("secret_sauce");
        //cy.get('[data-test="login-button"]').click();
        });
        
    it("Login com falha senha incorreta",()=>{
        loginPage.realizedLogin("standard_user","123_sauce");

        loginPage.assertionErrorShould("contain.text","Username and password do not match");
        loginPage.assertionErrorContains("Username and password do not match");
        // cy.get('[data-test="error"]').should("contain.text","Username and password do not match any user in this service");
        //cy.get('[data-test="error"]').should("contain.text","Username and password do not match any user in this service");

        });

    it("Login com falha senha incorreta",()=>{
        loginPage.realizedLogin("testeuser","secret_sauce");

        //loginPage.assertionErrorShould("contain.text","Username and password do not match");
        //loginPage.assertionErrorShould("Username and password do not match");
        cy.get('[data-test="error"]').should("contain.text","Username and password do not match any user in this service");
        cy.get('[data-test="error"]').contains("Username and password do not match any user in this service");

        }); 
*/
    it("Login e adicionar produto no carrinho", ()=>{
        loginPage.realizedLogin("standard_user","secret_sauce");
        productsPage.checkIfProductExists();
        productsPage.clickAddToCart();
        productsPage.goToCart();
        cartPage.checkIfCartExists();
        cartPage.removeItem();
    })
});