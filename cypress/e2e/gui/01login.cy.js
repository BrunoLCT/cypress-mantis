describe('Funcionalidade de Login', () => {

    // Teste para verificar se o login com credenciais válidas é bem-sucedido
    it('Deve realizar login com sucesso', () => {
        // Comando customizado para realizar o login
        cy.login()
        
        // Verifica se o título da página é igual ao esperado, com um timeout de 5 segundos
        cy.title({ timeout: 5000 }).should('eq', 'Minha Visão - MantisBT')
        
        // Verifica se o nome do usuário logado é exibido corretamente na interface
        cy.get('.user-info').should('contain', Cypress.env('user_name'))
    })

    // Teste para verificar a mensagem de erro ao tentar login com um usuário inválido
    it('Deve exibir mensagem de erro ao tentar login com usuário inválido', () => {
        // Comando customizado para realizar o login com um usuário inválido e uma senha válida
        cy.login('usuario_invalido', Cypress.env('user_password'))
        
        // Verifica se a mensagem de erro correta é exibida
        cy.get('.alert-danger').should('contain', 'Sua conta pode estar desativada ou bloqueada')
    })

    // Teste para verificar a mensagem de erro ao tentar login com uma senha inválida
    it('Deve exibir mensagem de erro ao tentar login com senha inválida', () => {
        // Comando customizado para realizar o login com um usuário válido e uma senha inválida
        cy.login(Cypress.env('user_name'), 'senha_invalida')
        
        // Verifica se a mensagem de erro correta é exibida
        cy.get('.alert-danger').should('contain', 'Sua conta pode estar desativada ou bloqueada')
    })
})

