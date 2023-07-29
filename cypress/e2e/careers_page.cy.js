import data from "../fixtures/data.json"
import pom from "../fixtures/pom.json"

describe('Careers page spec', () => {
  it('verify opened position for QA Automation Engineer', () => {
    cy.visit('/careers')
    cy.contains(data.txtExploreOpenPositions).should('be.visible')
    cy.contains(data.txtExploreOpenPositions).click()
    cy.get(pom.btnSelectLocations).click()
    cy.get(pom.liLocations).then((locationsList) => {
      cy.wrap(locationsList).contains(data.txtAbbreviationUKR).click()
    })
    cy.get(pom.divJobContainer).filter(':visible').then((jobBlock) => {
      cy.wrap(jobBlock).its('length').should('be.at.least', 1)
      cy.wrap(jobBlock).invoke('attr', 'data-location').should('equal', data.txtAbbreviationUKR)
      cy.wrap(jobBlock).should('contain', data.txtQaAutomationPosition)
    })
  })
})