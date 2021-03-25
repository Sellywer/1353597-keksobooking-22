const TitleLength = {MIN: 30, MAX: 100};
const MAX_PRICE = 1000000;
const MAX_ROOM_COUNT = 100;
const MIN_ROOM_CAPACITY = 0;

const minPrice  = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const form = document.querySelector('.ad-form');
const titleAd = form.querySelector('#title');
const typeOfHousing = form.querySelector('#type');
const priceOfHousing = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const address = form.querySelector('#address');

// Заголовок

titleAd.addEventListener('invalid', () => {
  const errorMessage = titleAd.validity.valueMissing ? 'Обязательное поле' : '';
  titleAd.setCustomValidity(errorMessage);
});

titleAd.addEventListener('input', () => {
  const valueLength = titleAd.value.length;

  if (valueLength < TitleLength.MIN) {
    titleAd.setCustomValidity('Ещё ' + (TitleLength.MIN - valueLength) + ' симв.');
  } else if (valueLength > TitleLength.MAX) {
    titleAd.setCustomValidity('Удалите лишние ' + (valueLength - TitleLength.MAX) + ' симв.');
  } else {
    titleAd.setCustomValidity('');
  }
  titleAd.reportValidity();
});

// Прайс и тип жилья

typeOfHousing.addEventListener('change', () => {
  priceOfHousing.placeholder = minPrice[typeOfHousing.value];
  priceOfHousing.min = minPrice[typeOfHousing.value];
});

priceOfHousing.addEventListener('invalid', () => {
  const errorMessage = priceOfHousing.validity.valueMissing ? 'Обязательное поле' : '';
  priceOfHousing.setCustomValidity(errorMessage);
});

const onPriceInput = (evt) => {
  if (evt.target.validity.rangeUnderflow) {
    evt.target.setCustomValidity (`Стоимость не должна быть меньше ${evt.target.min}`)
  } else if (evt.target.value > MAX_PRICE) {
    evt.target.setCustomValidity('Цена не может быть больше ' + MAX_PRICE);
  } else {
    evt.target.setCustomValidity('')
  }
  evt.target.reportValidity();
}

priceOfHousing.addEventListener('input', onPriceInput);

// Время

const onSelectChange = (evt) => {
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
}

timeIn.addEventListener('change', onSelectChange);
timeOut.addEventListener('change', onSelectChange);

// Гости и комнаты

const checkPlace = () => {
  if (roomNumber.value === MAX_ROOM_COUNT && capacity.value !== MIN_ROOM_CAPACITY) {
    capacity.setCustomValidity('Выберите вариант "Не для гостей"');
  } else if (roomNumber.value !== MAX_ROOM_COUNT && capacity.value === MIN_ROOM_CAPACITY) {
    capacity.setCustomValidity('Выберите другой вариант');
  } else if (roomNumber.value < capacity.value) {
    capacity.setCustomValidity('Выберите меньшее число гостей');
  } else {
    capacity.setCustomValidity('');
  }
};

capacity.addEventListener('change', () => {
  checkPlace();
});

roomNumber.addEventListener('change', () => {
  checkPlace();
});

// Адрес нередактируется

address.setAttribute('readonly', 'readonly');

export {form, address}
