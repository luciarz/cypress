import CartPage from "../../pages/cart_page";
import CheckoutPage from "../../pages/checkout_page";
import LoginPage from "../../pages/login_page"
import ProductsPage from "../../pages/products_page";

var loginPage = new LoginPage();
var productsPage = new ProductsPage();
var cartPage = new CartPage();
var chekcoutPage = new CheckoutPage();

describe("Funcionalidade do checkout",()=>{
    beforeEach(()=>{
        cy.visit("www.saucedemo.com/"); 
        loginPage.realizedLogin("standard_user","secret_sauce");

    });

    it("Login e fazer checkout com sucesso", ()=>{
        productsPage.checkIfProductExists();
        productsPage.clickAddToCart();
        productsPage.goToCart();
        cartPage.checkIfCartExists();
        cartPage.clickCheckout();
        chekcoutPage.checkIfCheckoutExists();
        chekcoutPage.fillForm('Juan', 'Perez', 123456);
        chekcoutPage.clickFinish();
        chekcoutPage.checkIfComplete();
        
        
    })

});