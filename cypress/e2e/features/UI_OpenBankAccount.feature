@OpenAccount
Feature: Open Bank Accounts for new Customer

  Background:
    Given I go to the Banking page
    And I see "XYZ Bank" in the title
    And I click on the Bank Manager Login button

    Scenario Outline: Open new bank account
    Given I click on the Open Account tab
    When I select customer "<customer_name>" and curreency "<currency>"
    And I click on the process button
    Then the account created successfully

    Examples:
      | customer_name   | currency |
      | Hermoine Granger| Dollar   |
      | Harry Potter    | Pound    |
      | Ron Weasly      | Rupee    |


      