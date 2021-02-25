const form = document.querySelector('.ad-form');

const typeOfHousing = form.querySelector('#type');
const priceOfHousing = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const address = form.querySelector('#address');
const adFormHeader = form.querySelector('.ad-form-header');
const adFormElements = form.querySelectorAll('.ad-form__element');

address.readOnly = true;

const mapFilters = document.querySelector('.map__filters');
const mapFiltersItem = mapFilters.querySelectorAll('.map__filter');
const mapFeatures = document.querySelector('.map__features');

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

const setFormInputHandlers = () => {
  priceOfHousing.addEventListener('input', onPriceInput);
  timeIn.addEventListener('change', onSelectChange);
  timeOut.addEventListener('change', onSelectChange);
  typeOfHousing.addEventListener('change', onTypeInputChange);
  form.addEventListener('submit', onFormSubmit);
};

const getAdFormDisabled = () => {
  form.classList.add('ad-form--disabled');
  adFormHeader.disabled = true;
  adFormElements.forEach(formElement => formElement.disabled = true);
};

const getAdFormActive = () => {
  form.classList.remove('ad-form--disabled');
  adFormHeader.disabled = false;
  adFormElements.forEach(formElement => formElement.disabled = false);
};

const getMapFiltersDisabled = () => {
  mapFilters.classList.add('map__filters--disabled');
  mapFiltersItem.forEach(mapFilterId => mapFilterId.disabled = true);
  mapFeatures.disabled = true;
};

const getMapFiltersActive = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersItem.forEach(mapFilterId => mapFilterId.disabled = false);
  mapFeatures.disabled = false;
};

const disabledPageState = () => {
  getAdFormDisabled();
  getMapFiltersDisabled();
  // console.log('Page is disabled');
};

const activatePageState = () => {
  getAdFormActive();
  getMapFiltersActive();
};

onTypeInputChange();
disabledPageState();

export {setFormInputHandlers, activatePageState, address}
