///<reference types="cypress"/>

describe('select date from date picker', () => {


    it('TC 01 verify the date picker', () => {
        // let date = new Date()
        // cy.log(date.getFullYear())
        // cy.log(date.getMonth())
        // cy.log(date.getDate())

        let date2 = new Date()
        date2.setDate(date2.getDate() + 381)

        let year = date2.getFullYear()
        cy.log(year)

        let numberMonth = date2.getMonth()
        // cy.log(numberMonth)
        let sDate = date2.getDate()
        cy.log(sDate)

        let smonth = date2.toLocaleString("default", { month: "long" })
        cy.log(smonth)

    })

    it.only('TC 02 pickup the date ', () => {
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function selectMonthAndDate() {
            // 22 july .includes 2023

            cy.get('.datepicker-switch').first().then(function (el) {
                if (!el.text().includes(year)) {
                    cy.get('.next').last().click({ force: true })
                    selectMonthAndDate()
                }
            })

        }



    })


})