describe('Home', () => {
  beforeEach(() => {
    cy.exec('pnpm build && pnpm start', { failOnNonZeroExit: false });
  });
  it('successfully loads', () => {
    cy.visit('/');
  });
});
