/*
2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом)
шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон.
  Направление шифрования задается переменной offset, которая может быть +1 и -1.
Например let str = 'AbC'; let offset = -1, result = 'ZaB';
Например let str = 'ZzZ'; let offset = 1, result = 'AaA';*/

function enigma(someString, offset){
 return someString.split('').map(e => String.fromCharCode(e.charCodeAt(0) + offset)).join('');
}

console.log(enigma('AbC',-1))
console.log(enigma('ZzZ',1))




