/// <reference types="cypress"/>
describe('to verify the contatct us process',function(){
    let info={
        firstname:"akshay",
        lastname:"kshirsagar",
        email:"akshay@ymail.com",
        message:"learn cypress"
    }
    // from this object retrive the value by dot notation 
    it('TC 01 to validate the deta from object info',()=>{
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info.firstname)
        cy.get('input[name="last_name"]').type(info.lastname)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.message)
        cy.get('input[type="submit"]').click()
    })

    it('TC 02 validate the deta from fixture method',()=>{
        cy.fixture('contactus').then((res)=>{
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name = "first_name"]').type(res[1].firstName)
            cy.get('input[name = "last_name"]').type(res[1].lastName)
            cy.get('input[name = "email"]').type(res[1].email)
            cy.get('textarea[name = "message"]').type(res[1].message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
          })
        })
    })
    it.only('TC 03 validate the deta from fixture method',()=>{
        cy.fixture('contactus').then((res)=>{
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name = "first_name"]').type(res[0].firstName)
            cy.get('input[name = "last_name"]').type(res[0].lastName)
            cy.get('input[name = "email"]').type(res[0].email)
            cy.get('textarea[name = "message"]').type(res[0].message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
          })
        })
