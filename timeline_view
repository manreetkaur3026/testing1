import example from '../../fixtures/example.json'
describe('Automating Airtable site',()=>{
    before(()=>{
        //login to homepage
        cy.airtablelogin(example.email,example.password1)
    })
    it('Creating new interface', () => {
        //Navigate to interfaces
        cy.findByRole('link',{name:"Manreet"}).click()
        cy.findByRole('link',{name:'Interfaces'}).click()
        
        //Click on create new button
        cy.findByRole('button',{name:"Create new"}).click()

        //Verify "Name your interface" text
        cy.findByRole('heading',{name:"Name your interface"}).should('be.visible')

        //Click on next button
        cy.findByRole('button',{name:'Next'}).click()

        //Verify user is on choose a layout page
        cy.findByRole('heading',{name: "Choose a layout"}).should('be.visible')

        //Verify list thumbnail is highlighted
        // cy.findByRole('option',{name: "List Organize and prioritize."}).should('have.class','focus-visible')
        cy.findByRole('option',{name: "List Organize and prioritize."}).click().should('be.focused')


        //  Click on record review tab visible on left sidebar
        cy.findByRole('option',{name:"Record review Review details of many records from one table."}).click()
        

        //Verify layout change on right side when user clickon record review page
        cy.get('picture > img').should('have.attr', 'src').and('equal', '//static.airtable.com/images/interface_layouts/Record_Triage.png');


        //Click on Gallery tab visible on left sidebar
        cy.findByRole('option',{name:"Gallery Visualize image-heavy records."}).click()

        //Verify layout change on right side
        cy.get('picture > img').should('have.attr', 'src').and('equal', '//static.airtable.com/images/interface_layouts/gallery.png');

        //Click on next button
        cy.findAllByRole('button',{name:'Next'}).eq(1).click()

        //Verify user is on "Connect to a table" page
        cy.findByRole('heading',{name: "Connect to a table"}).should('be.visible')

        //Projects in selected as default in drop down list
        cy.findByRole('button',{name:"Projects"}).click()
        cy.findByRole('listbox',{name:"Options"}).should('contain','Projects')

        //Click on cross icon
        cy.get('[aria-label= "Close dialog"]').eq(1).click()

        //Verify user navigates to interfaces page
        cy.findByRole('heading',{name:"Interfaces"}).should('be.visible')

    })
})
