/// <reference types= "Cypress" />

describe('bebo technologies', () => {
    beforeEach(() => { 
        cy.visit('/');
    })
    it('Apply for job', () => { 
        // Click on India careers button.
        cy.findByRole('link',{name:'India Careers'}).click();

        // Verify the url
        cy.url().should('eq','https://www.bebotechnologies.com/careers');
       
        // Click on "learning and development" and verify it highlights
        cy.contains('Learning and development').click();
        
        cy.contains('Learning and development').should('have.class', 'active');
    
        // Verify Job title and Employment Type
        cy.findByRole('heading',{name:'Learning and Development Content Designer 4225 Apply Now'}).should('be.visible');

        // Click on apply now button
        cy.findByRole('link',{name:'Apply Now'}).invoke('removeAttr', 'target').click();
        
        // Verify URL and button text "Become Part Of Team bebo- Join Us"
        cy.url().should('include','mobile-recruit');
        cy.findByRole('link',{name:'Become Part Of Team Bebo - Join Us'},{timeout:10000}).should('be.visible');

        

        })
      
        })

      
