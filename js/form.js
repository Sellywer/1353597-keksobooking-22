const form = document.querySelector('.ad-form');
const typeOfHousing = form.querySelector('#type');
const priceOfHousing = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

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

const onPriceInput = (evt) => {
  if (evt.target.validity.rangeUnderflow) {
    evt.target.setCustomValidity (`Стоимость не должна быть меньше ${evt.target.min}`)
  } else {
    evt.target.setCustomValidity('')
  }
  evt.target.reportValidity();
}

const onSelectChange = (evt) => {
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
}

const onTypeInputChange = () => {
  priceOfHousing.placeholder = minPrice[typeOfHousing.value];
  priceOfHousing.min = minPrice[typeOfHousing.value];
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
};

priceOfHousing.addEventListener('input', onPriceInput);
timeIn.addEventListener('change', onSelectChange);
timeOut.addEventListener('change', onSelectChange);
typeOfHousing.addEventListener('change', onTypeInputChange);
form.addEventListener('submit', onFormSubmit);

onTypeInputChange();
