///<reference types="cypress"/>
//env var -- Global variable

//QA,STAGING,PRODUCTION -----
import { utility } from '../../support/utility'
import { Utility } from '../../support/util'

describe('verify the login form utility ', () => {
    it('TC 01 verify the login for orange html ', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.visit(Cypress.config().baseUrl = '/practice-test-login/')
        cy.log(Cypress.env('username'))
        cy.get('input[id="username"]').type(Cypress.env('username'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('#submit').click()
    })

    it.only('TC 02', () => {
        let util = new Utility()
        let url = util.getBaseUrl()
        cy.log(url)
        cy.log(Cypress.config().username)
        cy.log(Cypress.config().passward)
    })
})