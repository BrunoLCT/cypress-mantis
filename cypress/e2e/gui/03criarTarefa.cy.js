import { faker } from '@faker-js/faker'

describe('Funcionalidade de Criar Tarefa', () => {

    // Antes de cada teste, realiza o login
    beforeEach(() => {
        cy.login()  // Realiza login usando o comando customizado
    })

    // Teste para verificar se a criação de tarefa é realizada com sucesso
    it('Deve criar tarefa com sucesso', () => {
        // Gera dados fictícios para a tarefa usando o Faker
        const task = {
            name: `task-${faker.datatype.uuid()}`,  // Gera um nome único para a tarefa
            description: faker.random.words(5)  // Gera uma descrição aleatória para a tarefa
        }

        // Usa o comando customizado para criar a tarefa na interface gráfica
        cy.gui_createTask(task)

        // Verificações adicionais podem ser adicionadas aqui para garantir que a tarefa foi criada com sucesso, como verificar se a tarefa aparece na lista de tarefas.
    })
    // Teste para verificar se a criação de tarefa falha sem descrição
    it('Deve falhar ao tentar criar tarefa sem descrição', () => {
        // Gera dados fictícios para a tarefa sem descrição
        const task = {
            name: `task-${faker.datatype.uuid()}`,
            description: ''
        }

        // Tenta criar a tarefa na interface gráfica
        cy.gui_createTask(task)

        // Verifica se uma mensagem de erro é exibida
        cy.get('.alert-danger').should('contain', 'Descrição é obrigatória')
    })
})
