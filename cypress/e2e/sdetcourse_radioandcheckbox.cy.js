describe('RADIO BUTTON',()=>{

    it('WORKING WITH RADIO BUTTON',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[class="radioButton"]').eq(0).should('be.visible')
        cy.get('[class="radioButton"]').eq(0).check().should('be.checked')  //use check() to check the radio buttton
        cy.get('[class="radioButton"]').eq(1).should('not.be.checked')
        cy.get('[class="radioButton"]').eq(1).should('have.value','radio2')
    })
    it('WORKING WITH CHECKBOX',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').should('be.visible')
        cy.get('#checkBoxOption1').check().should('be.checked')         //check()
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')   //uncheck()
        
        cy.get('[type="checkbox"]').check().should('be.checked')        //Check all options by selecting common locator of checkbox
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')  

        //selecting first and last checkboxes
        cy.get('[type="checkbox"]').first().check().should('be.checked') 
        cy.get('[type="checkbox"]').last().check().should('be.checked') 
    })
})

    