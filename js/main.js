/* global _:readonly */
import {setFilterChange} from './filters.js'
import {setUserFormSubmit, onSuccess} from './user-form.js';
import {createOfferPins, removeMarkers} from './map.js';
import {getData} from './api.js';

const RERENDER_DELAY = 500;

getData ((ads) => {
  createOfferPins(ads);
  setFilterChange(_.debounce(
    () => {
      removeMarkers();
      createOfferPins(ads)
    }, RERENDER_DELAY));
});

setUserFormSubmit(onSuccess);
