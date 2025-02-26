/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  const resultArray = [];
  for (let array of arrays) {
    resultArray.push(...array);
  }
  return resultArray;
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  // Ваш код
  let newStr = [];
  newStr = sentence.split(' ');
  newStr[0] = newStr[0].toLowerCase();
  for (let i = 1; i < newStr.length; i++) {
    newStr[i] = newStr[i].replace(/\b\w/g, (char) => char.toUpperCase());
  }
  return newStr.join('_');
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
    первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }else{
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(45));
export { mergeArrays, fibonacci, devideBy };
