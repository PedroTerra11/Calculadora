const calculadora = require("./index");

calculadora.mensagem();
while (1) {
  calculadora.leropcao();
  switch (calculadora.operacao()) {
    case 1:
      calculadora.somar();
      break;
    case 2:
      calculadora.diminuir();
      break;
    case 3:
      calculadora.dividir();
      break;
    case 4:
      calculadora.multiplicar();
      break;

    case 5:
      calculadora.porcentagem();
      break;
    default:
      console.log("Opção inválida");
  }

  process.exit();
}
