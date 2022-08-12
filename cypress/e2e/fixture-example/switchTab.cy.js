///<reference types="cypress"/>

describe('verify the way to switch tab in cypress',()=>{
    //removing the attibutes target

    it(' TC 01 handling the tab switching first way',()=>{

        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.url().should('contain','Contact-Us')
    })
// updating the attibute value to prevent switch tab
    it('TC 02 updating the attibute value : _self',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('attr','target','_self').click()
        cy.url().should('contain','Contact-Us')

    })

    // retriving the href attiribute  value appending with the baseUrl
    it.only('TC 03 2nd way handling the tab switching first way',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('attr','href').then(function(res){
            // cy.log(res)
            cy.visit(`https://webdriveruniversity.com/${res}`)
        })
        cy.url().should('contain','Contact-Us')

    })
})