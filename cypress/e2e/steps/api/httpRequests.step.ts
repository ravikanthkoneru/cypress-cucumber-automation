import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

var currentResponse;

Given(/^I access api request end point to get users$/, function () {
	const url='https://reqres.in/api/users?page=1)'
    cy.request(url).as('currentResponse').its("status").should('equal',200)
    console.log(currentResponse)
});

Given(/^I access api request end point to get single user$/, () => {
    cy.request('https://reqres.in/api/users/2').as('currentResponse').its("status").should('equal',200)
});

Given(/^I access api request end point to create user$/, function() {
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body:{
            name: "morpheus",
            job: "leader"
        }
    })
    .as('currentResponse')
    .its('status')
    .should('equal', 201)
});

Given(/^I access api request end point to update user$/, function() {
	cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/2',
        body:{
            name: "morpheus",
            job: "zion resident"
        }
    })
    .as('currentResponse')
    .its('status')
    .should('equal', 200)
});
