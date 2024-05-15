export default class CustomerPage {

    private readonly CSS_CUSTOMERS_TAB = ".btn.btn-lg.tab[ng-class='btnClass3']"
    private readonly CSS_ADD_CUSTOMERS_TAB = ".btn.btn-lg.tab[ng-class='btnClass1']"

    private readonly CSS_INPUT_SEARCH = "input[placeholder='Search Customer']"
    private readonly CSS_FIRSTCELL_VALUE = "tbody td:nth-child(1)"

    private readonly CSS_FIRST_NAME = "input[placeholder='First Name']"
    private readonly CSS_LAST_NAME = "input[placeholder='Last Name']"
    private readonly CSS_POSTAL_CODE = "input[placeholder='Post Code']"
    private readonly CSS_ADD_CUSTOMER_BUTTON = "button[type='submit']"

    
    click_customers_tab(): void {
        cy.get(this.CSS_CUSTOMERS_TAB).should('be.visible').click()
    }

    click_add_customers_tab(): void {
        cy.get(this.CSS_ADD_CUSTOMERS_TAB).should('be.visible').click()
    }
    
    fillSearch(text: string): void {
        cy.get(this.CSS_INPUT_SEARCH).should('be.visible').type(text)
    }

    getSearchResult(text: string): void {
        cy.get(this.CSS_FIRSTCELL_VALUE).should('be.visible')
    }

    add_customer_details(firstname: string, lastname: string, postalcode: string): void{
        cy.get(this.CSS_FIRST_NAME).should('be.visible').type(firstname)
        cy.get(this.CSS_LAST_NAME).should('be.visible').type(lastname)
        cy.get(this.CSS_POSTAL_CODE).should('be.visible').type(postalcode)
    }

    click_add_customer_button(): void {
        cy.get(this.CSS_ADD_CUSTOMER_BUTTON).should('be.visible').click()
        //Checking the window alert text
        cy.on('window:alert',(txt)=>{
            //Assertion
            expect(txt).to.contains('Customer added successfully with customer id :');
        })

    }


}