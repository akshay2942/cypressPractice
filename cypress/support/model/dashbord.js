
///<reference types="cypress"/>

export function verifyDashbordPage() {
    cy.url().should('contain', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
}