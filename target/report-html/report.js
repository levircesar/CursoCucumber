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
  "duration": 130500,
  "status": "passed"
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
  "duration": 6725586300,
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
  "duration": 95053100,
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
  "duration": 49049000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 530575500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 29995700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 245018000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 191235800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 205728800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 25964700,
  "status": "passed"
});
formatter.after({
  "duration": 1029080700,
  "status": "passed"
});
formatter.before({
  "duration": 75300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-com-nome-já-existente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 33,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 34,
  "name": "informo o usuário \"levir@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 35,
  "name": "a senha \"levir123\"",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 38,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 39,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5299828500,
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
  "duration": 68803800,
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
  "duration": 43977200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 495427300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 33346200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 245286200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 205564100,
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
  "duration": 43522000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 211356700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 13287400,
  "status": "passed"
});
formatter.after({
  "duration": 1002293300,
  "status": "passed"
});
});