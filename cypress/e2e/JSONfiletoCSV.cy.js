import fs from 'fs';
const path = require('path');

describe('JSON File Task', () => {
    beforeEach(() => {
      cy.fixture('data').as('AllData'); // Load the fixture and alias it
    });

    it('Name, City, Friends name,Friends Hobbies', function() {

        const l= this.AllData.length
        cy.log(l)
       let csvContent = 'Person,City,Friend,Friend Hobbies\n';
      this.AllData.forEach(Eachperson => {
        // cy.log(`Person: ${Eachperson.name}`);
        Eachperson.friends.forEach(friend => {
        //   cy.log(`Friend: ${friend.name}`);

            const row = `"${Eachperson.name}","${Eachperson.city}","${friend.name}","${friend.hobbies}"\n`;
            csvContent += row; 

            const friendNames = Eachperson.friends.map(friend => friend.hobbies);

            const joinedNames = friendNames.join(' and ');
  
  cy.log(`FriendName: ${friend.name}, Hobbies: ${joinedNames}`);



        });
      });
   
    cy.task('writeToFile', { fileName: 'output.csv', content: csvContent })
      .then(() => {
        cy.log('CSV file written successfully');
      });

      this.AllData.forEach(Eachperson => {
        // Count top-level keys in each person object
        const topLevelKeyCount = Object.keys(Eachperson).length;
        cy.log(`Person ${Eachperson.name} has ${topLevelKeyCount} keys`);
      });
      this.AllData.forEach(Eachperson => {
        Eachperson.friends.forEach(friend => {
       
        const friendKeyCount = Object.keys(friend).length;
        cy.log(`Friend ${friend.name} has ${friendKeyCount} keys`);
      });
    });

    this.AllData.forEach(Eachperson => {
        Eachperson.friends.forEach(friend => {
          const hobbyCount = friend.hobbies.length;
          console.log(`Friend ${friend.name} has ${hobbyCount} hobbies`);
        });
      });
  });


    it.skip('Join the Hobbies using AND',()=>{

        this.AllData.forEach(Eachperson => {
            // cy.log(`Person: ${Eachperson.name}`);
            Eachperson.friends.forEach(friend => {
            //   cy.log(`Friend: ${friend.name}`);
    
                // const row = `"${friend.hobbies}"\n`;
                const friendNames = person.friends.map(friend => friend.hobbies);

                const joinedNames = friendNames.join(' and ');
      
      cy.log(`FriendName: ${friend.name}, Friends: ${joinedNames}`);
    
            });
          });
    })

    });
  