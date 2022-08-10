///<reference types="cypress"/>

import obj from "../../fixtures/contactus.json"
describe('verify the contactus form with multiple data by index',()=>{
 obj.forEach(function(data,index){
    it('verify the multiple test case -${index}',()=>{
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(data.firstName)
        cy.get('input[name = "last_name"]').type(data.lastName)
        cy.get('input[name = "email"]').type(data.email)
        cy.get('textarea[name = "message"]').type(data.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
 })
})