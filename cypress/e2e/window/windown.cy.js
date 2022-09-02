///<reference types="cypress"/>

// describe('window', () => {
//     it('verify the location property of window', () => {
//         cy.visit('https://automationteststore.com/')
//         cy.window().then(function (wind) {
//             // cy.log(wind.location)

//             expect(wind.location.href).to.eq('https://automationteststore.com/')
//             expect(wind.location.host).to.eq('automationteststore.com')
//             expect(wind.location.pathname).to.eq('/')
//             expect(wind.location.protocol).to.eq('https:')
//         })
//     })
//     it('TC 02verify the location property of window reload', () => {
//         cy.visit('https://automationteststore.com/')
//         cy.window().then(function (wind) {
//             // cy.log(wind.location)
//             wind.location.reload()
//         })
//     })
//     it('TC 03 verify the location property of window reload', () => {
//         cy.visit('https://automationteststore.com/')
//         cy.get('a[class="active menu_home"]').click()

//     })
// })

describe('window command in cypress', () => {

    it.skip('window url property', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.window().should((win) => { // .SHOULD WILL CONSUME THE WINDOWN OBJECT
            console.log(win.location.hash)
            console.log(win.location.pathname)
            console.log(win.location.protocol)
            console.log(win.location.host)

            expect(win.location.host).to.eql('www.webdriveruniversity.com')
            expect(win.location.hostname).to.eql('www.webdriveruniversity.com')
            expect(win.location.origin).to.eql('http://www.webdriveruniversity.com')
            expect(win.location.pathname).to.eql('/Contact-Us/contactus.html')
            expect(win.location.protocol).to.eql('http:')
            // ANOTHER WAY OF ASSERTION
            // expect(win.location.host).to.eqls('www.webdriveruniversity.com')
            // expect(win.location.pathname).to.eqls("/Contact-Us/contactus.html")
            // expect(win.location.hash).to.eqls('')
            // expect(win.location.protocol).to.eqls('http:')
        })

    })

    it('window reload and with cypress', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('p[class]').eq(2).click()

        cy.window().should((win) =>{
            win.history.back
           win.history.forward
        //    cy.go(-1)
        //    cy.go(1)
        //    cy.go('back')
        //    cy.go('forword')
        })
    })

    it.only('windown reload with cypress',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.window().should(function(win){
            win.location.reload()
        })

    })


})