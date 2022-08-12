///<reference types="cypress"/>

describe('verify the contact us form ',()=>{
   let data;
    beforeEach(function(){
        cy.fixture('contactus').then((detaset)=>{
            data =detaset
        })
    })
    //retrive the value from object dot notation and bracket notation
    it('TestCase case one with test dataset one',()=>{
        cy.log(data)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data[0].firstName)
        cy.get('input[name="last_name"]').type(data[0].lastName)
        cy.get('input[name="email"]').type(data[0].email)
        cy.get('textarea[name="message"]').type(data[0].message)
        cy.get('input[value="SUBMIT"]').click()
    })
    it('TestCase case one with test dataset one',()=>{
        cy.log(data)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data[1].firstName)
        cy.get('input[name="last_name"]').type(data[1].lastName)
        cy.get('input[name="email"]').type(data[1].email)
        cy.get('textarea[name="message"]').type(data[1].message)
        cy.get('input[value="SUBMIT"]').click()

    })
})