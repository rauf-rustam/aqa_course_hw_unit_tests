import { forEach } from '../hw-8/task-1';

/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
let vowelsAndConsonantsResult = '';
const word = 'hello';
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const CONSONANTS = [
  "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n",
  "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"
];

let vowelsCount = 0;
let consonantsCount = 0;

word.split('').forEach((letter) => {
  CONSONANTS.includes(letter) ? consonantsCount++ : VOWELS.includes(letter) ? vowelsCount++ :null;
  vowelsAndConsonantsResult = `hello contains ${vowelsCount} vowels and ${consonantsCount} consonants`
});
export { vowelsAndConsonantsResult };
