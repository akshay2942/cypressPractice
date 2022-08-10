///<reference types="cypress"/>
import obj from "../../fixtures/contactus.json"
describe('validate contactus form by fixturedeta',()=>{

    // it(' TC 01 deta from contact details',()=>{
    //     let data =undefined
    //     before(function(){
    //         cy.fixture('contactus').then((res)=>{
    //             data=res
    //         })
    //     })
    // })

    it('verify the functionality for contact us form',()=>{
      
      cy.fixture('contactus').then(function(res){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(res[0].firstName)
        cy.get('input[name = "last_name"]').type(res[0].lastName)
        cy.get('input[name = "email"]').type(res[0].email)
        cy.get('textarea[name = "message"]').type(res[0].message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
      })
      
        
    })
})