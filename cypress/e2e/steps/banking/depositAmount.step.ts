import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import DepositAmountPage from '../../pages/DepositAmountPage'


Given(/^I select the customer name "([^"]*)"$/, function (customer_name) {
	console.log(customer_name);
    this.deposit_amount_page = new DepositAmountPage()
    this.deposit_amount_page.select_customer_name(customer_name)
});

Then(/^I click on Login button$/, function(){
    this.deposit_amount_page = new DepositAmountPage()
    this.deposit_amount_page.click_login()
});

When(/^I click on the Deposit tab$/, function() {
	this.deposit_amount_page = new DepositAmountPage()
    this.deposit_amount_page.click_deposit_tab()
});

When(/^I enter the amount "([^"]*)" to deposit and click on deposit button$/, function(deposit_amount)  {
	console.log(deposit_amount);
    this.deposit_amount_page = new DepositAmountPage()
    this.deposit_amount_page.enter_deposit_amount(deposit_amount)
});

Then(/^the amount deposited successfully$/, function() {
    this.deposit_amount_page = new DepositAmountPage()
    this.deposit_amount_page.verify_deposit_message("Deposit Successful")
});

