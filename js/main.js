/* global _:readonly */
import {setFilterChange} from './filters.js'
import {setUserFormSubmit, onSuccess} from './user-form.js';
import {createOfferPins} from './map.js';
import './disabled-page.js';
import {getData} from './api.js';

//const COUNT_OFFERS = 5;
const RERENDER_DELAY = 500;

getData ((ads) => {
  createOfferPins(ads);
  setFilterChange(_.debounce(
    () => createOfferPins(ads), RERENDER_DELAY));
});

setUserFormSubmit(onSuccess);
