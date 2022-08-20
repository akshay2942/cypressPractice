///<reference types="cypress"/>


let LOGINELEMENTS = {
    userName: '#txtUsername',
    password: '#txtUsername',
    loginButton: "#btnLogin",
    forgotPasswordLink: "#forgotPasswordLink",
    logo: '#divLogo'

}

export function login(userName, password) {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(LOGINELEMENTS.userName).type(userName)
    cy.get(LOGINELEMENTS.password).type(password)
    cy.get(LOGINELEMENTS.loginButton).click()
}
export function verifyLogoVisible() {
    cy.get(LOGINELEMENTS.logo).should('be.visible')
}
export function verifyForgetPasswordLink() {
    cy.get(LOGINELEMENTS.forgotPasswordLink).should('be.visible')
}
export function verifyLoginPage() {
    cy.url().should('contain', 'https://opensource-demo.orangehrmlive.com/')
}