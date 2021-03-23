import {sendData} from './api.js';
import {form, address} from './form.js';
import {mapFilters} from './disabled-page.js';
import {mainMarker, CENTER_LAT, CENTER_LNG, setAddress} from './map.js';
import { resetPreview } from './avatar.js';
import {isEscEvent} from './utils.js'

const POSITION_MESSAGE = 5000;
const mainElement = document.querySelector('main');

const setUserFormSubmit = (onSuccess) => {

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => onSuccess(),
      () => showErrorMessage('Не удалось отправить форму. Попробуйте ещё раз'),
      new FormData(evt.target),
    );
  });
};

const resetForm = function () {
  form.reset();
  resetPreview();
  setAddress();
}

const resetMapFiltersForm = function () {
  mapFilters.reset();
}


// проверка

const successTemplate = document.querySelector('#success').content;
const successDiv = successTemplate.querySelector('div');
const successElement = successDiv.cloneNode(true);

const errorTemplate = document.querySelector('#error').content;
const errorDiv = errorTemplate.querySelector('div');
const errorButton = errorDiv.querySelector('.error__button');

const errorElement = errorDiv.cloneNode(true);

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    removeMessage();
  }
};

const onWindowClick = (evt) => {
  evt.preventDefault();
  removeMessage();
  document.classList.add('hidden');
};

const removeMessage = () => {
  document.removeEventListener('click', onWindowClick);
  document.removeEventListener('keydown', onPopupEscKeydown);

  if (successElement) {
    successElement.remove();
  }
  errorButton.removeEventListener('click', onWindowClick);

  if (errorElement) {
    errorElement.remove();
  }
};

// окончание проверки

const showSuccessMessage = () => {
  successElement.style.zIndex = POSITION_MESSAGE;
  mainElement.append(successElement);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onWindowClick);
}

const showErrorMessage = () => {

  errorElement.style.zIndex = POSITION_MESSAGE;
  mainElement.append(errorElement);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onWindowClick);
  errorButton.addEventListener('click', onWindowClick);
};


const resetAddForm = () => {
  resetForm();
  resetMapFiltersForm();
  mainMarker.setLatLng({
    lat: CENTER_LAT,
    lng: CENTER_LNG,
  });
  address.value = `${CENTER_LAT}, ${CENTER_LNG}`;
};

const setClearButtonClick = function () {
  const clearButton = document.querySelector('.ad-form__reset');
  clearButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetAddForm();
  })
}

setClearButtonClick()


const onSuccess = () => {
  showSuccessMessage();
  resetAddForm();
};

export {setUserFormSubmit, onSuccess, showErrorMessage}
