describe('Application', () => {

  it('Runs', () => {
    cy.visit('http://localhost:8080');

    cy.get('.App')
      .contains('Hello World');
  });
});
