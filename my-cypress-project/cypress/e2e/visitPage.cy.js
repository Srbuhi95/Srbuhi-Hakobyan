describe("Visit CoinStats.App", () => {
    it("Visits the CoinStats website", () => {
        cy.visit("https://coinstats.app");
        cy.contains("Welcome to CoinStats");
    });
});