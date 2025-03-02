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

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function sortedByVowels(wordsArr) {
  function countOfVowels(word) {
    let consonantsCount = 0;
    word.split('').forEach((letter) => {
      VOWELS.includes(letter) ? consonantsCount++ : null;
    });
    return consonantsCount;
  }

  return wordsArr.sort((a, b) => countOfVowels(a) - countOfVowels(b));
}

export { sortedByVowels };
