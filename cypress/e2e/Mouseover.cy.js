describe('Basic Ui Elements Handling', () => {
    it('Ui Elements validate and test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')
        })
    })