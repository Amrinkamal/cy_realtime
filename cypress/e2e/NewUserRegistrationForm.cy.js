/// <reference types="cypress"/>

import userinfo from "./NewUserDetails.cy";


let userDetails = new userinfo();
describe('Validating the Registration Form',()=>{

    beforeEach(function() {
        cy.visit('http://V7datalabs.in/live');
        this.startTime = new Date().getTime();  
      });
        afterEach(function() {

            const endTime = new Date().getTime();
            const timeTakenMs = endTime - this.startTime; 
            const timeTakenS = (timeTakenMs / 1000).toFixed(1) + 's'; // Convert to seconds and format
        
        
            cy.task('recordTestResult', {
              testName: this.currentTest.title,
              status: this.currentTest.state,
              timeTaken: timeTakenS
            });
          });
 
it('Smoke',()=>{

    userDetails.FirstName('Harikumar')
    userDetails.LastName('M')
    userDetails.Gender('Male')
    userDetails.DateOfBirth()
    userDetails.UserName('Hari0302')
    userDetails.PassWord('Hari0302')
    userDetails.ConfirmPassword('Hari0302')
    userDetails.Email('harishmohan0302@gmail.com')
    userDetails.PhoneNumber('9787947517')
    userDetails.TermsCheckBox()
    userDetails.RegisterButton()
})

it.only('TestCase 1',()=>{
    userDetails.FirstName(' ')
    userDetails.LastName('M')
    userDetails.Gender('Male')
    userDetails.DateOfBirth()
    userDetails.UserName('Hari0302')
    userDetails.PassWord('Hari0302')
    userDetails.ConfirmPassword('Hari0302')
    userDetails.Email('harishmohan0302@gmail.com')
    userDetails.PhoneNumber('9787947517')
    userDetails.TermsCheckBox()
    userDetails.RegisterButton()
    cy.get('#um-error-for-first_name-22').should('have.text','First Name is required')
    
})

it('TestCase 2',()=>{
    userDetails.FirstName('Harikumar')
    userDetails.LastName(' ')
    userDetails.Gender('Male')
    userDetails.DateOfBirth()
    userDetails.UserName('Hari0302')
    userDetails.PassWord('Hari0302')
    userDetails.ConfirmPassword('Hari0302')
    userDetails.Email('harishmohan0302@gmail.com')
    userDetails.PhoneNumber('9787947517')
    userDetails.TermsCheckBox()
    userDetails.RegisterButton()
    cy.get('#um-error-for-last_name-22').should('have.text','Last Name is required')
})

it('TestCase 3',()=>{
  userDetails.FirstName('Harikumar')
  userDetails.LastName(' M')
  userDetails.Gender('Male')
  userDetails.DateOfBirth()
  userDetails.UserName(' ')
  userDetails.PassWord('Hari0302')
  userDetails.ConfirmPassword('Hari0302')
  userDetails.Email('harishmohan0302@gmail.com')
  userDetails.PhoneNumber('9787947517')
  userDetails.TermsCheckBox()
  userDetails.RegisterButton()
  cy.get('#um-error-for-user_login-22').should('have.text','User Name is required')
})

})