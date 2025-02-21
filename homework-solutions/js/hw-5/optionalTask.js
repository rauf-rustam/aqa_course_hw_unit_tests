/*
2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом)
шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон.
  Направление шифрования задается переменной offset, которая может быть +1 и -1.
Например let str = 'AbC'; let offset = -1, result = 'ZaB';
Например let str = 'ZzZ'; let offset = 1, result = 'AaA';*/

function enigma(someString, offset) {
  return someString
    .split('')
    .map((el) => {
      const code = el.charCodeAt(0);
      if (code === 65) return String.fromCharCode(90);
      if (code === 90) return String.fromCharCode(65);
      if (code === 97) return String.fromCharCode(122);
      if (code === 122) return String.fromCharCode(97);
      return String.fromCharCode(code + offset);
    })
    .join('');

}

console.log(enigma('AbC', -1));
console.log(enigma('ZzZ', 1));
