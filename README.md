# Cypress Mantis

Este repositório contém testes automatizados para a aplicação Mantis usando o framework Cypress.

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Execução dos Testes](#execução-dos-testes)

## Instalação

Para começar, você precisará clonar este repositório e instalar as dependências necessárias.

```bash
# Clone o repositório
git clone https://github.com/BrunoLCT/cypress-mantis.git

# Navegue até o diretório do projeto
cd cypress-mantis

# Instale as dependências
npm install
```

## Configuração

Antes de executar os testes, você precisa configurar algumas variáveis de ambiente no arquivo `cypress.env.json`:

```json
{
    "user_name": "",
    "user_password": "",
    "user_new_password": ""
}
```

Além disso, verifique se o arquivo `cypress.config.js` está configurado corretamente:

```javascript
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://mantis-prova.base2.com.br',
  },
  fixturesFolder: false,
  video: false,
});
```

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```
cypress-mantis/
├── cypress/
│   ├── e2e/
│   │   ├── 01login.cy.js
│   │   ├── 02logout.cy.js
│   │   ├── 03createTask.cy.js
│   │   └── 04newPassword.cy.js
│   └── support/
│       └── gui_commands.js
├── cypress.env.json
├── cypress.config.js
├── package.json
└── README.md
```

- `cypress/e2e/`: Contém os testes end-to-end.
- `cypress/support/`: Contém comandos personalizados do Cypress.
- `cypress.env.json`: Contém as variáveis de ambiente usadas nos testes.
- `cypress.config.js`: Configuração do Cypress.
- `package.json`: Lista de dependências do projeto.

## Execução dos Testes

Para executar os testes, use os seguintes comandos:

```bash
# Abra a interface do Cypress para selecionar e executar os testes
npx cypress open

# Execute um teste específico
npx cypress run --spec cypress/e2e/gui/nome_arquivo_teste

# Execute todos os testes na pasta 'gui'
npx cypress run --spec cypress/e2e/gui