///<reference types="cypress"/>
import * as login from '../../../support/model/login.js'

describe('to validate the orange hrm login form', () => {
    it('verify the login functionality', () => {
        login.login('Admin', 'admin123')
    })


    it('verify the logo on login functionality', () => {
        login.verifyLogo()
    })

    it('verify the  for got password link login functionality', () => {
        login.verifyForgetPasswordLink()
    })

    it('verify the login url  functionality', () => {
        login.verifyLoginPage()
    })
})