export default class HomePage {

    private readonly BASE_URL_NEW = "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"

    private readonly CSS_CUSTOMER_LOGIN_BUTTON = "button[ng-click='customer()']"
    private readonly CSS_BANK_MANAGER_LOGIN_BUTTON = "button[ng-click='manager()']"

    private readonly CSS_LOGOUT_BUTTON = ".btn.logout"
    

    open(): void {
        cy.visit(this.BASE_URL_NEW)
        cy.get('body').should('be.visible')
    }

    click_customer_login(): void {
        cy.get(this.CSS_CUSTOMER_LOGIN_BUTTON).should('be.visible').click()
    }

    click_bank_manager_login(): void {
        cy.get(this.CSS_BANK_MANAGER_LOGIN_BUTTON).should('be.visible').click()
    }

    click_logout(): void {
        cy.get(this.CSS_LOGOUT_BUTTON).should('be.visible').click()
    }

}
