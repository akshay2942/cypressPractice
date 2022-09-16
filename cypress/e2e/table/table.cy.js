///<reference types="Cypress"/>

describe("verify the functionality for the table in cypress", () => {
  //cypress async =========> execuation ----sync ----async
  it("verify the first table", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    let sum = 0;
    cy.get("#t01")
      .find("tr")
      .each(function (el, index) {
        if (index != 0) {
          cy.log(el);
          cy.log(el.children("td").last().text());
          sum = sum + Number(el.children("td").last().text());
        }
      })
      .then(function () {
        expect(sum).to.eql(159);
      });
  });

  it("verify the second table", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    let sum = 0;
    cy.get("#t02")
      .find("tr")
      .each(function (el, index) {
        if (index != 0) {
          cy.log(el);
          cy.log(el.children("td").last().text());
          sum = sum + Number(el.children("td").last().text());
        }
      })
      .then(function () {
        expect(sum).to.eql(163);
      });
  });
});
