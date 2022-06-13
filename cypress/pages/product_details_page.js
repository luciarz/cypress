
class ProductsDetailsPage{
    //seletores
    lblCart = '.shopping_cart_link';
    lblProductDetails = '.inventory_details';
    btnBack = '[data-test="back-to-products"]';
    lblPrice = '.inventory_details_price';
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

    comparePrice(productPrice){
        cy.get(this.lblPrice).invoke('text').then((p)=>{
            expect(p).to.eq(productPrice);
        });
    }
    //funcionalidades
    checkIfProductDetailsExists(){
        this.assertProductDetailsShould("exist");
    }


}
export default ProductsDetailsPage