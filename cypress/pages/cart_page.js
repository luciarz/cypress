class CartPage{
    //selector dos elementos
    lblCart = '.title';
    btnRemoveItem = '(//button[contains(.,"Remove")])[1]';

    //Acoes
    
    assertCartShould(type){
        cy.get(this.lblCart).should(type);
    }

    clickRemoveItem(){
        cy.xpath(this.btnRemoveItem).click();
    }
    

    //Funcionalidade
    checkIfCartExists(){
        this.assertCartShould("exist");
    }

    removeItem(){
        this.clickRemoveItem();
    }

}

export default CartPage