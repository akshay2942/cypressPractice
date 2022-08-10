/// <reference types="cypress" />



describe('validate the functionality of checkbox , redio button ,dropdown',()=>{
 
 beforeEach(function(){
    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
 })

it(' TC 00 verifty the functionality for checkbox',()=>{
    cy.get('input[value="option-3"]').should('be.checked')
})
it(' TC 01 verifty the functionality for checkbox WITH click()',()=>{
    cy.get('input[value="option-1"]').click().should('be.checked')
    cy.get('input[value="option-1"]').click().should('be.not.checked')
})

//with check() and uncheck() method
it(' TC 02 verifty the functionality for checkbox WITH CHECK AND UNCHECK',()=>{
    cy.get('input[value="option-4"]').check().should('be.checked')
    cy.get('input[value="option-4"]').uncheck().should('be.not.checked')
})
//with multiple checkbox
it(' TC 03 verifty the functionality for checkbox WITH multiple checkbox',()=>{
   cy.get('#checkboxes').find('input[type="checkbox"]').each(function(el,index,arr){
    cy.wrap(el).check().should('be.checked')
    cy.wrap(el).uncheck().should('not.be.checked')
   })
})

//with radio buttons

it('TC 04 verify the functionality for radio button',()=>{
    cy.get('#radio-buttons').find('input[type="radio"]' ).each(function(el){
        cy.wrap(el).check().should('be.checked' )
    })
    cy.get('#radio-buttons').first().should('not.be.checked')
})
// we can select the drop down values by text and bye value attiributes 
// conventional drop and the select method will work if the tag is select

it(' TC 05 verify the functionality for all the drop down by text',()=>{
    cy.get('#dropdowm-menu-1').select('python').should('have.value','python')
    cy.get('#dropdowm-menu-1').select('sql').should('have.value','sql')
})

it.only('TC 06 verify the functionality to check wether the element enabled or disable',()=>{
    cy.get('#fruit-selects').children()
    .filter('option[disabled="disabled"]')
    .should(('have.text','Orange'))
})

})