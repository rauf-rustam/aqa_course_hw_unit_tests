/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

import { fibonacci } from './task-1.mjs';

function isPalindrom(word) {
  // Ваш код
  let palindrome = false;
  if (typeof word !== 'string') {
    return false;
  } else {
    let reversWord = word.split('').reverse().join('').toLowerCase();
    return reversWord === word.toLowerCase() && typeof word === 'string' ? true : false;
  }
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  // Ваш код
  if (typeof sentence !== 'string' || sentence.length === 0) {
    return [];
  } else {
    let words = sentence.split(' ');
    let maxLenght = 0;
    let longestWord = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLenght) {
        maxLenght = words[i].length;
        longestWord = [words[i]];
      } else if (words[i].length === maxLenght) {
        longestWord.push(words[i]);
      }
    }
    return longestWord;
  }
}

export { isPalindrom, findLongestWords };
