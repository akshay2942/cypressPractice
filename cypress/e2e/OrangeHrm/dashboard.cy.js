///<reference types="cypress"/>

describe('verify the functionality of dashbord page',()=>{
before('TC  visit the site',()=>{
        cy.Hrmlogin('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login','Admin','admin123')
        expect(window.location.host).to.eql('opensource-demo.orangehrmlive.com')
        // cy.url().should('contain','viewEmployeeList')
    })
it('TC 01 functionality to add new employe ',()=>{
    cy.get('.oxd-topbar-body-nav-tab-item').eq(2).click()
})
it('TC add details ',()=>{
    cy.get('[name="firstName"]').type('akshay')
    cy.get('[name="middleName"]').type('anil')
    cy.get('[name="lastName"]').type('kshirsagar')
    cy.get('[type="submit"]').click()

})

})