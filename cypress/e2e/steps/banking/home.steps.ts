import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../pages/HomePage'

Given(/^I go to the Banking page$/, function () {
    this.home_page = new HomePage()
    this.home_page.open()
});

When(/^I click on the Bank Manager Login button$/, function () {
    this.home_page = new HomePage()
    this.home_page.click_bank_manager_login()
});

When(/^I click on the Customer Login button$/, function () {
    this.home_page = new HomePage()
    this.home_page.click_customer_login()
});

Then(/^I click on the Logout button$/, function()  {
    this.home_page = new HomePage()
    this.home_page.click_logout()
});
