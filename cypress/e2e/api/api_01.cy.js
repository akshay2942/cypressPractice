///<reference types="Cypress"/>

describe("verify the api request", () => {
  it("tc 01verify the get request", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=1",
    }).then(function (res) {
      expect(res.status).to.eql(200);
      expect(res.statusText).to.eql("OK");
      expect(res.isOkStatusCode).to.eql(true);
    });
  });
  it("tc 02 verify the get request", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: "morpheus",
        job: "QA",
      },
    }).then(function (res) {
      expect(res.status).to.eql(201);
    });
  });
});
