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