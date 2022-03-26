describe('Testing Brumcars', () => {
    beforeEach(() => {
        cy.visit('https://prosperolr.uatproxy.cdlis.co.uk/prospero/')
        cy.get('#motorQuotedefaultPC').click()
    })

    it('Go to Vehicle page', () => {
        cy.get('button[name="newquote.y"]').click()
        cy.get('button[name="confirm.y"]').click()
    })

    it('Run from the assumptions', () => {
        cy.get('button[name="newquote.y"]').click()
        cy.get('button[name="back.y"]').click()
    })
})
describe('Testing Vroombikes', () => {
    beforeEach(() => {
        cy.visit('https://prosperolr.uatproxy.cdlis.co.uk/prospero/')
        cy.get('#motorQuotedefaultMC').click()
    })

    it('Go to Bike page', () => {
        cy.get('button[name="newquote.y"]').click()
        cy.get('button[name="confirm.y"]').click()
    })

    it('Run from the assumptions', () => {
        cy.get('button[name="newquote.y"]').click()
        cy.get('button[name="back.y"]').click()
    })
})
describe('Testing Nyoomvans', () => {
    beforeEach(() => {
        cy.visit('https://prosperolr.uatproxy.cdlis.co.uk/prospero/')
        cy.get('#motorQuotedefaultGV').click()
    })

    it('Go to Van page', () => {
        cy.get('button[name="newquote.y"]').click()
        cy.get('button[name="confirm.y"]').click()
    })

    it('Run from the assumptions', () => {
        cy.get('button[name="newquote.y"]').click()
        cy.get('button[name="back.y"]').click()
    })
})
describe('Testing Log huts', () => {
    beforeEach(() => {
        cy.visit('https://prosperolr.uatproxy.cdlis.co.uk/prospero/')
        cy.get('#motorQuotedefaultHC').click()
    })

    it('Go to Cover page', () => {
        cy.get('button[name="newquote.y"]').click()
        cy.get('button[name="confirm.y"]').click()
    })

    it('Run from the assumptions', () => {
        cy.get('button[name="newquote.y"]').click()
        cy.get('button[name="back.y"]').click()
    })
})