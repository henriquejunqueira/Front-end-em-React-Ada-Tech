// * Funções de alta ordem de arrays

// TODO 1. Array.prototype.forEach()

// const numeros = [40, 34, 67, 89, 23, 10];

// function imprimirElemento(elemento){
//     console.log(elemento);
// }

// numeros.forEach(imprimirElemento);

// for(const elemento of numeros){
//     console.log(elemento);
// }

// ? Jeito mais compacto de se fazer a função de alta ordem
// const numeros = [40, 34, 67, 89, 23, 10];

// numeros.forEach((elemento) => {
//     console.log(elemento);
// });

// ! valor = valor do elemento no array; posição = posição do elemento no array; arrayCompleto = array
// numeros.forEach((valor, posicao, arrayCompleto) => {
//     console.log(posicao, valor, arrayCompleto);
// });

// TODO 2. Array.prototype.find(): útil pra encontrar um elemento dentro do array
// const numeros = [40, 34, 67, 89, 23, 10];

// const encontrado = numeros.find((numero) => {
//     return numero === 10; // retorna o primeiro valor igual a 10. No caso, a primeira ocorrẽncia é o próprio 10
// });

// const encontrado = numeros.find((numero) => {
//     return numero > 30; // retorna o primeiro valor maior que 30 no array. No caso, a primeira ocorrẽncia é o 40
// });

// const encontrado = numeros.find((numero) => {
//     return numero >= 67; // retorna o primeiro valor maior ou igual a 67 no array. No caso, a primeira ocorrẽncia é o próprio 67
// });

// const encontrado = numeros.find((numero) => {
//     // retorna o primeiro valor menor que 20 e maior que 10. No caso, ele retorna undefined, pois não foi encontrado
//     return numero < 20 && numero > 10;
// });

// console.log(encontrado);

// * Array de objetos
const pessoas = [
    {
        nome: 'Pessoa 1',
        idade: 34,
        altura: 1.77
    },
    {
        nome: 'Pessoa 2',
        idade: 25,
        altura: 1.56
    },
    {
        nome: 'Pessoa 3',
        idade: 46,
        altura: 1.82
    },
];

// const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 40);
// const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade < 18);
// const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7);

// console.log(pessoaEncontrada);

// TODO 3. Array.prototype.findIndex(): muito parecido com o find(), porém retorna o índice do elemento encontrado
// const indicePessoaEncontrada = pessoas.findIndex((pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7);

const indicePessoaEncontrada = pessoas.findIndex((pessoa) => pessoa.idade > 50 && pessoa.altura < 1.7); // ninguém encontrado

console.log(indicePessoaEncontrada);