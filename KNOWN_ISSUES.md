# Inconsistências e Problemas Conhecidos

Este documento lista as inconsistências e problemas conhecidos na aplicação Mantis, bem como seu status atual e possíveis soluções ou workarounds.

## Índice
- [Inconsistência 1: Criação de Tarefa](#inconsistência-1-criação-de-tarefa)
- [Inconsistência 2: Alteração de Senha](#inconsistência-2-alteração-de-senha)

## Inconsistência 1: Criação de Tarefa

**Descrição**: 
Após criar uma certa quantidade de tarefas, a aplicação não permite mais acessar tal funcionalidade.

**Status**: 
Aberto

**Solução Proposta**: 
- Adicionar validação no frontend para limitar a quantidade de tarefas que podem ser criadas.
- Melhorar a mensagem de erro para que seja mais descritiva.

**Workaround**: 
- Informar aos usuários sobre a limitação e pedir que monitorem o número de tarefas criadas.

**Evidência**:
- [Vídeo demonstrativo do problema](https://drive.google.com/drive/folders/1yVaIzlVHggX4y2Sa_zMqvdLU0DGizlyh?usp=sharing)

## Inconsistência 2: Alteração de Senha

**Descrição**: 
Quando um usuário tenta alterar a senha sem informar o campo "confirmar senha", a aplicação permite clicar em "Atualizar Usuário", sendo redirecionado para outra página que informa:

APPLICATION ERROR #803

A senha não combina com a verificação.
Por favor, utilize o botão "Voltar" de seu navegador web para voltar à página anterior. Lá você pode corrigir quaisquer problemas identificados neste erro ou escolher uma outra ação. Você também pode clicar em uma opção da barra de menus para ir diretamente para outra seção.

Outro ponto identificado é que, quando o usuário informa somente o campo "Confirmar senha", a aplicação retorna um direcionamento informando: "Operação realizada com sucesso". Isso dá a falsa impressão de que houve uma atualização de senha/cadastro.

**Status**: 
Aberto

**Solução Proposta**: 
- Revisar o fluxo de validação e redirecionamento após a tentativa de alteração de senha.
- Adicionar testes automatizados para cobrir o fluxo de alteração de senha, garantindo que todos os campos obrigatórios sejam preenchidos corretamente.

**Workaround**: 
- Pedir ao usuário para preencher ambos os campos de senha e confirmação de senha corretamente antes de tentar atualizar.
- Se um erro ocorrer, pedir ao usuário para fazer logout manualmente e depois fazer login novamente com a nova senha.

**Evidência**:
- [Vídeo demonstrativo do problema](https://drive.google.com/drive/folders/1yVaIzlVHggX4y2Sa_zMqvdLU0DGizlyh?usp=sharing)
