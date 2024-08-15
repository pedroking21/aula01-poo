//Importar a classe que quero utilizar
import { Pessoa } from './Pessoa';

//Instanciar (criar objeto)
const pessoa1 = new Pessoa('Raphael', 23);
const pessoa2 = new Pessoa('luara', 26);

console.log(pessoa1.aniversario());
console.log(pessoa2.correr());