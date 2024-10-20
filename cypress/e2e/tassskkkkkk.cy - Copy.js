/// <reference types = "cypress"/>
import fs from 'fs';
const path = require('path');


let results =[];

//let res = ['FirstName', 'LastName', 'Gender', 'Username' , 'Password', 'Confirm Password', 'Email ID', 'Phone name']
describe('Validating the New User Registration Form',()=>{

beforeEach('Navigating to the Page', ()=>{

    cy.visit('http://V7datalabs.in/live')
})
it('FirstName',()=>{

    cy.vis();
    cy.fixture('task1.json').then((data) => {
      // Access the array from the JSON object
      const res = data.fieldname;
      cy.log(res);
                  // Access individual values
                  const firstValue = res[0];
                  const secondValue = res[1];
                  const thirdValue = res[2];
                   // Log individual values
            cy.log('First Value:', firstValue);
            cy.log('Second Value:', secondValue);
            cy.log('Third Value:', thirdValue);
    

cy.get('#first_name-22').then(($inp)=>{

    const v= $inp.val()
    if(v){
        let key1 = 'Pass'
        cy.log(key1)
        results.push( {key:key1, value: firstValue} )
        cy.log(results)
    }
    else{
       
        let key1 = 'Fail';
      cy.log(key1);
      results.push({ key: key1, value: firstValue });
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
      results.push({ key: key2, value: res[1] }); // Store result in array
    }
  }).then(()=>{              //for continuivity
    let gender_val = 'Male'   
   if(cy.get('input[name="gender[]"]').check(gender_val,{ force: true })){  
      let key3 = 'Pass'
      cy.log(key3);
      
      results.push({ key: key3, value: res[2] });
      cy.log(results)
     
    }
    else{
        let key3 = 'fail'
        cy.log(key3);
         
        results.push({ key: key3, value: res[2] });
      cy.log(results)
    }
    
    
  }).then(()=>{

    cy.get('#user_login-22').type('Amrin')
    .then(($UserName_input)=>{
     const UserName_val = $UserName_input.val()
     if(UserName_val){
     
       cy.get('[for="user_login-22"]').invoke('text').then(($text)=>{ 
        let Field_Name = $text
         let  Key4= 'Pass'
        
        cy.log(Key4);
         
        results.push({ key: Key4, value: Field_Name });
        cy.log(results)
         

       })
     }
     else{
       cy.log('There is no value in Username field')
      
       cy.log(Test_status);
       cy.get('[for="user_login-22"]').invoke('text').then(($text)=>{  
        let Field_Name = $text
         let  Key4= 'fail'
        
        cy.log(Key4);
         
        results.push({ key: Key4, value: Field_Name });
        cy.log(results)
       })
     }
  }).then(()=>{
    cy.get('#user_password-22').type('Fathima@123')
    .then(($pwd_input)=>{
     const pwd_val = $pwd_input.val()
     if(pwd_val){
     
       
      
    //    cy.get('[for="user_password-22"]').invoke('text').then(($text)=>{ 
    //      Field_Name = $text
    //      Test_status= 'Pass'
    //      map_Status_Value[Test_status]=Field_Name;  
    //      a.push( {Field_Name,Test_status} )
    //      cy.log(a)


         let  Key5= 'Pass'
        
         cy.log(Key5);
          
         results.push({ key: Key5, value: res[4] });
         cy.log(results)
        // })
     }
     else{
       cy.log('There is no value in Password field')
     
       cy.log(Test_status);
       cy.get('[for="user_password-22"]').invoke('text').then(($text)=>{  
         Field_Name = $text
           let Test_status = 'Fail'
         map_Status_Value[Test_status]=Field_Name;  
         a.push( {Field_Name,Test_status} )
         cy.log(a)
       })
     }

    }) 
  }).then(()=>{

    cy.get('#confirm_user_password-22').type('Fathima@123')
    .then(($conf_pwd_input)=>{
     const conf_pwd_val = $conf_pwd_input.val()
     if(conf_pwd_val){
       // cy.log('value is there')
    //    Test_status= 'Pass'
    //    // cy.log(Test_status);
    //    cy.get('[for="confirm_user_password-22"]').invoke('text').then(($text)=>{ 
    //      Field_Name = $text
    //      map_Status_Value[Test_status]=Field_Name;  
    //      a.push( {Field_Name,Test_status} )
    //      cy.log(a)

    //    })

    let  Key6= 'Pass'    
    cy.log(Key6);  
    results.push({ key: Key6, value: res[5] });
    cy.log(results)
     }
     else{
       cy.log('There is no value in Confirm Password field')
    //    let Test_status = 'Fail'
    //    cy.log(Test_status);
    //    cy.get('[for="user_password-22"]').invoke('text').then(($text)=>{  
    //      Field_Name = $text
    //      map_Status_Value[Test_status]=Field_Name;  
    //      a.push( {Field_Name,Test_status} )
    //      cy.log(a)
    //    })

    let  Key6= 'Fail'    
    cy.log(Key6);  
    results.push({ key: Key6, value: res[5] });
    cy.log(results)
     }

    })

  }).then(()=>{
    cy.get('#user_email-22').type('amrin@gmail.com')
         .then(($email_input)=>{
          const email_val = $email_input.val()
          if(email_val){
            // cy.log('value is there')
            // Test_status= 'Pass'
            // // cy.log(Test_status);
            // cy.get('[for="user_email-22"]').invoke('text').then(($text)=>{ 
            //   Field_Name = $text
            //   map_Status_Value[Test_status]=Field_Name;  
            //   a.push( {Field_Name,Test_status} )
            //   cy.log(a)

            // })

            let  Key7= 'Pass'    
            cy.log(Key7);  
            results.push({ key: Key7, value: res[6] });
            cy.log(results)
          }
          else{
            // cy.log('There is no value in Confirm Password field')
            // let Test_status = 'Fail'
            // cy.log(Test_status);
            // cy.get('[for="user_email-22"]').invoke('text').then(($text)=>{  
            //   Field_Name = $text
            //   map_Status_Value[Test_status]=Field_Name;  
            //   a.push( {Field_Name,Test_status} )
            //   cy.log(a)
            // })

            let  Key7= 'Fail'    
            cy.log(Key7);  
            results.push({ key: Key7, value: res[6] });
            cy.log(results)
          }
         })
  }).then(()=>{

    cy.get('#mobile_number-22').type('9710383836')
    .then(($mob_input)=>{
     const mob_val = $mob_input.val()
     if(mob_val){
       // cy.log('value is there')
    //    Test_status= 'Pass'
    //    // cy.log(Test_status);
    //    cy.get('[for="mobile_number-22"]').invoke('text').then(($text)=>{ 
    //      Field_Name = $text
    //      map_Status_Value[Test_status]=Field_Name;  
    //      a.push( {Field_Name,Test_status} )
    //      cy.log(a)

    //    })
    let  Key8= 'Pass'    
    cy.log(Key8);  
    results.push({ key: Key8, value: res[7] });
    cy.log(results)

     }
     else{
       cy.log('There is no value in Confirm Password field')
    //    let Test_status = 'Fail'
    //    cy.log(Test_status);
    //    cy.get('[for="mobile_number-22"]').invoke('text').then(($text)=>{  
    //      Field_Name = $text
    //      map_Status_Value[Test_status]=Field_Name;  
    //      a.push( {Field_Name,Test_status} )
    //      cy.log(a)
    //    })

    let  Key8= 'Fail'    
    cy.log(Key8);  
    results.push({ key: Key8, value: res[7] });
    cy.log(results)
     }

     

    })




  })
})








  .then(() => {
    // Log or process the final results array
    // cy.log('Results:', results);
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
});