const filter = document.querySelector('.map__filters');
const type = filter.querySelector('#housing-type');
const price = filter.querySelector('#housing-price');
const rooms = filter.querySelector('#housing-rooms');
const guests = filter.querySelector('#housing-guests');
const features = filter.querySelector('#housing-features');

const PRICE_TYPES = {
  'LOW': 10000,
  'HIGH': 50000,
};
// пробую фильтр с типой жилья деструктурировать

const getFilterByType = (offer) => type.value === 'any' || offer.type === type.value;
// или так пробовала
// const getFilterByType = (type) => type.value === 'any' || type === type.value;

const getFilterByPrice = (data) => {
  switch (price.value) {
    case 'low':
      return data.offer.price < PRICE_TYPES['LOW'];
    case 'middle':
      return (data.offer.price >= PRICE_TYPES['LOW']) && (data.offer.price <= PRICE_TYPES['HIGH']);
    case 'high':
      return data.offer.price > PRICE_TYPES['HIGH'];
    default:
      return true;
  }
};

const getFilterByRooms = (data) => rooms.value === 'any' || data.offer.rooms === parseInt(rooms.value, 10);

const getFilterByGuests = (data) => {
  return (guests.value !== 'any') ? data.offer.guests === parseInt(guests.value, 10) : true;
}

const getFilterByFeatures = (data) => {
  let result = true;

  features.querySelectorAll('input:checked').forEach((item) => {
    if (data.indexOf(item.value) === -1) {
      result = false;
    }
  });

  return result;
}

const getFilters = (data) => {
  return (
    getFilterByType(data) &&
    getFilterByPrice(data) &&
    getFilterByRooms(data) &&
    getFilterByGuests (data) &&
    getFilterByFeatures(data.offer.features)
  )
}

const setFilterChange = (cb) => {
  filter.addEventListener('change', () => {
    cb();
  });
};

export {getFilters, setFilterChange}
