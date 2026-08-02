describe('login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000')
    cy.screenshot('apos-visitar-pagina')
  })
  it.only('login com dados validos deve permitir entrada no sistema', () => {
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.screenshot('apos-preencher-dados-validos')
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-no-botao-entrar')
    
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('login com dados invalidos deve apresentar mensagem de erro', () => {
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.contains('button', 'Entrar').click()

    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})