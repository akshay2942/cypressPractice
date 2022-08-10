/// <reference types="cypress" />

describe('verify the functionality of contact us form',()=>{
    beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible').and('have.text',"CONTACT US")
    })

    it(' TC 01 verify the functionality for contact us form - submit button',()=>{
        cy.get('input[name="first_name"]').type('akshay')
        cy.get('input[name="last_name"]').type('kshirsagar')
        cy.get('input[name="email"]').type('kshirsagar@123.com')
        cy.get('textarea[name="message"]').type('i am learning cypress')
        cy.get('input[type="submit"]').click()
    })
    it('TC 02 verify the functionality for contact us form - reset button',()=>{
        
        cy.get('input[name="first_name"]').type('akshay')
        cy.get('input[name="last_name"]').type('kshirsagar')
        cy.get('input[name="email"]').type('kshirsagar@123.com')
        cy.get('textarea[name="message"]').type('i am learning cypress')
        cy.get('input[type="reset"]').click()

        // after validating reset button
        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"")
        cy.get('input[name="email"]').should('have.text',"")
        cy.get('textarea[name="message"]').should('have.text',"")
      
    })
    it(' TC 03 verify the functionality for contact us form WITH INVALID EMAIL',()=>{
        cy.get('input[name="first_name"]').type('akshay')
        cy.get('input[name="last_name"]').type('kshirsagar')
        cy.get('input[name="email"]').type('kshirsagar123.com')
        cy.get('textarea[name="message"]').type('i am learning cypress')
        cy.get('input[type="submit"]').click()
        cy.get('body').should("contain","Invalid email address")
    })

})