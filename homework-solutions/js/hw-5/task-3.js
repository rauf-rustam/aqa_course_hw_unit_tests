/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
let vowelsAndConsonantsResult = '';
const word = 'hello';
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

let vowelsCount = 0;
let consonantsCount = 0;
for (const letter in word) {
  vowelsAndConsonantsResult = VOWELS.includes(letter) ? `hello contains ${++vowelsCount} vowels and ${consonantsCount} consonants` : `hello contains ${vowelsCount} vowels and ${++consonantsCount} consonants`;
}



console.log(vowelsAndConsonantsResult);
//export { vowelsAndConsonantsResult };
