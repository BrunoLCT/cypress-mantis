// Comando customizado para realizar login
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),  // Define o nome de usuário a partir da variável de ambiente, com um valor padrão
    password = Cypress.env('user_password')  // Define a senha a partir da variável de ambiente, com um valor padrão
) => {
    cy.visit('/login_page.php')  // Visita a página de login

    cy.get('#username').type(user)  // Digita o nome de usuário no campo correspondente
    cy.get('.btn-success[type="submit"]').click()  // Clica no botão de submit do nome de usuário
    cy.get('#password').type(password, { log: false })  // Digita a senha no campo correspondente (escondendo no log)
    cy.get('.btn-success[type="submit"]').click()  // Clica no botão de submit da senha

    cy.log('Login realizado com sucesso')  // Adiciona um log para indicar sucesso no login
})

// Comando customizado para realizar logout
Cypress.Commands.add('logout', () => {
    cy.get('span.user-info').click()  // Clica no nome de usuário para abrir o menu
    cy.get('.fa-sign-out').click()  // Clica no botão de logout

    cy.log('Logout realizado com sucesso')  // Adiciona um log para indicar sucesso no logout
})

// Comando customizado para criar uma nova tarefa
Cypress.Commands.add('gui_createTask', (task) => {
    cy.visit('/bug_report_page.php')  // Visita a página de criação de tarefas

    cy.get('#category_id').select(1)  // Seleciona uma categoria para a tarefa (valor fixo 1)
    cy.get('#summary').type(task.description)  // Digita o resumo da tarefa no campo correspondente
    cy.get('#description').type(task.description)  // Digita a descrição da tarefa no campo correspondente
    cy.contains('Submit Issue').click()  // Clica no botão de submit para criar a tarefa

    cy.log('Tarefa criada com sucesso')  // Adiciona um log para indicar sucesso na criação da tarefa
})

// Comando customizado para alterar a senha do usuário
Cypress.Commands.add('newPassword', (
    passwordCurrent = Cypress.env('user_password'),  // Define a senha atual a partir da variável de ambiente, com um valor padrão
    newPassword = Cypress.env('user_new_password')  // Define a nova senha a partir da variável de ambiente, com um valor padrão
) => {
    cy.visit('/account_page.php')  // Visita a página de conta do usuário

    cy.get('#password-current').type(passwordCurrent)  // Digita a senha atual no campo correspondente
    cy.get('#password').type(newPassword)  // Digita a nova senha no campo correspondente
    cy.get('#password-confirm').type(newPassword)  // Digita a confirmação da nova senha no campo correspondente
    cy.contains('Update User').click()  // Clica no botão de atualizar usuário

    cy.log('Senha alterada com sucesso')  // Adiciona um log para indicar sucesso na alteração da senha
})
