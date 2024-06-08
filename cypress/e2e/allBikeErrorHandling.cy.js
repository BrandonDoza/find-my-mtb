describe('All Bikes Error Handling', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://find-my-mtb-9n78cpo73-brandon-dozas-projects.vercel.app/api/v1/bikes', {
        statusCode: 500 });
      cy.intercept('GET', 'https://find-my-mtb-9n78cpo73-brandon-dozas-projects.vercel.app/api/v1/bikes/1', {
        statusCode: 404 });
      cy.visit('https://find-my-mtb.vercel.app/');
    });
    it('Should show an error message when there no bikes are fetched from the server', () => {
      cy.get('.link').contains('All Bikes').click()
      cy.get('.all-bikes-error').contains('There was a problem loading the bikes, please try again later Error: There is an issue getting the bikes')
      cy.get('.home-button').click()
      cy.get('.all-bikes-error').contains('There was a problem loading the site, please try again later Error: There is an issue getting the bikes')
    });
    it('Should show an error when my bikes is visited and no bikes have been fetched', () => {
      cy.get('.link').contains('My Bikes').click()
      cy.get('.all-bikes-error').contains('There was a problem loading the bikes, please try again later Error: There is an issue getting the bikes')
      cy.get('.home-button').click()
      cy.get('.all-bikes-error').contains('There was a problem loading the site, please try again later Error: There is an issue getting the bikes')
    })
  });