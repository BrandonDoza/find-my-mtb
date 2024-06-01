// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
describe('Home Page', () => 
it('Succesfully Loads', () => {
  cy.visit(' http://localhost:3000')
}))
describe('Header component', () => {
  it('Should have a page title and navigation links', () => {
    cy.visit('http://localhost:3000');

    cy.get('.header').contains('Find My Mtb');

    cy.get('.nav-bar').within(() => {
      cy.contains('All Bikes');
      cy.contains('My Bikes');
      cy.contains('FAQ');
    });
  });
});