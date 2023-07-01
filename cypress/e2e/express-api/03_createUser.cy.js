describe('POST /users', () => {
    let user;
  
    before(() => {
      cy.fixture('User.json').then((userData) => {
        user = userData;
      });
    });
  
    it('should create a new user with status 201', () => {
      cy.request({
        method: 'POST',
        url: 'http://172.29.199.145:3005/users',
        body: user
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('_id');
      });
    });
  });
