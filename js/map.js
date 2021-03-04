import {activatePageState} from './disabled-page.js';
import {renderOfferCard} from './create-popup.js';
import {address} from './form.js';
//import {similarOffers} from './data.js';

const CENTER_LAT = 35.68950;
const CENTER_LNG = 139.69171;
const SCALE = 12;

/* global L:readonly */
const map = L.map('map-canvas')
  .on('load', () => {
    activatePageState();
    address.value = `${CENTER_LAT}, ${CENTER_LNG}`;
  })
  .setView({
    lat: CENTER_LAT,
    lng: CENTER_LNG,
  }, SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker({
  lat: CENTER_LAT,
  lng: CENTER_LNG,
}, {
  draggable: true,
  icon: mainPinIcon,
});

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const offerIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createOfferPins = ({location}) => {
  location.forEach((offers) => {
    const marker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        icon: offerIcon,
      },
    );
    marker
      .addTo(map)
      .bindPopup(
        renderOfferCard(offers), {
          keepInView: true },
      );
  });
};

export {createOfferPins}
