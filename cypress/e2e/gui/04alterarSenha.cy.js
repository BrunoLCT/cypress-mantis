describe('Funcionalidade de Alteração de Senha', () => {

    // Antes de cada teste, realiza o login
    beforeEach(() => {
        cy.login()  // Realiza login usando o comando customizado
    })

    // Teste para verificar se a alteração de senha é realizada com sucesso
    it('Deve alterar senha com sucesso', () => {
        cy.newPassword()  // Realiza a alteração de senha usando o comando customizado

        // Verifica se a URL atual é igual à URL da página de login, indicando que a alteração de senha foi bem-sucedida e o usuário foi redirecionado para a página de login
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/login_page.php`)
    })
})

