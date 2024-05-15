export default class DepositAmountPage {

    private readonly CSS_CUSTOMER_NAME = "#userSelect"
    private readonly CSS_LOGIN_BUTTON = "button[type='submit']"
    private readonly CSS_DEPOSIT_TAB = ".btn.btn-lg.tab[ng-class='btnClass2']"
    private readonly CSS_DEPOSIT_AMOUNT = "input[placeholder='amount']"
    private readonly CSS_DEPOSIT_BUTTON = "button[type='submit']"
    private readonly CSS_DEPOSIT_MESSAGE = ".error.ng-binding"
    
    select_customer_name(customer_name: string): void {
        cy.get(this.CSS_CUSTOMER_NAME).should('be.visible').select(customer_name)
    }

    click_login(): void {
        cy.get(this.CSS_LOGIN_BUTTON).should('be.visible').click()
    }

    click_deposit_tab(): void {
        cy.get(this.CSS_DEPOSIT_TAB).should('be.visible').click()
    }

    enter_deposit_amount(amount: string): void {
        cy.get(this.CSS_DEPOSIT_AMOUNT).should('be.visible').type(amount)
        cy.get(this.CSS_DEPOSIT_BUTTON).should('be.visible').click()
    }

    verify_deposit_message(message: string): void {
        cy.get(this.CSS_DEPOSIT_MESSAGE).should('have.text', message)
    }

}
