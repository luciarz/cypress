class CartPage{
    //selector dos elementos
    lblCart = '.title';
    btnRemoveItem = '(//button[contains(.,"Remove")])[1]';
    divCart = '.cart_item'
    btnCheckout = '[data-test="checkout"]';
    //Acoes
    
    assertCartShould(type){
        cy.get(this.lblCart).should(type);
    }

    assertCartItem(type){
        cy.get(this.divCart).should(type);
    }

    clickRemoveItem(){
        cy.xpath(this.btnRemoveItem).click();
    }    
    
    clickCheckout(){
        cy.get(this.btnCheckout).click();
    }

    //Funcionalidade
    checkIfCartExists(){
        this.assertCartShould("exist");
    }

    checkIsCartEmpty(){
        this.assertCartItem("not.exist");
    }

    removeItem(){
        this.clickRemoveItem();
    }

}

export default CartPage