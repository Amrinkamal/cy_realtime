describe ('Registration',()=>{
    const a = [];
    let map_Status_Value ={}; 
    let Test_status;
    let Field_Name;  
    beforeEach(()=>{
        cy.visit('http://V7datalabs.in/live')
    })
    it('Firstname',()=>{
         cy.get('#first_name-22').type('Amrin')
         .then(($FirstName_input)=>{
          const FirstName_val = $FirstName_input.val()
          if(FirstName_val){
            Test_status = 'Pass'
            // cy.log(Test_status);
            cy.get('[for="first_name-22"]').invoke('text').then(($text)=>{   
              Field_Name = $text
              map_Status_Value[Test_status]=Field_Name;  
              a.push( {Field_Name,Test_status} )
              cy.log(a)   
             
            })   
          }
          else{
            cy.log('There is no value in Firstname field')
            Test_status = 'Fail'
            cy.log(Test_status);
            cy.get('[for="first_name-22"]').invoke('text').then(($text)=>{ 
              Field_Name = $text
              map_Status_Value[Test_status]=Field_Name;  
              a.push( {Field_Name,Test_status} )
              cy.log(a)     
            })
          }
         })
         cy.get('#last_name-22').type('Har')
         .then(($LastName_input)=>{
          const LastName_val = $LastName_input.val()
          if(LastName_val){
            Test_status= 'Pass'
            cy.get('[for="last_name-22"]').invoke('text').then(($text)=>{ 
              Field_Name = $text
            
              map_Status_Value[Test_status]=Field_Name;  
              a.push( {Field_Name,Test_status} )
              cy.log(a) 
            })
          }
          else{
            cy.log('There is no value in Firstname field')
            let Test_status = 'Fail'
            cy.log(Test_status);
            cy.get('[for="last_name-22"]').invoke('text').then(($text)=>{  
              Field_Name = $text
              map_Status_Value[Test_status]=Field_Name;  
              a.push( {Field_Name,Test_status} )
              cy.log(a)   
            })
          }

         }).then(()=>{              //for continuivity
          let gender_val = 'Male'   
         if(cy.get('input[name="gender[]"]').check(gender_val,{ force: true })){  
            Test_status = 'Pass'
            cy.log(Test_status);
            map_Status_Value[Test_status]= gender_val;  
            a.push( {gender_val,Test_status} )
            cy.log(a)   
            // cy.log(map_Status_Value)
          }
          else{
            let Test_status = 'Fail'
            cy.log(Test_status);
            map_Status_Value[Test_status]= gender_val;  
            a.push( {gender_val,Test_status} )
            cy.log(a) 
          }
          
          
        }).then(()=>{
          
        cy.get('#user_login-22').type('Amrin')
         .then(($UserName_input)=>{
          const UserName_val = $UserName_input.val()
          if(UserName_val){
          
            cy.get('[for="user_login-22"]').invoke('text').then(($text)=>{ 
              Field_Name = $text
                Test_status= 'Pass'
              map_Status_Value[Test_status]=Field_Name;  
              a.push( {Field_Name,Test_status} )
              cy.log(a)  
              

            })
          }
          else{
            cy.log('There is no value in Username field')
           
            cy.log(Test_status);
            cy.get('[for="user_login-22"]').invoke('text').then(($text)=>{  
              Field_Name = $text
               let Test_status = 'Fail'
              map_Status_Value[Test_status]=Field_Name;  
              a.push( {Field_Name,Test_status} )
              cy.log(a)  
            })
          }

         })
       

         cy.get('#user_password-22').type('Fathima@123')
         .then(($pwd_input)=>{
          const pwd_val = $pwd_input.val()
          if(pwd_val){
          
            
           
            cy.get('[for="user_password-22"]').invoke('text').then(($text)=>{ 
              Field_Name = $text
              Test_status= 'Pass'
              map_Status_Value[Test_status]=Field_Name;  
              a.push( {Field_Name,Test_status} )
              cy.log(a)
             })
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
        })
         cy.get('#confirm_user_password-22').type('Fathima@123')
         .then(($conf_pwd_input)=>{
          const conf_pwd_val = $conf_pwd_input.val()
          if(conf_pwd_val){
            // cy.log('value is there')
            Test_status= 'Pass'
            // cy.log(Test_status);
            cy.get('[for="confirm_user_password-22"]').invoke('text').then(($text)=>{ 
              Field_Name = $text
              map_Status_Value[Test_status]=Field_Name;  
              a.push( {Field_Name,Test_status} )
              cy.log(a)

            })
          }
          else{
            cy.log('There is no value in Confirm Password field')
            let Test_status = 'Fail'
            cy.log(Test_status);
            cy.get('[for="user_password-22"]').invoke('text').then(($text)=>{  
              Field_Name = $text
              map_Status_Value[Test_status]=Field_Name;  
              a.push( {Field_Name,Test_status} )
              cy.log(a)
            })
          }

         })

         cy.get('#user_email-22').type('amrin@gmail.com')
         .then(($email_input)=>{
          const email_val = $email_input.val()
          if(email_val){
            // cy.log('value is there')
            Test_status= 'Pass'
            // cy.log(Test_status);
            cy.get('[for="user_email-22"]').invoke('text').then(($text)=>{ 
              Field_Name = $text
              map_Status_Value[Test_status]=Field_Name;  
              a.push( {Field_Name,Test_status} )
              cy.log(a)

            })
          }
          else{
            cy.log('There is no value in Confirm Password field')
            let Test_status = 'Fail'
            cy.log(Test_status);
            cy.get('[for="user_email-22"]').invoke('text').then(($text)=>{  
              Field_Name = $text
              map_Status_Value[Test_status]=Field_Name;  
              a.push( {Field_Name,Test_status} )
              cy.log(a)
            })
          }

         })

         cy.get('#mobile_number-22').type('9710383836')
         .then(($mob_input)=>{
          const mob_val = $mob_input.val()
          if(mob_val){
            // cy.log('value is there')
            Test_status= 'Pass'
            // cy.log(Test_status);
            cy.get('[for="mobile_number-22"]').invoke('text').then(($text)=>{ 
              Field_Name = $text
              map_Status_Value[Test_status]=Field_Name;  
              a.push( {Field_Name,Test_status} )
              cy.log(a)

            })
          }
          else{
            cy.log('There is no value in Confirm Password field')
            let Test_status = 'Fail'
            cy.log(Test_status);
            cy.get('[for="mobile_number-22"]').invoke('text').then(($text)=>{  
              Field_Name = $text
              map_Status_Value[Test_status]=Field_Name;  
              a.push( {Field_Name,Test_status} )
              cy.log(a)
            })
          }

          

         })
       

        })
        
        });
    


















        // cy.get('[for="first_name-22"]').invoke('text').then((tex) => {
        //     // Log the text content
        //     cy.log('Text content:', tex);
            
        //     // Optionally, you can use assertions
        //     expect(tex).to.include('First Name');
        //     keyValueArray.push({ key: tex, value: result  });
        //     // cy.log('Key-Value Array:', JSON.stringify(keyValueArray));
        //    // a.push(keyValueArray)
        //     cy.log(keyValueArray)
        //   });

      
        
    //    const fir =  cy.get('#first_name-22').type('Arun')

    //     mymap.set(a,result);