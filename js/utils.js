// Функция получения случайного целого числа из диапазона включительно

const getRandomNumber =  (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new Error('INVALID_ARGUMENT');
};

// Функция получения случайного числа с плавающей точкой из диапазона включительно

const getRandomFloat = (min, max, precision) => {
  if (min >= 0 && min <= max) {
    return (Math.random() * (max - min) + min).toFixed(precision);
  }
  throw new Error('INVALID_ARGUMENT');
};

// Функция получения случайного элемента из массива строк

const getRandomArrayElement = (elements) =>  elements[Math.floor(Math.random() * elements.length)];

// Функция получения массива случайной длины из массива строк

const formRandomArray = (array) => {

  array.slice().sort(() => Math.random() - 0.5);

  const arrayLength = getRandomNumber(1, array.length);

  const newArray = [];
  for (let i = 0; i < arrayLength; i++) {

    newArray.push(array[i]);
  }
  return newArray;
}

export {getRandomNumber, getRandomFloat, getRandomArrayElement, formRandomArray};
