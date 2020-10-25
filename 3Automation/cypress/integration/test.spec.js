const { describe } = require("mocha");

describe('Work with basic elements', () => {

  before(() => {
    cy.visit('https://frentecorretora.com.br/blog/');
  })

  it('Verificar título da pesquisa', () => {
    cy.contains('Categorias').should('exist');
  })

  it('Pesquisar um artigo', () => {
    cy.get('.et_pb_s').type('Mercado');
    cy.get('.et_pb_searchsubmit').click();
  })

  it('Validar pesquisa', () => {
    cy.title('contain', 'You searched for Mercado')
  })
})