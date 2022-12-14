describe('validate the basic GET , PUT , POST , DELETE API', function () {
    it('validate the GET API', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2",
        }).then(function (response) {
            // cy.log(response)
            // cy.log(response.status)
            // cy.log(response['body']['total'])
            expect(response.status).to.eql(200)
        })
    })
    it('validate the POST API', function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eql(201)
        })
    })
    it('validate the PUT API', function () {
        cy.request({

            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }

            // should() and expect()
        }).then(function (response) {
            // cy.log(response)
            expect(response.status).to.eqls(200)
        })
    })
    it('validate the DELETE API', function () {

        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2"
        }).then(function (res) {
            cy.log(res)
            expect(res.status).to.eqls(204)
        })

    })
})
