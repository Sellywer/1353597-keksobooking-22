import {sendData} from './api.js';
import {form, address} from './form.js';
import {mapFilters} from './disabled-page.js';
import {mainMarker, CENTER_LAT, CENTER_LNG, setAddress} from './map.js';
import { resetPreview } from './avatar.js';

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

const showSuccessMessage = function () {
  const successTepmplate = document.querySelector('#success').content;
  const successDiv = successTepmplate.querySelector('div');
  const successElement = successDiv.cloneNode(true);
  successElement.style.zIndex = '5000';
  const mainElement = document.querySelector('main');
  mainElement.append(successElement);

  const onWindowClick = () => {
    successElement.classList.add('hidden');
    window.removeEventListener('click', onWindowClick);
  };
  const onWindowKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      successElement.classList.add('hidden');
      window.removeEventListener('keydown', onWindowKeyDown);
    }
  }

  window.addEventListener('click', onWindowClick);
  window.addEventListener('keydown', onWindowKeyDown);
}

const showErrorMessage = function () {
  const errorTepmplate = document.querySelector('#error').content;
  const errorDiv = errorTepmplate.querySelector('div');
  const errorButton = errorDiv.querySelector('.error__button');

  const errorElement = errorDiv.cloneNode(true);
  errorElement.style.zIndex = '5000';
  const mainElement = document.querySelector('main');
  mainElement.append(errorElement);

  const onWindowClick = () => {
    errorElement.classList.add('hidden');
    window.removeEventListener('click', onWindowClick)
  }
  const onWindowKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      errorElement.classList.add('hidden');
      window.removeEventListener('keydown', onWindowKeyDown);
    }
  }
  const onButtonClick = () => {
    errorElement.classList.add('hidden');
    errorButton.removeEventListener('click', onButtonClick);
  };

  window.addEventListener('click', onWindowClick);
  window.addEventListener('keydown', onWindowKeyDown);
  errorButton.addEventListener('click', onButtonClick)
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
