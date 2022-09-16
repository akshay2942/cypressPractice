/// <reference types="Cypress"/>

describe("iframe elelement", () => {
  it("iframe element", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.contains("IFRAME").eq(1).click();
  });
});
