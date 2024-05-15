@DepositAmount
Feature: Deposit amount to customer accounts

  Background:
    Given I go to the Banking page
    And I see "XYZ Bank" in the title
    And I click on the Customer Login button

    Scenario Outline: Deposit amounts in customers bank account
    Given I select the customer name "<customer_name>"
    And I click on Login button
    When I click on the Deposit tab
    And I enter the amount "<deposit_amount>" to deposit and click on deposit button
    Then the amount deposited successfully
    And I click on the Logout button

    Examples:
      | customer_name   | deposit_amount |
      | Hermoine Granger| 100            |
      | Harry Potter    | 200            |
      | Ron Weasly      | 300            |