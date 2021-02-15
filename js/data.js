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
const AVATAR = {MIN: 1, MAX: 8};
const PRICE = {MIN: 1000, MAX: 8000};
const RoomsQuantity = {MIN: 1, MAX: 5}
const GuestsQuantity = {MIN: 1, MAX: 8}

const LOCATION_X = {MIN: 35.65000, MAX: 35.70000};
const LOCATION_Y = {MIN: 139.70000, MAX: 139.80000};
const LOCATION_PRECISION = 5;

const createOffer = () => {

  const xRandom = getRandomFloat(LOCATION_X.MIN, LOCATION_X.MAX, LOCATION_PRECISION);
  const yRandom = getRandomFloat(LOCATION_Y.MIN, LOCATION_Y.MAX, LOCATION_PRECISION);

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomNumber(AVATAR.MIN, AVATAR.MAX) + '.png',
    },

    offer: {
      title: getRandomArrayElement(TITLE),
      address: '$xRandom, $yRandom',
      price: getRandomNumber(PRICE.MIN, PRICE.MAX),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomNumber(RoomsQuantity.MIN, RoomsQuantity.MAX),
      guests: getRandomNumber(GuestsQuantity.MIN , GuestsQuantity.MAX ),
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
