///<reference types="cypress"/>

describe("verify the iframe in cypress", () => {
  // let getIframeBody =function(id){
  //     return cy.get(`#${id}`)
  //     .its('0.contentDocument.body').should('not.be.empty')
  //     .then(cy.wrap)
  // }
  // it('TC 01 verify the iframe element using javascript',()=>{
  //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
  //         // cy.get('a[href="index.html"]').click()

  //         cy.get('#frame').then(function(iframe){
  //          let body= iframe[0].contentDocument.body
  //           cy.wrap(body).as('bdy')
  //           cy.get('@bdy').find('a[href="index.html"]').should('have.text','Home')
  //         })
  //     })

  //
  // })

  // it('verify the iframe element using jquery',()=>{
  //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
  //     getIframeBody('frame').then(function(bdy){
  //         cy.wrap(bdy).as('body')
  //         cy.get('@body').find('a[href="index.html"]').should('have.text','Home')
  //     })

  // ---------------------------PRACTICE

  //   it("iframe", () => {
  //     cy.visit("https://webdriveruniversity.com/IFrame/index.html");
  //     cy.get("#frame").then(function (iframe) {
  //       let body = iframe[0].contentDocument.body;
  //       cy.wrap(body).as("bdy");
  //       cy.get("@bdy").find('a[href="index.html"]').should("have.text", "Home");
  //       cy.get("@bdy")
  //         .find('a[href="products.html"]')
  //         .should("have.text", "Our Products");
  //       cy.get("@bdy").contains("Contact Us").should("be.visible");
  //     });
  //   });
  //   it("TC 02 verify the iframe element using jquery", () => {
  //     cy.visit("https://webdriveruniversity.com/IFrame/index.html");
  //     cy.get("#frame").then(function ($iframe) {
  //       let body = $iframe.contents().find("body");
  //       cy.wrap(body).as("bdy");
  //       cy.get("@bdy").find('a[href="index.html"]').should("have.text", "Home");
  //     });
  //   });
  it.only("jquery", () => {
    cy.visit("https://webdriveruniversity.com/IFrame/index.html");
    cy.get("#frame").then(function ($iframe) {
      let body = $iframe.contents().find("body");
      cy.wrap("body").as("bdy");
      cy.get("@bdy").find('a[href="index.html"]').should("have.text", "Home");
    });
  });
});
