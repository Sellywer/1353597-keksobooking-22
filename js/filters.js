const filter = document.querySelector('.map__filters');
const typeFilter  = filter.querySelector('#housing-type');
const priceFilter = filter.querySelector('#housing-price');
const roomsFilter = filter.querySelector('#housing-rooms');
const guestsFilter = filter.querySelector('#housing-guests');
const featuresFilter = filter.querySelector('#housing-features');

const PRICE_TYPES = {
  'LOW': 10000,
  'HIGH': 50000,
};

const getFilterByType = (type) => typeFilter.value === 'any' || type === typeFilter.value;

const getFilterByPrice = (price) => {
  switch (priceFilter.value) {
    case 'low':
      return price < PRICE_TYPES['LOW'];
    case 'middle':
      return (price >= PRICE_TYPES['LOW']) && (price <= PRICE_TYPES['HIGH']);
    case 'high':
      return price > PRICE_TYPES['HIGH'];
    default:
      return true;
  }
};

const getFilterByRooms = (rooms) => roomsFilter.value === 'any' || rooms === parseInt(roomsFilter.value, 10);

const getFilterByGuests = (guests) => (guestsFilter.value !== 'any') ? guests === parseInt(guestsFilter.value, 10) : true;


const getFilterByFeatures = (features) => {
  let result = true;

  featuresFilter.querySelectorAll('input:checked').forEach((item) => {
    if (features.indexOf(item.value) === -1) {
      result = false;
    }
  });
  return result;
}



// console.log('ok')
// let check = featuresFilter.querySelectorAll('input:checked');
// const getFilterByFeatures = (features) => {
//   let result = true;
//   check.every((features) === -1)


//   return result;
// }


const getFilters = ({offer}) => {
  return (
    getFilterByType(offer.type) &&
    getFilterByPrice(offer.price) &&
    getFilterByRooms(offer.rooms) &&
    getFilterByGuests (offer.guests) &&
    getFilterByFeatures(offer.features)
  )
}

const setFilterChange = (cb) => {
  filter.addEventListener('change', () => {
    cb();
  });
};

export {getFilters, setFilterChange}
