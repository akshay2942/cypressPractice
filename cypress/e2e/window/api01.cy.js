/// <reference types ="cypress" />

describe('validate the api request', () => {
  it('validate get request', () => {
    cy.request({
      method:"GET",
      url:"https://reqres.in/api/users?page=2"
    }).then((res)=>{
    cy.log(res)
    expect(res.status).to.equal(200)
    })
  })
  it('validate the post request',()=>{
    cy.request({
      method:"POST",
      url:"https://reqres.in/api/users",
      body:{
        "name": "morpheus",
        "job": "leader"
    }
    }).then((res)=>{
      expect(res.status).to.equal(201)
    })
  })


  it('visit the website ',()=>{
    cy.visit('https://hexaware.com/')
    cy.get("[class="navbar-nav hw-nav-list m-auto d-block.d-md-flex"]>li")
  })
})