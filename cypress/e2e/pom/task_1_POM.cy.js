import fs from 'fs';
const path = require('path');
class eachField{

constructor(){
    this.FN_element = '#first_name-22';
    this.FN_Val_element = '[for="first_name-22"]';
    this.LN_element = '#last_name-22';
    this.LN_Val_element = '[for="last_name-22"]'; 
    this.Gender_element = 'input[name="gender[]"]'; 
    this.Username_element = '#user_login-22'; 
    this.Password_element = '#user_password-22' ;
    this.Confirm_Password_element = '#confirm_user_password-22';
    this.EmailID_element = '#user_email-22';
    this.PhoneNO_element = '#mobile_number-22';


    // Define class-level properties
    this.Field_Name = '';
    this.Test_status = '';
    this.results = [];
}

firstName(FNname){

//     let Field_Name;
// let Test_status;
// let results =[];
    cy.get(this.FN_element).type(FNname).then(($FirstName_input) => {
        const FirstName_Val = $FirstName_input.val();//DOUBT FOR VAL()
        if (FirstName_Val) {
          cy.get('[for="first_name-22"]').invoke('text').then(($text) => {
            this.Field_Name = $text;
            this.Test_status = 'Pass';
            cy.log(this.Test_status);
            this.results.push({ key: this.Test_status, value: this.Field_Name });
            cy.log(this.results);
          });
        } else {
          cy.get('[for="first_name-22"]').invoke('text').then(($text) => {
            this.Field_Name = $text;
            this.Test_status = 'Fail';
            cy.log(this.Test_status);
            this.results.push({ key: this.Test_status, value: this.Field_Name });
            cy.log(this.results);
          });
        }
      });
}

lastName(LNname){
    
    cy.get(this.LN_element).type(LNname).then(($LastName_input) => {
        const LastName_Val = $LastName_input.val();
        if (LastName_Val) {
          cy.get('[for="last_name-22"]').invoke('text').then(($text) => {
            this.Field_Name = $text;
            this.Test_status = 'Pass';
            cy.log(this.Test_status);
            this.results.push({ key: this.Test_status, value: this.Field_Name });
            cy.log(this.results);
          });
        } else {
          cy.get(this.LN_element).invoke('text').then(($text) => {
            this.Field_Name = $text;
            this.Test_status = 'Fail';
            cy.log(this.Test_status);
            this.results.push({ key: this.Test_status, value: this.Field_Name });
            cy.log(this.results);
          });
        }
      });
}

genDER(select_gender){
    let gender_val = select_gender;   
    if(cy.get('input[name="gender[]"]').check(gender_val,{ force: true })){
    cy.get('input[name="gender[]"]').check('Female', { force: true })
      .then(() => {
        this.Test_status = 'Pass';
        this.results.push({ key: this.Test_status, value: select_gender });
        cy.log(this.results);
      })
    }
    else{
        this.Test_status = 'Fail';
        this.results.push({ key: this.Test_status, value: select_gender });
        cy.log(this.results);    
    }    

}
userName(USERname){
    cy.get(this.Username_element).type(USERname).then(($UserName_input) => {
        const UserName_val = $UserName_input.val();
        if (UserName_val) {
          cy.get('[for="user_login-22"]').invoke('text').then(($text) => {
            this.Field_Name = $text;
            this.Test_status = 'Pass';
            cy.log(this.Test_status);
            this.results.push({ key: this.Test_status, value: this.Field_Name });
            cy.log(this.results);
          });
        } else {
            cy.get('[for="user_login-22"]').invoke('text').then(($text) => {
                this.Field_Name = $text;
                this.Test_status = 'Fail';
                cy.log(this.Test_status);
                this.results.push({ key: this.Test_status, value: this.Field_Name });
                cy.log(this.results);
              });
        }
      });
}
userPassword(passworD){ 

    cy.get(this.Password_element).type(passworD).then(($pwd_input) => {
        const pwd_val = $pwd_input.val();
        if (pwd_val) {
          cy.get('[for="user_password-22"]').invoke('text').then(($text) => {
            this.Field_Name = $text;
            this.Test_status = 'Pass';
            cy.log(this.Test_status);
            this.results.push({ key: this.Test_status, value: this.Field_Name });
            cy.log(this.results);
          });
        } else {
          cy.get('[for="user_password-22"]').invoke('text').then(($text) => {
            this.Field_Name = $text;
            this.Test_status = 'Fail';
            cy.log(this.Test_status);
            this.results.push({ key: this.Test_status, value: this.Field_Name });
            cy.log(this.results);
          });
        }
      });
    }
   confirm_Password(confirm_passworD){ 
    cy.get(this.Confirm_Password_element).type(confirm_passworD).then(($conf_pwd_input) => {
        const conf_pwd_val = $conf_pwd_input.val();
        if (conf_pwd_val) {
          cy.get('[for="confirm_user_password-22"]').invoke('text').then(($text) => {
            this.Field_Name = $text;
            this.Test_status = 'Pass';
            cy.log(this.Test_status);
            this.results.push({ key: this.Test_status, value: this.Field_Name });
            cy.log(this.results);
          });
        } else {
          cy.get('[for="confirm_user_password-22"]').invoke('text').then(($text) => {
            this.Field_Name = $text;
            this.Test_status = 'fail';
            cy.log(this.Test_status);
            this.results.push({ key: this.Test_status, value: this.Field_Name });
            cy.log(this.results);
          });
        }
      });
   }

emailID(EMAIL){

    cy.get(this.EmailID_element).type(EMAIL).then(($email_input) => {
        const email_val = $email_input.val();
        if (email_val) {
          cy.get('[for="user_email-22"]').invoke('text').then(($text) => {
            this.Field_Name = $text;
            this.Test_status = 'Pass';
            this.results.push({ key: this.Test_status, value: this.Field_Name });
            cy.log(this.results);
          });
        } else {
          cy.get('[for="user_email-22"]').invoke('text').then(($text) => {
            this.Field_Name = $text;
            this.Test_status = 'Fail';
            this.results.push({ key: this.Test_status, value: this.Field_Name });
            cy.log(this.results);
          });
        }
      });
  
}
PhoneNumber(ph_no){

    cy.get(this.PhoneNO_element).type(ph_no).then(($mob_input) => {
        const mob_val = $mob_input.val();
        if (mob_val) {
          cy.get('[for="mobile_number-22"]').invoke('text').then(($text) => {
            this.Field_Name = $text;
            this.Test_status = 'Pass';
            this.results.push({ key: this.Test_status, value: this.Field_Name });
            cy.log(this.results);
          });
        } else {
          cy.get('[for="mobile_number-22"]').invoke('text').then(($text) => {
            this.Field_Name = $text;
            this.Test_status = 'Fail'
            this.results.push({ key: this.Test_status, value: this.Field_Name });
            cy.log(this.results);
          });
        }
      });
}
creatingCSV_File(fileName){
    const transformToCSV = (data) => {
        const headers = data.map(item => item.value);
        const csvContent = [
          [...headers].join(','),  // Header row
          [...data.map(item => item.key)].join(',')  // Data row
        ].join('\n');
        return csvContent;
      };
      
      // Convert data to CSV format
      const csvData = transformToCSV(this.results);
      cy.log(csvData);
  
    //   const fileName = 'task-one.csv';
      cy.task('write', { fileName, data: csvData });
  
      const filePath = path.join(__dirname, 'results', 'task-output.csv');
}


}

export default eachField;