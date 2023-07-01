describe("GET /users", () => {

  it('Getting /users with status 200', ()=> {

    cy.request('172.29.199.145:3005/users').its('status').should('eql', 200)
    
})

it('Response body is array', ()=> {

    cy.request('172.29.199.145:3005/users').its('body').should('be.an','array')
    
})
})