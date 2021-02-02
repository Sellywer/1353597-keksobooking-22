'use strict';

// Функция, возвращающая случайное целое положительное число из переданного диапазона включительно
const getRandomNumber =  (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  // Ставим условие, что min положительное число, включая ноль, а также, что min всегда  либо больше, либо равен max.
  if (min >= 0 && min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // eslint-disable-next-line no-undef
  throw new Error(INVALID_ARGUMENT);
};

getRandomNumber(1, 9);
// Источник: https://developer.mozilla.org/


// Функция, возвращающая случайное положительное число с заданным количеством цифр после запятой из переданного диапазона включительно
const getRandomArbitrary = (min, max, digits) => {
  // Ставим условие, что min положительное число, включая ноль, а также, что min всегда  либо больше, либо равен max.
  if (min >= 0 && min <= max) {
  // метод toFixed оставляет у полученного случайного числа заданное количество цифр после запятой
    return (Math.random() * (max - min) + min).toFixed(digits);
  }
  // eslint-disable-next-line no-undef
  throw new Error(INVALID_ARGUMENT);
};

getRandomArbitrary(1.1, 6.4, 2);
// Источник: https://developer.mozilla.org/
