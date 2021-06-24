import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente("Ricardo", 11122233309); //o new cliente é uma instancia da minha class
const cliente2 = new Cliente("Alice", 44455566608 );
let numeroDeContas = 0;
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
numeroDeContas++;

contaCorrenteRicardo.depositar(500)
const conta2 = new ContaCorrente(102, cliente2);
numeroDeContas++;


let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2)
console.log(contaCorrenteRicardo)
console.log(conta2)
