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
formatter.scenario({
  "line": 21,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 22,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 23,
  "name": "informo o usuário \"levir@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "a senha \"levir123\"",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 27,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 28,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "sou notificado que o nome da conta é obrigatório",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 6197392600,
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
  "duration": 74425800,
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
  "duration": 39077200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 565841700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 31058700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 245236900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 238253900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 238781900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 21260500,
  "status": "passed"
});
});