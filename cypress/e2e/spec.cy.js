describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'http://localhost:3001/api/v1/bikes', {
      statusCode: 200,
      fixture: './mockdata.json'
    });
  });
  it('Successfully Loads', () => {
    cy.visit('http://localhost:3000');
  });
  it('Should have a page title and navigation links', () => {
    cy.get('.header').contains('Find My Mtb');

    cy.get('.nav-bar').within(() => {
      cy.contains('All Bikes');
      cy.contains('My Bikes');
      cy.contains('FAQ');
    });
  });
  it('Should navigate to the all bikes page and display all bikes', () => {
    cy.get('.link').contains('All Bikes').click()
    cy.get('.bikes-display').find('.bike-card').should('have.length', 5)
    cy.get('.bike-card').first().contains('Hightower')
    cy.get('.bike-card').last().contains('Exie')
  })
});