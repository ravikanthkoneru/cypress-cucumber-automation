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
    @apitesttest
    Scenario: Create a new user
        Given I have the API endpoint "/users"
        When I send a POST request to the endpoint with the data
        | name        | job    |
        | Ravi Koneru | leader |
        Then the response status code should be 201
        And the response should contain the created user with name "Ravi Koneru"

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

    @apitesttest1
    Scenario Outline: Create a new user
        Given I have the API endpoint "/users"
        When I send a POST request to the endpoint with the data "<name>" and "<job>"
        Then the response status code should be 201
        And the response should contain the created user with name "<name>"

        Examples:
        | name         | job    |
        | Ravi Koneru  | leader |
        | Ravi1 Koneru | leader |
        | Ravi2 Koneru | leader |

    Scenario: Register a new user
        Given I have the API endpoint "/register"
        When I send a POST registation request to the endpoint with the data
        | email                  | password    |
        | eve.holt@reqres.in     | pistol      |
        Then the response status code should be 200


    Scenario: Register a new user with bad data
        Given I have the API endpoint "/register"
        When I send a POST registation request to the endpoint with the data
        | email                  | password    |
        | Ravi.2006@hotmail.com  | leader      |
        Then the response status code should be 400

    Scenario: Register a new user without Password 
        Given I have the API endpoint "/register"
        When I send a POST registation request to the endpoint with the data
        | email                  | 
        | eve.holt@reqres.in     |            
        Then the response status code should be 400

    
    @apitesttest13
    Scenario Outline: Registering new user sceanrios
        Given I have the API endpoint "/register"
        When I send a POST registration request to the endpoint with the data "<email>" and "<password>"
        Then the response status should be "<code>"
        
        Examples:
        | email                  | password    | code  |
        | eve.holt@reqres.in     | pistol      | 200   |
        | Ravi.2006@hotmail.com  | leader      | 400   |
        | sydney@fife            |             | 400   |
   
       