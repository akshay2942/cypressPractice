///<reference types="cypress"/>

describe('to validate multiple deta by fixture method ', () => {
    it('verify the contact us multiple set of data', () => {
        cy.fixture('contactus').then(function (obj) {
            obj.forEach(el => {
                cy.log(el)
                cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('input[name = "first_name"]').type(el.firstName)
                cy.get('input[name = "last_name"]').type(el.lastName)
                cy.get('input[name = "email"]').type(el.email)
                cy.get('textarea[name = "message"]').type(el.message)
                cy.get('input[type="submit"]').click()
                cy.get('h1').should('have.text', 'Thank You for your Message!')
            });
        })

    })
})


