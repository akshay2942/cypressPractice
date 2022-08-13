///<reference types="cypress"/>

describe('to learn screenshot functionality', () => {
    beforeEach(() => {
        cy.visit("https://www.flipkart.com/")
    })

    it('to l take ss of current page', () => {
        cy.screenshot('flipcart')
    })

    it('TC 02 to get cliped ss image', () => {
        cy.screenshot('flipcartClip', { clip: { x: 12, y: 34, width: 300, height: 200 } })
    })
})