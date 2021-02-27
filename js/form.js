const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
//const MAX_PRICE = 1000000;

const form = document.querySelector('.ad-form');

const typeOfHousing = form.querySelector('#type');
const priceOfHousing = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const address = form.querySelector('#address');

// новое
//const fieldsetsAddForm = form.querySelectorAll('fieldset'); вроде не нужно
const titleAd = form.querySelector('#title');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');

//address.readOnly = true;

const minPrice  = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

priceOfHousing.addEventListener('invalid', () => {
  if (priceOfHousing.validity.valueMissing) {
    priceOfHousing.setCustomValidity('Обязательное поле');
  } else {
    priceOfHousing.setCustomValidity('');
  }
});

// новое
titleAd.addEventListener('invalid', () => {
  if (titleAd.validity.valueMissing) {
    titleAd.setCustomValidity('Обязательное поле');
  } else {
    titleAd.setCustomValidity('');
  }
});

titleAd.addEventListener('input', () => {
  const valueLength = titleAd.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleAd.setCustomValidity('Еще '+ (MIN_TITLE_LENGTH - titleAd.length) +' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleAd.setCustomValidity('Удалите лишние ' + (titleAd.length - MAX_TITLE_LENGTH) +' симв.');
  } else {
    titleAd.setCustomValidity('');
  }

  titleAd.reportValidity();
});

const onPriceInput = (evt) => {
  if (evt.target.validity.rangeUnderflow) {
    evt.target.setCustomValidity (`Стоимость не должна быть меньше ${evt.target.min}`)
  } else {
    evt.target.setCustomValidity('')
  }
  evt.target.reportValidity();

  // if (evt.target.value > MAX_PRICE) {
  //   evt.target.setCustomValidity('Цена не может быть больше ' + MAX_PRICE);
  // } else {
  //   evt.target.setCustomValidity('');
  // }
}

const onSelectChange = (evt) => {
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
}

const onTypeInputChange = () => {
  priceOfHousing.placeholder = minPrice[typeOfHousing.value];
  priceOfHousing.min = minPrice[typeOfHousing.value];
};

const checkPlace = () => {
  if (roomNumber.value === '100' && capacity.value !== '0') {
    capacity.setCustomValidity('Выберите вариант "Не для гостей"');
  } else if (roomNumber.value !== '100' && capacity.value === '0') {
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

const onFormSubmit = (evt) => {
  evt.preventDefault();
};

//const setFormInputHandlers = () => {
priceOfHousing.addEventListener('input', onPriceInput);
timeIn.addEventListener('change', onSelectChange);
timeOut.addEventListener('change', onSelectChange);
typeOfHousing.addEventListener('change', onTypeInputChange);
form.addEventListener('submit', onFormSubmit);
//};

onTypeInputChange();



//setFormInputHandlers,
export {form, address}
