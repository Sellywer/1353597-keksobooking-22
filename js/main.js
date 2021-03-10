import './data.js';
import {setUserFormSubmit, onSuccess} from './user-form.js';
import {createOfferPins} from './map.js';
import './disabled-page.js';
//import {createOffers} from './create-popup.js';
import {getData} from './api.js';

const COUNT_OFFERS = 10;

getData ((add) => {
  createOfferPins(add.slice(0, COUNT_OFFERS));
});

setUserFormSubmit(onSuccess);
