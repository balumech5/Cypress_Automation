describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.youtube.com/')
    cy.get('#search-input > #search').type('coolie title teaser')
    cy.get('#search-icon-legacy > yt-icon.style-scope > .style-scope > .yt-spec-icon-shape > div').click()
    cy.get(':nth-child(3) > :nth-child(1) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > yt-image.style-scope > .yt-core-image').click()
    cy.wait(50000)
    cy.get('.video-stream').screenshot('TeaserScreenShot')
  })
})