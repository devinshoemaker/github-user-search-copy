/// <reference types="Cypress" />

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have title', () => {
    cy.get('ion-title').should('contain', 'GitHub User Search');
  });

  it('should return users from search', () => {
    cy.searchGitHubUsers();

    cy.get('[cy-id="user-card"]').should('contain', 'cypress');
    cy.get('[cy-id="user-card-repos"]').should('exist');
    cy.get('[cy-id="user-card-gists"]').should('exist');
    cy.get('[cy-id="user-card-followers"]').should('exist');
  });

  it('should display number of user results from search', () => {
    cy.searchGitHubUsers();

    cy.get('[cy-id="user-count"').should('contain', 'user results');
  });

  it('should paginate to next page of search results', () => {
    cy.searchGitHubUsers();

    cy.get('[cy-id="pagination-next-button"]').click({ force: true });
    cy.get('[cy-id="pagination-prev-button"]').should('exist');
  });
});
