/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

const MIN_AGE = 18;
const MAX_AGE = 60;

function parseAge(age) {
  const parsedAge = parseInt(age);
  return isNaN(parsedAge) || parsedAge <= 0 ? null : parsedAge;
}

function ageChecker(age) {
  const parsedAge = parseAge(age);
  if (parsedAge < MIN_AGE) {
    console.log(`You don't have access cause your age is ${age}. It's less than ${MIN_AGE}`);
  } else if (parsedAge >= MIN_AGE && parsedAge < MAX_AGE) {
    console.log('Welcome!');
  } else if (parsedAge >= MAX_AGE) {
    console.log('Keep calm and look Culture channel');
  } else {
    console.log('Technical work');
  }
}

const ages = ['1000', 10, 17, 18, 19, 59, 60, 61, 'qwerty'];
for (const age of ages) {
  ageChecker(age);
}
