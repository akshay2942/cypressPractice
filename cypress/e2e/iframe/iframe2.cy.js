///<reference types ="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('iframe ',()=>{

    it('select iframe element',()=>{
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/')
    //    cy.get('#iFrame').click()
        cy.get('#google_esf').then(function(iframe){
        // let body= iframe[0].contentDocument.body
        //  cy.wrap(body).as('bdy')
        //  cy.log('body')
        //  cy.get('@bdy').contains('Home').should('be.visible')
        cy.log(iframe)
        })
    })
})