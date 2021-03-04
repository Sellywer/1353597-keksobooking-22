import './data.js';
//import './create-popup.js';
import './form.js';
import './map.js';
import './disabled-page.js';
import {createOffers} from './create-popup.js';

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((add) => {
    createOffers(add);
  });
