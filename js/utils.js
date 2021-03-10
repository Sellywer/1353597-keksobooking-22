const ALERT_SHOW_TIME = 5000;

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

const showAlert = (message='Не удалось загрузить данные') => {

  const alertContainer = document.createElement('div');
  alertContainer.style.display = 'block';
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

export {getRandomNumber, getRandomFloat, getRandomArrayElement, formRandomArray,
  showAlert, isEscEvent, isEnterEvent};
