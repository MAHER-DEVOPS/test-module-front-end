describe('API Endpoints', () => {
    it('should return 200 for GET /profiles/{user}', () => {
      cy.request('GET', '/profiles/{user}').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('should return 200 for GET /tags', () => {
      cy.request('GET', '/tags').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('should return 200 for GET /articles/{article}/comments', () => {
      cy.request('GET', '/articles/{article}/comments').then((response) => {
        expect(response.status).to.eq(200);
      });
    });

  });
  