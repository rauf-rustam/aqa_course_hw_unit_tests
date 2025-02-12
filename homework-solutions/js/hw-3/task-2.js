/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
const someInterestingNumber = 5;
console.log(
  someInterestingNumber +
    +(someInterestingNumber.toString() + someInterestingNumber.toString()) +
    +(someInterestingNumber.toString() + someInterestingNumber.toString() + someInterestingNumber.toString()),
);
