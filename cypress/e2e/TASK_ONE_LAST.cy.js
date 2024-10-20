// /// <reference types = "cypress"/>
// import eachField from '../e2e/pom/task_1_POM.cy';
// let userDetails = new eachField();
// let data;
// describe('Validating the New User Registration Form', () => {
//   beforeEach('Navigating to the Page', () => {
//     cy.visit('http://V7datalabs.in/live');
//     cy.fixture('example').then((inputDATA)=>{
//         data=inputDATA;
//     })
//   });
//   after(() => {
//     userDetails.creatingCSV_File('task-output.csv');
//   });

//   it.skip('All',()=>{
//     userDetails.firstName(data.FirstName); 
//     userDetails.lastName(data.LastName);
//     userDetails.genDER(data.Gender_Male);
//     userDetails.userName(data.USERNAME);
//     userDetails.userPassword(data.PASSWORD);
//     userDetails.confirm_Password(data.PASSWORD);
//     userDetails.emailID(data.Email);
//     userDetails.PhoneNumber(data.Phone)

//   })
//   it('FirstName', () => { 
//     userDetails.firstName(data.FirstName);  
//   });
//   it('LastName', () => {
//     userDetails.lastName(data.LastName)
//   });

//   it('Gender', () => {
//     userDetails.genDER(data.Gender_Male);
//   });

//   it('UserName', () => {

//     userDetails.userName(data.USERNAME);
//   });

//   it('Password', () => {
    
//     userDetails.userPassword(data.PASSWORD)
//   });

//   it('Confirm Password', () => {

//     userDetails.confirm_Password(data.PASSWORD)
//   });

//   it('Email', () => {
    
//     userDetails.emailID(data.Email);
//   });

//   it('Mobile Number', () => {
   
//     userDetails.PhoneNumber(data.Phone)
//   });
// });


/// <reference types = "cypress"/>
import eachField from '../e2e/pom/task_1_POM.cy';
let userDetails = new eachField();
let data;
describe('Validating the New User Registration Form', () => {
  beforeEach('Navigating to the Page', () => {
    cy.visit('http://V7datalabs.in/live');
    cy.fixture('example').then((inputDATA)=>{
        data=inputDATA;
    })
  });
  after(() => {
    userDetails.creatingCSV_File('task-output.csv');
  });

  it('Validating Registration Page',()=>{   
    userDetails.firstName(data.FirstName); 
    userDetails.lastName(data.LastName);
    userDetails.genDER(data.Gender_Female);
    userDetails.userName(data.USERNAME);
    userDetails.userPassword(data.PASSWORD);
    userDetails.confirm_Password(data.PASSWORD);
    userDetails.emailID(data.Email);
    userDetails.PhoneNumber(data.Phone);
    // Uncaught Exception
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  }) 
});