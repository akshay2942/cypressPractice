///<reference types="cypress"/>
import info from '../../fixtures/contactDetail.json'
describe('verify the functionality of fixture multiple data by using beforEach',()=>{
    beforeEach(function(){
        cy.fixture('contactDetail').then((info)=>{
            this.info=info
        })
    })
    it('verify the contctus deta ',()=>{
        cy.log(this.info.firstname)
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(this.info[0].firstname)
        cy.get('input[name = "last_name"]').type(this.info[0].lastname)
        cy.get('input[name = "email"]').type(this.info[0].email)
        cy.get('textarea[name = "message"]').type(this.info[0].message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
        
    })

})
