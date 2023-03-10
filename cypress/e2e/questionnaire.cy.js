describe('Questionnaire user flow', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/quiz')
  })
  it('Should contain 5 sliders', () => {
    cy.get('.slider').should('have.length', 5)
    cy.get('.slider').eq(0).should('have.id', 'size')
    cy.get('.slider').eq(1).should('have.id', 'familyRating')
    cy.get('.slider').eq(2).should('have.id', 'trainability')
    cy.get('.slider').eq(3).should('have.id', 'groomingNeeded')
    cy.get('.slider').eq(4).should('have.id', 'energyLevel')
  })

  it('Should be able to change slider values', () => {
    cy.get('input[type=range]')
      .eq(0)
      .invoke('val', '5')
      .trigger('change')
      .should('have.value', 5)
  })

  it('Should be able to change all slider values', () => {
    cy.get('input[type=range]')
      .eq(0)
      .invoke('val', '5')
      .trigger('change')
      .should('have.value', 5)
    cy.get('input[type=range]')
      .eq(1)
      .invoke('val', '2')
      .trigger('change')
      .should('have.value', 2)
    cy.get('input[type=range]')
      .eq(2)
      .invoke('val', '1')
      .trigger('change')
      .should('have.value', 1)
    cy.get('input[type=range]')
      .eq(3)
      .invoke('val', '4')
      .trigger('change')
      .should('have.value', 4)
    cy.get('input[type=range]')
      .eq(4)
      .invoke('val', '5')
      .trigger('change')
      .should('have.value', 5)
  })

  it('Should be able to submit', () => {
    cy.get('input[type=range]').eq(0).invoke('val', '5').trigger('change')
    cy.get('input[type=range]').eq(1).invoke('val', '5').trigger('change')
    cy.get('input[type=range]').eq(2).invoke('val', '5').trigger('change')
    cy.get('input[type=range]').eq(3).invoke('val', '5').trigger('change')
    cy.get('input[type=range]').eq(4).invoke('val', '5').trigger('change')
    cy.intercept(
      'https://pawfect-match-api.herokuapp.com/api/v1/dogs/3/3/3/3/3',
      {
        method: 'GET',
        fixture: '../fixtures/single_dog.json',
      }
    )
    cy.get('button').click()
  })
})
