describe('Single Bike Error Handling', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://find-my-mtb-9n78cpo73-brandon-dozas-projects.vercel.app/api/v1/bikes', {
        statusCode: 200,
        fixture: 'mockdata.json'
      });
      cy.intercept('GET', 'https://find-my-mtb-9n78cpo73-brandon-dozas-projects.vercel.app/api/v1/bikes/1', {
        statusCode: 404
      });
      cy.visit('https://find-my-mtb.vercel.app/');
    })
    it('Should show an error when a bike cannot be found', () => {
        cy.get('.link').contains('All Bikes').click()
        cy.get('.bike-card').first().contains('Hightower').click()
        cy.get('.error-path').contains('Error, Page Not Found')
        cy.get('.error-path').contains('The Page or Bike You Are Looking For Does Not Exist')
        cy.get('.error-path').contains('Please Enter A Valid URL')
        cy.get('.home-button').click()
        cy.get('.main-page').contains('Find The Perfect Bike For You!')
    })
  })