/*------Function Scope------*/

// let subject = 'o right';
// 
// function createThink(){
    // subject = 'study'
    // return subject
// }
// 
// console.log(subject);
// console.log(createThink());

/*------Function Hoisting------*/


// sayMyName();

// function sayMyName(){
//     console.log('aqui');
// }

/*------Arrow Function------*/

// const sayMyName = (name) => {
//     console.log(name);
// }

// sayMyName('SPChock');

/*------Callback Function------*/ 


// function sayMyName(name){
//     console.log('antes de executar a funcao callback')
//     name();
//     console.log('depois de executar a funcao callback')

// }

// sayMyName(
//     () => {
//         console.log('estou em uma callback')
//     }
// )

/*------Function Construct------*/
/*--*expressão new
    *criar um novo objeto
    *this keyword
------*/ 

// function Person(name){
//     this.name=name
//     this.walk = function () {

//         return this.name + " está andando"
//     }
// }
// const SPChock = new Person('jack sparrow')

// console.log(SPChock.walk())