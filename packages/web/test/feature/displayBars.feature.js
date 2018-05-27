describe('Displaying bars', () => {

  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://pb-api.herokuapp.com/bars',
      response: {
        bars: [53, 15],
        buttons: [37, 48, -17, -12],
        limit: 230
      }
    });

    cy.visit('http://localhost:8080', {
      onBeforeLoad: (win) => {

        // Cypress will only stub XHR rather than fetch. Becuase we have the whatwg-fetch polyfill
        // in our app, if we kil fetch here, the app will fall back to using XHR which Cypress can
        // play with
        win.fetch = null;
      }
    });
  });

  it('Should display the correct number of bars', () => {
    cy.get('.app')
      .find('.bar')
      .should('have.length', 2);
  });

  it('Should display the value on the bars', () => {
    cy.get('.app')
      .find('.bar')
      .first()
      .contains('53');
  });

  it('Should set the progress to the correct width', () => {
    cy.get('.app')
      .find('.progress')
      .first()
      .should('have.css', 'width', '365px');
  });
});
