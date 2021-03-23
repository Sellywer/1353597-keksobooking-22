/* global _:readonly */
import {setFilterChange} from './filters.js'
import {setUserFormSubmit, onSuccess} from './user-form.js';
import {createOfferPins, removeMarkers} from './map.js';
import {getData} from './api.js';
import {setMapFiltersActive} from './disabled-page.js';

const RERENDER_DELAY = 500;

getData ((ads) => {
  createOfferPins(ads);
  setMapFiltersActive();
  setFilterChange(_.debounce(
    () => {
      removeMarkers();
      createOfferPins(ads)
    }, RERENDER_DELAY));
});

setUserFormSubmit(onSuccess);
