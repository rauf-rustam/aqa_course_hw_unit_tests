/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/
let unique;
const arrayWithDuplicate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
let i = 0;
while (i < arrayWithDuplicate.length) {
  if (arrayWithDuplicate.indexOf(arrayWithDuplicate[i]) !== i) {
    arrayWithDuplicate.splice(i, 1);
  } else {
    i++;
  }
}
unique = [...arrayWithDuplicate];
export { unique };
