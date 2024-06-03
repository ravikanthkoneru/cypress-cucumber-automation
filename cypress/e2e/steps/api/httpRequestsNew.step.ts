import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import { get } from 'cypress/types/lodash';

var endpoint = ""
var user_name = ""
var user_id = ""
var statuscode

Given("I have the API endpoint {string}", (uri) => {
    endpoint = Cypress.config().baseUrl + uri
	console.log("API endpoint is:" + endpoint );
});

When("I send a GET request to the endpoint", function() {
    cy.request({
        method: 'GET', 
        url:endpoint,
    }).then(response =>{
        statuscode = response.status
        user_id = response.body.data.id
    })
})

Then("the response status code should be {int}", function(status) {
    expect(statuscode).to.equal(status)
});

Then("the response should contain the user with ID {int}", function(userid) {
    expect(user_id).to.equal(userid)
});


Then("the response should contain a list of {int} users", function(users) {
    cy.request(endpoint).then(response =>{
            expect(response.body.total).to.equal(users)
        })
});

When("I send a POST request to the endpoint with the data", function(datatable: DataTable) {
    let name = ""
    let job = ""
    datatable.hashes().forEach(element => {
        name = element.name
        job = element.job
    })
    cy.request({
        method: 'POST',
        url: endpoint,
        body:{
            name: name,
            job: job
        }
    })
    .then(response =>{
        user_name = response.body.name
        statuscode = response.status
    })
});


Then("the response should contain the created user with name {string}", function(username) {
	expect(user_name).to.equal(username)
});


Then("a user with ID {int} exists", function(userid) {
    cy.request({
        method: 'GET', 
        url:Cypress.config().baseUrl + '/users/' + userid,
    }).then(response =>{
        expect(response.status).to.equal(200)
        expect(response.body.data.id).to.equal(userid)
    })
});


When("I send a DELETE request to the endpoint", function() {
    cy.request({
        method: 'DELETE',
        url: endpoint,
    })
    .then(response =>{
        statuscode = response.status
    })
});


When("I send a PUT request to the endpoint with the data", function(datatable: DataTable){
    let name = ""
    let job = ""
    datatable.hashes().forEach(element => {
        name = element.name
        job = element.job
    })
    cy.request({
        method: 'PUT',
        url: endpoint,
        body:{
            name: name,
            job: job
        }
    })
    .then(response =>{
        user_name = response.body.name
        statuscode = response.status
    })

});

Then("the response should contain the updated user with name {string}",function(username) {
    expect(user_name).to.equal(username)
});
