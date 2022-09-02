///<reference types="cypress"/>
describe(' TC 01 verify the login functionality', function () {


    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('TC 01 Check with valid credential', function () {
        {

            cy.Hrmlogin('Admin', "admin123")
            cy.get('img[alt="client brand banner"]').should('be.visible')
        }
    })

    it('TC 02 Check with invalid credential', function () {
        {

            cy.Hrmlogin('Admin', "admin")
            cy.get('.oxd-text').first().next().should('contain', "Invalid credentials")
        }
    })

    it('TC 03 Check with no credential', function () {
        {
            cy.Hrmlogin(' ', ' ')
            cy.get('.oxd-text.oxd-text--span').first().should('contain', "Required")

        }
    })
})