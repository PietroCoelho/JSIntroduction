/**
 *  Scope e Var
 *  Escopo determina a visibilidade de alguma variavel no JS
 *
 * Block statement
 */

//  vamos iniciar um bloco
{
  // Aqui dentro é um bloco e posso colocar qualquer codigo
} // aqui fechamos o bloco

// O bloco, tambem criara um novo escopo. Chamado de `block-scope`

{
  let x = 0;
  console.log(x);
}

// var é global e poderá funcionar fora de um escopo de bloco
console.log("> existe x antes do bloco ?", x);
// #hoisting
// escopo global
{
  // escopo local

  var x = 0;
}

console.log("> existe x depois do bloco ?", x);
