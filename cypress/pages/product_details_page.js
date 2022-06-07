class ProductsDetailsPage{
    //seletores
    lblCart = '.shopping_cart_link';
    lblProductDetails = '.inventory_details';
    //acoes
    assertProductDetailsShould(type){
        cy.get(this.lblProductDetails).should(type);
    }

    goToCart(){
        cy.get(this.lblCart).click();
    }
    //funcionalidades
    checkIfProductDetailsExists(){
        this.assertProductDetailsShould("exist");
    }
}
export default ProductsDetailsPage