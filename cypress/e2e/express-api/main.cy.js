let testUser, updatedTestUser, id

describe('Create new User:', () => {
    it('Trying make POST', () => {
        cy.fixture('User').then((data) => {
            testUser = data

            cy.request({
                method: 'POST',
                url: '/users',
                body: testUser,
            }).then((response) => {
                cy.log(('ID Пользователя: ', (id = response.body._id)))

                expect(response.status).to.eql(201)
                expect(response.body.firstName).to.eql(testUser.firstName)
                expect(response.body.secondName).to.eql(testUser.secondName)
                expect(response.body.phoneNumber).to.eql(testUser.phoneNumber)
                expect(response.body.emailAddress).to.eql(testUser.emailAddress)
            })
        })
    })
    it('Get created User by ID', () => {
        cy.request({
            method: 'GET',
            url: `/users/${id}`,
        }).then((response) => {
            expect(response.status).to.eql(200)
            expect(response.body.firstName).to.eql(testUser.firstName)
            expect(response.body.secondName).to.eql(testUser.secondName)
            expect(response.body.phoneNumber).to.eql(testUser.phoneNumber)
            expect(response.body.emailAddress).to.eql(testUser.emailAddress)
        })
    })
})
describe('Update created User:', () => {
    it('Trying make PUT', () =>
        cy.fixture('NewUser').then((data) => {
            updatedTestUser = data

            cy.request({
                method: 'PUT',
                url: `/users/${id}`,
                body: updatedTestUser,
            }).then((response) => {
                expect(response.status).to.eql(200)
                expect(response.body.firstName).to.eql(
                    updatedTestUser.firstName
                )
                expect(response.body.secondName).to.eql(
                    updatedTestUser.secondName
                )
                expect(response.body.phoneNumber).to.eql(
                    updatedTestUser.phoneNumber
                )
                expect(response.body.emailAddress).to.eql(
                    updatedTestUser.emailAddress
                )
            })
        }))

    it('Get updated User by ID', () => {
        cy.request({
            method: 'GET',
            url: `/users/${id}`,
        }).then((response) => {
            expect(response.status).to.eql(200)
            expect(response.body.firstName).to.eql(updatedTestUser.firstName)
            expect(response.body.secondName).to.eql(updatedTestUser.secondName)
            expect(response.body.phoneNumber).to.eql(
                updatedTestUser.phoneNumber
            )
            expect(response.body.emailAddress).to.eql(
                updatedTestUser.emailAddress
            )
        })
    })
})

describe('User delete', () => {
    it('Trying make DELETE', () => {
        cy.request({
            method: 'DELETE',
            url: `/users/${id}`,
        }).then((response) => {
            expect(response.status).to.eql(200)
            expect(response.body.message).to.eql('User deleted.')
        })
    })
    it('Get deleted User by ID', () => {
        cy.request({
            method: 'GET',
            url: `/users/${id}`,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eql(404)
            expect(response.body.message).to.eql('User not found.')
        })
    })
})
