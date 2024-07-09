describe('Basic Ui Elements Handling', () => {
    it('Ui Elements validate and test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //radio button
        cy.get('input[value="radio1"]').check().should('be.checked')
        //checkbox button
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.wait(4000)
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        // static dropdown
        cy.get('label input[id="checkBoxOption1"]').check(["option1", "option2"]).should('be.checked')
        cy.get('select [value="option2"]').select().should('have.value', 'option2')
        // Dynamic Dropdown
        cy.get('[placeholder="Type to Select Countries"]').type('in')
        cy.get('ui-menu-item div').each($options)
            if($options.text().includes('India'))
                {cy.wrap($options).click({force:true})}
        
        })
    })
