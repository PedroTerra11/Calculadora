const calculadora = require('./index');

console.log(`Digite 1 para somar dois números
Digite 2 para diminuir dois números
Digite 3 para dividir
Digite 4 para multiplicar
Digite 5 para porcentagem`);

while(1){
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
}
