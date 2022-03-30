describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("if i press a movie it should take me to the detail", () => {
    cy.get("#input").type("Terminator");
    cy.get("#movieCard", { timeout: 5_000 }).click();
    cy.get("#movieImage", { timeout: 5_000 }).should("be.visible");
  });

  it("if I add a comment I should add it below", () => {
    cy.get("#input").type("Terminator");
    cy.get("#movieCard", { timeout: 5_000 }).click();
    cy.get("#textArea", { timeout: 3_000 }).type("This is a comment");
    cy.get("#postCommentaryButton").click();
    cy.contains("This is a comment").should("be.visible");
  });
});
