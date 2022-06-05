class ProductsPage{
    //selector dos elementos
    lblProducts = '.title';
    lblCart = '.shopping_cart_link';
    btnAddCart = '(//button[contains(.,"Add to cart")])[1]';

    //Acoes

    assertProductsShould(type){
        cy.get(this.lblProducts).should(type);
    }

    goToCart(){
        cy.get(this.lblCart).click();
    }

    clickAddToCart(){
        cy.xpath(this.btnAddCart).click();
    }

    //Funcionalidade
    checkIfProductExists(){
        this.assertProductsShould("exist");
    }
}

export default ProductsPage