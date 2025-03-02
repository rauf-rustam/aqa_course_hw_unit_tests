/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  // Ваш код
  let sum = 0;
  const digitsArray = number.toString().split('');
  for (let el of digitsArray) {
    sum += parseInt(el);
  }
  if (sum >= 10) {
    return digitalRoot(sum);
  }
  return sum;
}

export { digitalRoot };
