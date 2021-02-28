const TITLE_LENGTH = {MIN: 1, MAX: 5}
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
  const errorMessage = priceOfHousing.validity.valueMissing ? 'Обязательное поле' : '';
  priceOfHousing.setCustomValidity(errorMessage);
});

titleAd.addEventListener('invalid', () => {
  const errorMessage = titleAd.validity.valueMissing ? 'Обязательное поле' : '';
  titleAd.setCustomValidity(errorMessage);
});

titleAd.addEventListener('input', () => {
  const valueLength = titleAd.value.length;

  if (valueLength < TITLE_LENGTH.MIN) {
    titleAd.setCustomValidity('Еще '+ (TITLE_LENGTH.MIN - titleAd.length) +' симв.');
  } else if (valueLength > TITLE_LENGTH.MAX) {
    titleAd.setCustomValidity('Удалите лишние ' + (titleAd.length - TITLE_LENGTH.MAX) +' симв.');
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
