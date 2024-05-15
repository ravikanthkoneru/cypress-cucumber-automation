export default class OpenBankAccountPage {

    private readonly CSS_OPEN_ACCOUNT_TAB = ".btn.btn-lg.tab[ng-class='btnClass2']"
  
    private readonly CSS_CUSTOMER_NAME = "#userSelect"
    private readonly CSS_CURRENCY = "#currency"
    private readonly CSS_PROCESS_BUTTON = "button[type='submit']"

    
    click_open_account_tab(): void {
        cy.get(this.CSS_OPEN_ACCOUNT_TAB).should('be.visible').click()
    }

    select_customer_data(customer_name: string, currency: string): void{
        cy.get(this.CSS_CUSTOMER_NAME).select(customer_name)
        cy.get(this.CSS_CURRENCY).should('be.visible').select(currency)
    }

    click_process_button(): void {
        cy.get(this.CSS_PROCESS_BUTTON).should('be.visible').click()
        //Checking the window alert text
        cy.on('window:alert',(txt)=>{
            //Assertion
            expect(txt).to.contains('Account created successfully with account Number :');
        })

    }


}