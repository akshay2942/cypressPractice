///<reference types="Cypress"/>

describe("verify the functionality of flipcart site", () => {
  it("visit the site", () => {
    cy.visit(
      "https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_4d1ohbptwj_e&adgrpid=58490306106&hvpone=&hvptwo=&hvadid=486457318205&hvpos=&hvnetw=g&hvrand=2951800408925444242&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9299285&hvtargid=kwd-298187295805&hydadcr=5657_2175734&gclid=Cj0KCQjwvZCZBhCiARIsAPXbajviMvLK0uM9OajSCgWaqCcfKmr_fE2htcub3WmDMySKMXvR2KYuT1UaAhqgEALw_wcB"
    );
    cy.get("#twotabsearchtextbox").type("samsung");
    // cy.get(".autocomplete-results-container").children().eq(4).click();
    // cy.contains("Samsung Galaxy M13").should(be.visible);

    cy.get(
      ".s-suggestion-container>.s-suggestion.s-suggestion-ellipsis-direction"
    )
      .eq(1)
      .click();
  });
});
