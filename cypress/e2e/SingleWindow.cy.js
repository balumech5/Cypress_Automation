describe('Basic Ui Elements Handling', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('Ui Elements validate and test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.on('window:before:load', (win)=>{
            cy.stub(win,'open').callsFake((url)=>{
                win.location.href=url;
                
        })
        
       
        }) 
        cy.get('#openwindow').click();
          
        })
    })