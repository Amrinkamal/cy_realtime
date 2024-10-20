describe('product price',()=>{
    it('product price and product',()=>{
        let producttitle = [];
        let pprice = [];
        cy.visit('https://sprodata.in/');
        cy.get('[class="woocommerce-loop-product__title"]').each((ProductName)=>{
            const Product = ProductName.text();
            producttitle.push(Product)
        })
        cy.get('[class="price"]').each((productprice)=>{
            const tex = productprice.text();
            const sp = tex.split('Original price was:')
            const Price = sp[0].trim();
            pprice.push(Price)                   
        }).then(()=>{
        let csvContent = 'Product Name,Price\n';
            producttitle.forEach((name, index)=>{
                const Price = pprice[index] || 'N\A';
                csvContent += `${name},${Price}\n`;
                cy.log(csvContent);
                
            });
    // Write the CSV content to a file
    cy.writeFile('cypress/fixtures/product_prices.csv', csvContent);
    })
})
})