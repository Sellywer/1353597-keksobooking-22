import {form} from './form.js'

const adFormHeader = form.querySelector('.ad-form-header');
const adFormElements = form.querySelectorAll('.ad-form__element');

const mapFilters = document.querySelector('.map__filters');
const mapFiltersItem = mapFilters.querySelectorAll('.map__filter');
const mapFeatures = document.querySelector('.map__features');

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
};

const activatePageState = () => {
  getAdFormActive();
  getMapFiltersActive();
};

disabledPageState();

export {activatePageState, disabledPageState}
