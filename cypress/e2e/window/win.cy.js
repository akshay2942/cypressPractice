///<reference types="Cypress"/>

describe("verify the localStorage for app", () => {
  beforeEach(function () {
    cy.visit("http://www.webdriveruniversity.com/");
  });

  it("TC 01 local storage using window", () => {
    cy.window().then(function (win) {
      console.log(win.localStorage);

      expect(win.localStorage.length).to.eql(0);
      window.localStorage.setItem("id", 1);
      expect(win.localStorage.length).to.eql(1);
      //   expect(window.localStorage.getIteam("id")).to.eq(1);
    });
  });

  it("TC 02cleaning the localStorage via cypress command", () => {
    cy.clearLocalStorage();
    cy.window().then(function (win) {
      expect(win.localStorage.length).to.eq(0);
    });
  });

  it("TC 03 verify the title of the page", () => {
    cy.document().then(function (doc) {
      let titleText = doc.title;
      expect(titleText).to.eq("WebDriverUniversity.com");
    });
  });

  it("TC 04 verfy the title with the cypress command title()", () => {
    cy.title().then(function (txt) {
      expect(txt).to.eq("WebDriverUniversity.com");
    });
  });
  it.only("TC 05 verfy the cookies with the cypress command ", () => {
    //setting the coookies use setCookies ()
    cy.setCookie("username", "akshay");
    //geting  the coookies use getCookies ()
    cy.getCookie("username", "akshay");

    //update  the coookies use setCookie ()
    cy.setCookie("username", "chinmay");
    // clearing the cookie all
    cy.clearCookie;
  });
});
