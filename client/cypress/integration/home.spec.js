describe('Home component', () => {
    it('Visits the app root url which contains the phone list ', ()=>{
        cy.visit('http://localhost:3000/')
        cy.wait(3000)
        cy.location('pathname').should('not.include', 'phone')
        cy.get('.header').should('be.visible')
        cy.contains('.phones__title', 'Phone catalog')
        cy.get('.phones__list').should('be.visible').find('li').should('have.length', 8)
        cy.get('.phones__list > :nth-child(1)').should('exist')
        cy.get(':nth-child(1) > .phone__title').contains('iPhone 7')
        cy.get(':nth-child(1) > .phone__img').should('exist')
        cy.get(':nth-child(1) > .phone__price').should('have.text', ' 769 €')
        cy.get(':nth-child(1) > .phone__details-btn').click()
        cy.wait(1000)
        cy.location('pathname').should('include', 'phone/')
    })
})

