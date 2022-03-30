describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the home page", () => {
    cy.contains("MovieBox").should("be.visible");
  });

  it("should display the movie list", () => {
    cy.get("#input").type("Terminator");
    cy.get("#movieCard", { timeout: 5_000 }).should("be.visible");
  });

  it("it should show a spinner while loading", () => {
    cy.get("#input").type("Terminator");
    cy.get("#spinner").should("be.visible");
  });
});
