describe('Funcionalidade de Logout', () => {

    // Antes de cada teste, realiza o login e visita a página inicial
    beforeEach(() => {
        cy.login()  // Realiza login usando o comando customizado
        cy.visit('/')  // Visita a página inicial após o login
    })

    // Teste para verificar se o logout é realizado com sucesso
    it('Deve realizar logout com sucesso', () => {
        cy.logout()  // Realiza logout usando o comando customizado

        // Verifica se a URL atual é igual à URL da página de login
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/login_page.php`)
    })
})

