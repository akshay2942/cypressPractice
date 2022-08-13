class Product {
    searchElement(value) {
        cy.get('.search-keyword').type(value)
        cy.get('[type="submit"]').click()
    }
    searchProduct(product) {
        cy.get('h4[class="product-name"]').each((el, index) => {
            cy.log(el.text())
            if (el.text().replace(' -1 Kg', ' ').trim() == product) {
                cy.get('.product-action > button').eq(index).click()
            }
        })
    }
    addToCart() {
        cy.get('[alt="Cart"]').click()
        cy.get('.action-block> button').first().click()
        cy.contains('Place Order').click()
        cy.get('select').select('India')
        cy.get('.chkAgree').check()
        cy.get('button').click()
    }
}
export default Product