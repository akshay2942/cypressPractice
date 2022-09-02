///<reference types="cypress"/>

describe('verify the login functionality ',()=>{
    beforeEach('visit the url',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })
    it('with valid credientials',()=>{
        cy.Hrmlogin('Admin','admin123')
    })
    it('with invalid credientials',()=>{
        cy.Hrmlogin('dmin','admin123')
        cy.get('.orangehrm-login-slot-wrapper').should('contain','Invalid credentials') 
    })
  

})