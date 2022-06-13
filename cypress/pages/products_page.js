class ProductsPage{
    //selector dos elementos
    lblProducts = '.title';
    lblCart = '.shopping_cart_link';
    btnAddCart = '(//button[contains(.,"Add to cart")])[1]';
    lblFirstItemImage = '(//img[@class="inventory_item_img"])[1]';
    lblItemImage = '//img[@class="inventory_item_img"]';
    lblItem = '.inventory_item';
   
    //Acoes

    assertProductsShould(type){
        cy.get(this.lblProducts).should(type);
    }

    clickFirstImage(){
        cy.xpath(this.lblFirstItemImage).click();
    }

    clickToDetails(){
        cy.get(this.lblItem).each((itens)=>{
            cy.wrap(itens).each((item)=>{
                cy.wrap(item).find('.inventory_item_name').invoke("text").then((text)=>{
                    var nome = text;
                    //cy.log(text);
                    


                });
            })
        });
    }

    clickToComparePrice(){
        var price = 0;
        
        cy.get(this.lblItem).each((itens)=>{
            cy.wrap(itens).each((item)=>{
                cy.wrap(item).find('.inventory_item_price').invoke("text").then((text)=>{
                    price = text;
                    cy.log(price);
                    
                    //cy.log(text);
                    


                });
               cy.wrap(item).find('.inventory_item_img').each((e,index)=>{
                    if(index==1){
                        e.click();
                    }
               });
            })
        });
        return ("ok");
    }

    getPrice(element){
       /* cy.wrap(element).find('.inventory_item_price').invoke("text").then((text)=>{
            //cy.log(text);
            return(text);
        });*/
        cy.wrap(element).find('.inventory_item_price').invoke("text").as('price');
        //cy.get('@price');

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

    getItems(){
        return(cy.get(this.lblItem));
    }

    clickImage(element){
        cy.log(element);
        cy.get(element).find('.inventory_item_img').each((e,index)=>{
            if(index==1){
                e.click();
            }
        });
    }

    //Funcionalidade
    checkIfProductExists(){
        this.assertProductsShould("exist");
    }

}

export default ProductsPage