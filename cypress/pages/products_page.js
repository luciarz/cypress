class ProductsPage{
    //selector dos elementos
    lblProducts = '.title';
    lblCart = '.shopping_cart_link';
    btnAddCart = '(//button[contains(.,"Add to cart")])[1]';
    lblItemImage = '(//img[@class="inventory_item_img"])[1]';
   
    //Acoes

    assertProductsShould(type){
        cy.get(this.lblProducts).should(type);
    }

    clickImage(){
        cy.xpath(this.lblItemImage).click();
    }

    goToCart(){
        cy.get(this.lblCart).click();  }

    clickAddToCart(){
        cy.xpath(this.btnAddCart).click();
    }

    rightClickAddToCart(){
        //cy.xpath(this.btnAddCart).rightclick({ctrlKey: true});
        cy.xpath(this.btnAddCart).invoke('trigger', 'contextmenu')
    }

    //Funcionalidade
    checkIfProductExists(){
        this.assertProductsShould("exist");
    }
}

export default ProductsPage