const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://mantis-prova.base2.com.br',  // Define a URL base para todos os testes e2e
  },
  fixturesFolder: false,  // Desativa o uso da pasta de fixtures
  video: false,  // Desativa a gravação de vídeos dos testes
});

