/*
2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом)
шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон.
  Направление шифрования задается переменной offset, которая может быть +1 и -1.
Например let str = 'AbC'; let offset = -1, result = 'ZaB';
Например let str = 'ZzZ'; let offset = 1, result = 'AaA';*/

function enigma(someString, offset) {
  let encryptedWord = [];
  someString.split('').map((el) => {
    if (el.charCodeAt(0) === 65) {
      el = 90;
    } else if (el.charCodeAt(0) === 90) {
      el = 65;
    } else if (el.charCodeAt(0) === 97) {
      el = 122;
    } else if (el.charCodeAt(0) === 122) {
      el = 97;
    } else {
      el = el.charCodeAt(0) + offset;
    }
    encryptedWord.push(el);
  });
  return encryptedWord.map((e) => String.fromCharCode(e)).join('');
}

console.log(enigma('AbC', -1));
console.log(enigma('ZzZ', 1));
