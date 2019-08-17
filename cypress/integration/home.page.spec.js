/// <reference types="Cypress" />

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have title', () => {
    cy.get('ion-title').should('contain', 'GitHub User Search');
  });

  it('should be blank', () => {
    cy.get('ion-content').should('contain', 'The world is your oyster.');
  });
});
