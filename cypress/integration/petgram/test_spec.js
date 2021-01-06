/* global describe, it, cy */
describe('petgram', function () {
  it('para ver si la pagina funciona', function () {
    cy.visit('/')
  })
  it('navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })
  it('navegamos de navbar a home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })
  it('los usuaarios no registrados ven form de registro y login  ', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
