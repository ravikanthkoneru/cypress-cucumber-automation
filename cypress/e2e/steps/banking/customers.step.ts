import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import CustomerPage from '../../pages/CustomerPage'

Given(/^I click on the Customers tab$/, function() {
    this.customer_page = new CustomerPage()
    this.customer_page.click_customers_tab()
});

When(/^I fill the search input with the "([^"]*)"$/, function (search_text) {
	console.log(search_text);
    this.customer_page = new CustomerPage()
    this.customer_page.fillSearch(search_text)
});

Then(/^the text "([^"]*)" should be visible on the result table$/, function (search_result){
	console.log(search_result);
    this.customer_page = new CustomerPage()
    this.customer_page.getSearchResult()
});

Given(/^I click on the Add Customer tab$/, function () {
	this.customer_page = new CustomerPage()
    this.customer_page.click_add_customers_tab()
});

When(/^I fill input data to add customers$/, function (datatable: DataTable) {
    console.log(datatable.rows())
    this.customer_page = new CustomerPage()
    datatable.hashes().forEach(element => {
        this.customer_page.add_customer_details(element.firstname, element.lastname, element.postalcode)
    });
});

Then(/^I click on Add Customer button$/, function () {
	this.customer_page = new CustomerPage()
    this.customer_page.click_add_customer_button()
});
