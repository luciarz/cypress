import CartPage from "../../pages/cart_page";
import LoginPage from "../../pages/login_page"
import ProductsPage from "../../pages/products_page";
import ProductsDetailsPage from "../../pages/product_details_page";

var loginPage = new LoginPage();
var productsPage = new ProductsPage();
var cartPage = new CartPage();
var productDetailsPage = new ProductsDetailsPage();

describe("Funcionalidade do produto",()=>{
    beforeEach(()=>{
        cy.visit("www.saucedemo.com/"); 
        loginPage.realizedLogin("standard_user","secret_sauce");

    });
/*
    it("Login e adicionar produto no carrinho com sucesso", ()=>{
        productsPage.checkIfProductExists();
        productsPage.clickAddToCart();
        productsPage.goToCart();
        cartPage.checkIfCartExists();
        cartPage.removeItem();
        cartPage.checkIsCartEmpty();
    })

    it("Login e tentar adicionar produto no carrinho com click direito", ()=>{
        productsPage.checkIfProductExists();
        productsPage.rightClickAddToCart();
        
    })
    it("Login e error de tentar adicionar produto no carrinho com click na imagen",()=>{
        productsPage.checkIfProductExists();
        productsPage.clickFirstImage();
        productDetailsPage.checkIfProductDetailsExists();
        productDetailsPage.goToCart();
        cartPage.checkIfCartExists();
        cartPage.checkIsCartEmpty();
    })

    it("Login e visualizar tela do produto", ()=>{
        productsPage.checkIfProductExists();
        productsPage.clickToDetails();
        //productsPage.clickFirstImage();
        //productDetailsPage.checkIfProductDetailsExists();
        
    })
*/
    it("Login e comparar preco do produto", ()=>{
        productsPage.checkIfProductExists();
        var items = productsPage.getItems();
        items.each((item)=>{
            //cy.wrap(item);
            var price = productsPage.getPrice(item);
            //cy.log(price);
        });
    })
});