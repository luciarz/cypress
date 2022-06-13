class ProductsDetailsPage{
    //seletores
    lblCart = '.shopping_cart_link';
    lblProductDetails = '.inventory_details';
    btnBack = '[data-test="back-to-products"]';
    //acoes
    assertProductDetailsShould(type){
        cy.get(this.lblProductDetails).should(type);
    }

    goToCart(){
        cy.get(this.lblCart).click();
    }

    goBack(){
        cy.get(this.btnBack).click();
    }
    //funcionalidades
    checkIfProductDetailsExists(){
        this.assertProductDetailsShould("exist");
    }


}
export default ProductsDetailsPage