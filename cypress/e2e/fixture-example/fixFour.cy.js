///<reference types="cypress"/>

describe('verify the functionality of fixture multiple data by using beforEach',()=>{

    beforeEach(function(){
        cy.fixture('contactDetail').then((data)=>{
            this.data=data
        })
    })
    it('verify the contctus deta ',()=>{
        // cy.log(this.info.firstname)
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(this.data.firstname)
        cy.get('input[name = "last_name"]').type(this.data.lastname)
        cy.get('input[name = "email"]').type(this.data.email)
        cy.get('textarea[name = "message"]').type(this.data.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

})
