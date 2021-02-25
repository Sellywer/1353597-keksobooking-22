//import {activatePageState, address} from './form.js';

const TOKYO_LAT = 35.6804;
const TOKYO_LNG = 139.759;
const SCALE = 10;

/* global L:readonly */
const map = L.map('map-canvas').setView({
  lat: TOKYO_LAT,
  lng: TOKYO_LNG,
}, SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

/*
const marker = L.marker(
  {
    lat: 35.66000,
    lng: 139.78000,
  },
);

marker.addTo(map);*/
