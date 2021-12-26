$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de contas",
  "description": "\nComo um usuário \nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 155300,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-contas;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"levir@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"levir123\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "a conta é inserida com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5674847500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "levir@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 83517700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "levir123",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 34274400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 550673100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 34292100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 245398500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 274421500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 49403800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 369564700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.aContaÉInseridaComSucesso()"
});
formatter.result({
  "duration": 24456900,
  "status": "passed"
});
formatter.after({
  "duration": 1092787600,
  "status": "passed"
});
formatter.before({
  "duration": 45300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 21,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "informo o usuário \"levir@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "a senha \"levir123\"",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 26,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "sou notificado que o nome da conta é obrigatório",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 4812479500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "levir@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 75064700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "levir123",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 44298300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 512916900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 32746300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 250447500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 213340400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 206640300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 17332600,
  "status": "passed"
});
formatter.after({
  "duration": 915241600,
  "status": "passed"
});
formatter.before({
  "duration": 47600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-com-nome-já-existente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 32,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 33,
  "name": "informo o usuário \"levir@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "a senha \"levir123\"",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 37,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 38,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 39,
  "name": "informo a conta \"Conta mesmo nome\"",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5050415500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "levir@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 74172700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "levir123",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 44477300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 532440900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 27472800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 245833100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 236559200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 57671300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 253145100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 12719800,
  "status": "passed"
});
formatter.after({
  "duration": 888844100,
  "status": "passed"
});
});