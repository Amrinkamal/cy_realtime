// import cypress = require("cypress");

describe('Validation',()=>{
    it('HomePage',()=>{
        cy.visit('https://www.firstcry.com')
        cy.get('div ul li a[href="/"]').eq(1).trigger('mouseover');
        //cy.get('div ul li [class="M13_42"]',{timeout:8000}).click({force:true})
       // cy.get('li[class='allcat'] a[class='M13_75']').click()

       cy.get('div ul li [class="M13_75"]').each(($all)=>{

            if($all.text()==='DIAPERING'){

                
        cy.wrap($all).click()


            }

       })
       Cypress._.times(5,()=>{

        cy.get('.newArrivals > .bx-wrapper > .bx-controls > .bx-controls-direction > .bx-next').click({force: true})


       })
    //    for (let i = 0; i<5; i++){

    //     cy.get('.newArrivals > .bx-wrapper > .bx-controls > .bx-controls-direction > .bx-next').click({force: true})
    //     cy.wait(10000)

    //    }
      
        // cy.get('div ul li[class="categry"]').invoke('text').then((tx)=>{

        // let n = tx;
        //     cy.log(n)
        // })
        
    })

})