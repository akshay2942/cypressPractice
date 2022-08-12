///<reference types="cypress"/>
describe('to check the intercept call functionality',()=>{
    it('TC 01 verify the call intercept functionality',()=>{
        cy.intercept({
            "method":'GET',
            "url":"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain','laudantium')
    })
    it('TC 02 vefify the get comment functionality ',function(){
        cy.intercept({
            "method":'GET',
            "url":"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function({response,request}){
            cy.log(response)
            expect(response.statusCode).to.eql(200)
            cy.get('.network-comment').should('have.text',response.body.body)
        })
    })

    it('TC 03 verify the post comment  functionality',()=>{
        cy.intercept({
            'method':'POST',
            'url':'https://jsonplaceholder.cypress.io/comments'
        }).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
    })
})