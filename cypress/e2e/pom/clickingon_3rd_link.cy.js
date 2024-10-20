/// <reference types = "cypress"/>

const { should } = require("chai")

describe('3rd link',()=>{

it('link',()=>{

cy.visit('')

//cy.get('[class="LC20lb MBeuO DKV0Md"]').eq(2).click();

Cypress.Commands.add('selectingoption',(locationoption),shouldAssert=false)
    cy.get('').should('have.value',Option).then($el=>{
        const selectedvalue=$el.val();
        if(shouldassert){
            if(selectedvalue!==option){
                throw new Error(`Custom Exception: Expected ${locator} to have.value ${option}, but got : ${selectedvalue}`)

            
        }


        }
    })

})


})