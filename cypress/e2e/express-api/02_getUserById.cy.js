describe("GET /users/:id", () => {

    it('Getting /users/:id with status 200', ()=> {
  
      cy.request('172.29.199.145:3005/649ade21d65256c8952238c1').its('status').should('eql', 200)
      
  })
  
  it('Response body is User object', ()=> {
  
      cy.request('172.29.199.145:3005/users/649ade21d65256c8952238c1').its('body').should('be.an','object')
      
  })
  })