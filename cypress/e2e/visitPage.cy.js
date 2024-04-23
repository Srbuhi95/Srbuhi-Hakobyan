describe("Visit CoinStats.App", () => {
    it("Visits the CoinStats website", () => {
        cy.visit("https://coinstats.app");
        cy.contains("Manage All Your Wallets & Exchanges From One Place");
        cy.contains("Manage All Yoom One Place");
    });
});