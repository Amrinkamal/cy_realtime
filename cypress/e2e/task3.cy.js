describe('Scrape Product Details', () => {
    it('should get all product details and save them in a map', () => {
      // Navigate to the website
      cy.visit('https://www.sprodata.in');
  
      // Create an empty map to store product details
      const productsMap = new Map();
  
      // Use Cypress commands to find product elements and extract details
      cy.get('.woocommerce-loop-product__title') // Replace with the correct selector for product items
        .each(($el) => {
          // Assuming each product item contains an element with the class 'product-title' for the title and 'product-price' for the price
          const title = $el.find('.product-title').text().trim();
          const price = $el.find('ins [class="woocommerce-Price-amount amount"]').text().trim();
          
          // Save the details in the map with the title as the key and price as the value
          productsMap.set(title, price);
        })
        .then(() => {
          // Output the map to the console (or save it to a file, database, etc.)
          cy.log([...productsMap]); // Convert map to an array and log it
          cy.writeFile('task3.json',productsMap)
        });
    });
  });
  