///<reference types="cypress"/>
import Product from '../POM/homepage'
let productCls = new Product()
describe('att to catrt functionality with pom', () => {

    it('TC 01 Vsit the E-com site', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    })
    it('TC 02 search the product', () => {
        productCls.searchElement('po')
    })
    it('TC 03 add to cart  product', () => {
        productCls.addToCart()
    })
    it('TC 04 validate Thank you message', () => {
        cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
    })
})