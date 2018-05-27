describe('Updating bars', () => {

  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://pb-api.herokuapp.com/bars',
      response: {
        bars: [53, 15],
        buttons: [37, 48, -17, -12],
        limit: 90
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

  it('Should update the selected bar when a button is clicked', () => {
    cy.get('.app')
      .find('.barsSelect')
      .select('1');

    cy.get('.app')
      .find('.barsButton')
      .first()
      .click();

    cy.get('.app')
      .find('.bar')
      .last()
      .contains('52');

    cy.get('.app')
      .find('.barsButton')
      .first()
      .click();

    cy.get('.app')
      .find('.bar')
      .last()
      .contains('89');
  });

  it('Should not allow a bar to go below 0', () => {
    cy.get('.app')
      .find('.barsSelect')
      .select('1');

    cy.get('.app')
      .find('.barsButton')
      .last()
      .click();

    cy.get('.app')
      .find('.barsButton')
      .last()
      .click();

    cy.get('.app')
      .find('.bar')
      .last()
      .contains('0');
  });

  it('Should not allow bars above the limit to be wider than the screen', () => {
    cy.get('.app')
      .find('.barsSelect')
      .select('0');

    cy.get('.app')
      .find('.barsButton')
      .first()
      .click();

    cy.get('.app')
      .find('.barsButton')
      .first()
      .click();

    cy.get('.app')
      .find('.barsButton')
      .first()
      .click();

    cy.get('.app')
      .find('.progress')
      .first()
      .should('have.css', 'width', '1584px');
  });
});
