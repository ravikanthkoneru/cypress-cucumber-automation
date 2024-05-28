@UserAPI
Feature: User API

    @apitest
    Scenario: Get all users
        Given I have the API endpoint "/users?page=2"
        When I send a GET request to the endpoint
        Then the response status code should be 200
        And the response should contain a list of 12 users

    Scenario: Get a user by ID
        Given I have the API endpoint "/users/2"
        When I send a GET request to the endpoint
        Then the response status code should be 200
        And the response should contain the user with ID 2

    Scenario: Create a new user
        Given I have the API endpoint "/users"
        When I send a POST request to the endpoint with the data
        | name     | job    |
        | John Doe | leader |
        Then the response status code should be 201
        And the response should contain the created user with name "John Doe"

    Scenario: Update a user
        Given I have the API endpoint "/users"
        And a user with ID 2 exists
        Given I have the API endpoint "/users/2"
        When I send a PUT request to the endpoint with the data
        | name       | job                 |
        | Jane Smith | Automation Engineer |
        Then the response status code should be 200
        And the response should contain the updated user with name "Jane Smith"

    Scenario: Delete a user
        Given I have the API endpoint "/users"
        When I send a GET request to the endpoint
        And a user with ID 2 exists
        Given I have the API endpoint "/users/2"
        When I send a DELETE request to the endpoint
        Then the response status code should be 204