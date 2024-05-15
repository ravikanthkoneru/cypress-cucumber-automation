import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import OpenBankAccountPage from '../../pages/OpenBankAccountPage';

Given(/^I click on the Open Account tab$/, function () {
    this.open_account_page = new OpenBankAccountPage()
    this.open_account_page.click_open_account_tab()
});

When(/^I select customer "([^"]*)" and curreency "([^"]*)"$/, function (customer_name,currency) {
	console.log(customer_name,currency);
    this.open_account_page = new OpenBankAccountPage()
    this.open_account_page.select_customer_data(customer_name,currency)
});

When(/^I click on the process button$/, function () {
    this.open_account_page = new OpenBankAccountPage()
    this.open_account_page.click_process_button()
});

Then(/^the account created successfully$/, function () {
	 //Checking the window alert text
     cy.on('window:alert',(txt)=>{
        //Assertion
        expect(txt).to.contains('Customer added successfully with customer id :');
    })
});
