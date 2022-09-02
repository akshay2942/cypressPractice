///<reference types="cypress"/>

class ProductClass {
    visitApp() {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    }
    SearchProdu(text) {
        cy.get('[type="search"]').last().type(text)
        cy.get('.search-button').click()
    }

    Add
}