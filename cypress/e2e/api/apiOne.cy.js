/// <reference types ="cypress" />

describe('verify the functionality of api',()=>{

    it('verify the count of users via api',()=>{

        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function({status,headers,duration,body}){
            cy.log(status)
            cy.log(headers)
            cy.log(duration)
            cy.log(body)
        expect(status).to.eql(200)
        expect(duration).to.be.within(15,500)
        expect(body).to.have.keys(['data','page','per_page','support','total','total_pages'])
        body.data.forEach(element =>{
            expect(element.first_name).not.to.eql(null)
            expect(element.last_name).not.to.eql(null)
            expect(element.email).not.to.eql(null)
            expect(element.id).not.to.eql(null)
            expect(element.avtar).not.to.eql(null)
        })
        
        })
    })
})