import {form} from './form.js'
import { initPhotoUploaders} from './avatar.js';

const adFormHeader = form.querySelector('.ad-form-header');
const adFormElements = form.querySelectorAll('.ad-form__element');

const mapFilters = document.querySelector('.map__filters');
const mapFiltersItem = mapFilters.querySelectorAll('.map__filter');
const mapFeatures = document.querySelector('.map__features');

const setAdFormDisabled = () => {
  form.classList.add('ad-form--disabled');
  adFormHeader.disabled = true;
  adFormElements.forEach(formElement => formElement.disabled = true);
};

const setAdFormActive = () => {
  form.classList.remove('ad-form--disabled');
  adFormHeader.disabled = false;
  adFormElements.forEach(formElement => formElement.disabled = false);
};

const setMapFiltersDisabled = () => {
  mapFilters.classList.add('map__filters--disabled');
  mapFiltersItem.forEach(mapFilterId => mapFilterId.disabled = true);
  mapFeatures.disabled = true;
};

const setMapFiltersActive = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersItem.forEach(mapFilterId => mapFilterId.disabled = false);
  mapFeatures.disabled = false;
};

const disabledPageState = () => {
  setAdFormDisabled();
  setMapFiltersDisabled();
};

const activatePageState = () => {
  setAdFormActive();
  setMapFiltersActive();
  initPhotoUploaders();
};

disabledPageState();

export {activatePageState, disabledPageState, mapFilters}
