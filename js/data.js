import {getRandomNumber, getRandomFloat, getRandomArrayElement, formRandomArray} from './utils.js';

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

const COUNT_OFFERS = 10;

const AVATAR_MIN = 1;
const AVATAR_MAX = 8;

const MIN_PRICE = 1000;
const MAX_PRICE = 8000;

const MIN_ROOMS = 1;
const MAX_ROOMS = 5;

const MIN_QUESTS = 1;
const MAX_QUESTS  = 8;

const X_MIN = 35.65000;
const X_MAX = 35.70000;
const Y_MIN = 139.70000;
const Y_MAX = 139.80000;
const LOCATION_PRECISION = 5;

const createOffer = () => {

  const xRandom = getRandomFloat(X_MIN, X_MAX, LOCATION_PRECISION);
  const yRandom = getRandomFloat(Y_MIN, Y_MAX, LOCATION_PRECISION);

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomNumber(AVATAR_MIN, AVATAR_MAX) + '.png',
    },

    offer: {
      title: getRandomArrayElement(TITLE),
      address: xRandom + ', ' + yRandom,
      price: getRandomNumber(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomNumber(MIN_ROOMS, MAX_ROOMS),
      quests: getRandomNumber(MIN_QUESTS , MAX_QUESTS ),
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

export {createOffer, COUNT_OFFERS};
