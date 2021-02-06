'use strict';

const TITLE = [
  'Уютное место для Вашего отдыха',
  'Уютно и недорого',
  'Не сдется для веченинок',
  'Отпразнуйте свой день рождения весело',
  'Идеальное место для романтической встречи',
  'Отовись от шума города',
  'Ждем Вас, у нас уютно',
  'Приглашаем остановиться у нас',
  'Отдых и комфорт',
  'Отдыхайте комфортно',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalo',
];

const CHECKIN__CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DISCRIPTION = [
  'Предоставляется проживание от 3-х ночей, совсем недалеко от центра',
  'Уютные и комфортные апартаменты, прекрасно подойдут для незабываемого отдыха всей семьей',
  'Включен комплесный завтра и обед',
  'Обязательное уловия - БЕЗ питомцев',
  'Уютное место для развлечений, отдыха и работы',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

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

const getRandomArrayElement = (elements) => {
  return elements[Math.floor(Math.random() * elements.length)];
};

// Функция получения массива случайной длины из массива строк

const formRandomArray = (array) => {

  array.slice();

  array.sort(() => Math.random() - 0.5);

  const arrayLength = getRandomNumber(1, array.length);

  const newArray = [];
  for (let i = 0; i < arrayLength; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

const createOffer = () => {

  const xRandom = getRandomFloat(35.65000, 35.70000, 5);
  const yRandom = getRandomFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomNumber(1, 8) + '.png',
    },

    offer: {
      title: getRandomArrayElement(TITLE),
      adress: xRandom + ', ' + yRandom,
      price: getRandomNumber(1000, 8000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomNumber(1, 5),
      quests: getRandomNumber(1, 8),
      checkin:  getRandomArrayElement(CHECKIN__CHECKOUT),
      checkout: getRandomArrayElement(CHECKIN__CHECKOUT),
      features: formRandomArray(FEATURES),
      discription: getRandomArrayElement(DISCRIPTION),
      photos: formRandomArray(PHOTOS),
    },

    location: {
      x: xRandom,
      y: yRandom,
    },
  };
};

const similarOffers = new Array(10).fill(null).map(() => createOffer());

similarOffers;
