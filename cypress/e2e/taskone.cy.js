/// <reference types = "cypress"/>
import fs from 'fs';
const path = require('path');


let results =[];
let res = ['FirstName', 'LastName']
describe('Validating the New User Registration Form',()=>{

beforeEach('Navigating to the Page', ()=>{

    cy.visit('http://V7datalabs.in/live')
})
it('FirstName',()=>{

    cy.vis();

cy.get('#first_name-22').then(($inp)=>{

    const v= $inp.val()
    if(v){
        let key1 = 'Pass'
        cy.log(key1)
        results.push( {key:key1, value: res[0]} )
        cy.log(results)
    }
    else{
       
        let key1 = 'Fail';
      cy.log(key1);
      results.push({ key: key1, value: res[0] });
      cy.log(results)
    }
}).then(() => {
    // Proceed with the second field after the first one is processed
    return cy.get('#last_name-22').type('Har');
  })
  .then(($input) => {
    const valu = $input.val();
    if (valu) {
      let key2 = 'Pass';
      cy.log(key2);
      results.push({ key: key2, value: res[1] }); // Store result in array
    } else {
      cy.log('There is no value in Lastname field');
      let key2 = 'Fail';
      cy.log(key2);
      results.push({ key: key2, value: null }); // Store result in array
    }
  })
  .then(() => {
    // Log or process the final results array
    cy.log('Results:', results);
    // You can use results array here

    const transformToCSV = (data) => {
        const headers = data.map(item => item.value);
        const csvContent = [
          [...headers].join(','),  // Header row
          [...data.map(item => item.key)].join(',')  // Data row
        ].join('\n');
        return csvContent;
      };
      
      // Convert data to CSV format
      const csvData = transformToCSV(results);
      cy.log(csvData)

      const fileName = 'task-one.csv'

      cy.task('write',{ fileName, data : csvData})

    //   const filePath = path.join(__dirname, 'results', 'task-one.csv');
      
  });
});  
})


