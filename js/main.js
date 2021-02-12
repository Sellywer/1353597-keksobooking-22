import {createOffer, COUNT_OFFERS} from './data'

const similarOffers = new Array(COUNT_OFFERS).fill(null).map(() => createOffer());

similarOffers;
