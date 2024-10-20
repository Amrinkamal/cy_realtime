describe ('demo',()=>{

    it('url assertion',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrm')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contains','orange')
        
//Instead of using cy command u can use this way as well
        cy.url().should('include','orangehrm')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contains','orange')
        .should('not.contain','greenshrm')  //negative assertion
        .and('not.be.include','blue')        //negative assertion

//title assertion
        cy.title().should('include','Orange')
        .should('eq','OrangeHRM')
        .should('contains','HRM')
// logo exist or not assertion by using exist
        cy.get('[class="orangehrm-login-logo"]>img').should('be.visible')
        .and('exist')


//*******************************************************************************************8 */        
//explicit assertion (BDD)

        let ev="Username"
        cy.get('[class="oxd-label"]').eq(0).then((av)=>{    //getting text from locator and storing it on "av" variable
            let an=av.text()                                //Calling text() and storing in another variable
            expect(an).to.equal(ev)                         //+ve assertion
           // expect(an).to.not.equal(ev)                     //-ve assertion

        })
//explicit assertion (TDD)
        const expval="Password"
        cy.get('[class="oxd-label"]').eq(1).then((Actval)=>{
            let actual=Actval.text()
            assert.equal(actual,expval)

        })

        //IMPLICIT ASSERTION
        cy.get('[class="oxd-label"]').eq(1).should('have.text','Password')


    })

})