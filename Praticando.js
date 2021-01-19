// 1. Declare uma variavel de nome weight

// var weight;

// 2. Que tipo de dado é uma variavel acima?

// console.log(typeof weight);

// 3. Declare uma variavel e atribua valores para cada um dos dados:

/**
     * name: String
     * age: Number (integer)
     * stars: Number (float)
     * isSubscribed: Boolean
     */

// let name = 'nome';
// let age = 20;
// let stars = 2.0;
// let isSubcribed = true;

// 4. A variavel student abaixo é de que tipo de dados?

// let student = {};

// 4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

const student = {
name : 'nome',
age : 20,
stars : 2.0,
isSubcribed : true,
weight: 92.0
};

// console.log(student);

// 4.2 Mostre no console a seguinte mensagem:
// <name> de idade <age> pesa <weight> kg.
// Atenção, substitua <name> <age> e <weight> pelos
// valores de cada propriedade do objeto

// console.log(`${student.name} ${student.age} pesa ${student.weight} Kg`);

// 5. Declare uma variavel do tipo Array, de nome students e atribua a ela 
// nenhum valor, ou seja, somente o Array vazio

// const Matriz = []

// console.log(typeof Matriz);

// 6. Reatribuia valor para variavel acima, colocando
// dentro dela o objeto student da questão 4. (Não copiar e colar o objeto,
// mas usar o objeto criado e inserir ele no Array)


// 7. 
// const Matriz = [
//   student
// ];
// // console.log(Matriz);


// console.log(Matriz[0]);

// 8.

const spchock = {
  name : 'nome',
  age : 41545132,
  weight : 2.0,
  isSubcribed : true,
  
};

const Matriz = [
  student,
  spchock
];
console.log(Matriz[1]);

// 9. 
// undefined
