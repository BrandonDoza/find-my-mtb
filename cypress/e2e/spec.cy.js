describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'http://localhost:3001/api/v1/bikes', {
      statusCode: 200,
      fixture: 'mockdata.json'
    });
    cy.intercept('GET', 'http://localhost:3001/api/v1/bikes/1', {
      statusCode: 200,
      fixture: 'singleBike.json'
    })
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
  it('Should have an about section', () => {
    cy.get('.about-card').contains('We\'re all about helping you find the perfect bike to fit your needs. Whether you\'re new to the sport or a seasoned pro, you\'ve come to the right place!')
  })
  it('Should be able to select criteria and filter through bikes to display', () => {
    cy.get('h1').contains('Find The Perfect Bike For You!')
    cy.get('#skillLevel').select('Advanced')
    cy.get('.bikes-display').find('.bike-card').should('have.length', 3)
    cy.get('.bike-card').first().contains('Nomad')
    cy.get('.bike-card').last().contains('Ibis')
  })
  it('Should navigate to the all bikes page and display all bikes', () => {
    cy.get('.link').contains('All Bikes').click()
    cy.get('.bikes-display').find('.bike-card').should('have.length', 5)
    cy.get('.bike-card').first().contains('Hightower')
    cy.get('.bike-card').last().contains('Exie')
  })
  it('Should be able to click on a bike card and see details about that bike', () => {
    cy.get('.link').contains('All Bikes').click()
    cy.get('.bike-card').first().click()
    cy.get('.bike-make').contains('Santa Cruz')
    cy.get('.bike-model').contains('Hightower')
  })
});