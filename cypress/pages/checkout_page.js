class CheckoutPage{
    //selector dos elementos
    lblCheckout = '.title';
    btnContinue = '[data-test="continue"]';
    txtFirstName = '[data-test="firstName"]';
    txtLastName = '[data-test="lastName"]';
    txtZipCode = '[data-test="postalCode"]';
    btnFinish = '[data-test="finish"]';
    lblComplete = '.complete-header';


    //Acoes
    
    assertCheckoutShould(type){
        cy.get(this.lblCheckout).should(type);
    }
    
    assertCheckoutCompleteShould(type){
        cy.get(this.lblComplete).should(type);
    }

    typeFirstName(firstName){
        cy.get(this.txtFirstName).type(firstName);
    }

    typeLastName(lastName){
        cy.get(this.txtLastName).type(lastName);
    }

    typeZipCode(zipCode){
        cy.get(this.txtZipCode).type(zipCode);
    }

    clickContinue(){
        cy.get(this.btnContinue).click();
    }

    clickFinish(){
        cy.get(this.btnFinish).click();
    }

    //Funcionalidade
    checkIfCheckoutExists(){
        this.assertCheckoutShould("exist");
    }

    checkIfComplete(){
        this.assertCheckoutCompleteShould("exist");
    }

    fillForm(firstName, lastName, zipCode){
        this.typeFirstName(firstName);
        this.typeLastName(lastName);
        this.typeZipCode(zipCode);
        this.clickContinue();
    }

}

export default CheckoutPage