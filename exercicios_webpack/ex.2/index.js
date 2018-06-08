import Pessoa from './pessoa' // browser não reconhece import, precisa de transpiler (babel)

const pessoa = new Pessoa ('Guilherme')
console.log(`${pessoa.toString()}`)