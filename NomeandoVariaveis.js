/**
 *  Scope let e const
 *  Const e let são locais e só funcionam no escopo
 */


const y= 1;
{
  let y = 0
  console.log('> existe y', y)
}
console.log('> existe y depois do bloco? ', y)


/**
 * Para criar nomes
 * JS é case-sensitive (sensivel ao caso)
 * JS aceita a cadeia de caracteres Unicode
 * 
 * Posso:
 * Iniciar com esses caracteres especiais $ _
 * Iniciar com letras
 * Colocar acentos
 * Letras maiusculas e minusculas fazem diferença
 * 
 * Não Posso:
 * Iniciar com numeros
 * colocar espaços vazios no nome
 * 
 * Ideal:
 * Criar nomes que fazem sentido
 * Que explique o que a variavel é ou faz
 * Camelcase
 * Snake_case
 * Escrever em Inglês
 * 
 */
let NameComplete = 'joao o batista';