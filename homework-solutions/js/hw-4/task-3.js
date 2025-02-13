/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

const MIN_AGE = 18;
const MAX_AGE = 60;


function ageChecker(age) {
  if (parseInt(age) < MIN_AGE) {
    console.log(`You don't have access cause your age is ${age}. It's less than ${MIN_AGE}`);
  } else if (parseInt(age) >= MIN_AGE && parseInt(age) < MAX_AGE) {
    console.log('Welcome!');
  } else if (parseInt(age) >= MAX_AGE) {
    console.log('Keep calm and look Culture channel');
  } else {
    console.log('Technical work');
  }
}

const ages = ['tretertet', 10, 17, 18, 19, 59, 60, 61, 'qwerty'];
for (const age of ages) {
  ageChecker(age);
}
