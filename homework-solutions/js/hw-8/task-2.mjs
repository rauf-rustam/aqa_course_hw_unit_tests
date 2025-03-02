/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function countOfVowels(word) {
  const vowels = word.match(/[aeiou]/gi);
  return vowels === null ? 0 : vowels.length;
}

function sortedByVowels(wordsArr) {
  return [...wordsArr].sort((a, b) => countOfVowels(a) - countOfVowels(b));
}

export { sortedByVowels };
