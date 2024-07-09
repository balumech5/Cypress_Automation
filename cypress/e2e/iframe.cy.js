describe('Basic Ui Elements Handling', () => {
    it('Ui Elements validate and test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        })
    })