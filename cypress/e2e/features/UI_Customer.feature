@Customer
Feature: As a Bank Manager Search Customers on the Banking Customers tab

  Background:
    Given I go to the Banking page
    And I see "XYZ Bank" in the title
    And I click on the Bank Manager Login button

  @test @searchCustomer
  Scenario: Using the search input with the text "E859AB"
    Given I click on the Customers tab
    When I fill the search input with the "E859AB"
    Then the text "Hermoine" should be visible on the result table

  @addCustomer
  Scenario: Add new Customers
    Given I click on the Add Customer tab
    When I fill input data to add customers
    |firstname|lastname |postalcode|
    |Ravi     | Koneru  |WC2N 5DU  |
    |Alex     | John    |WC2N 5DX  |
    |Alen     | Weber   |WC2N 3DX  |
    Then I click on Add Customer button
