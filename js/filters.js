const filter = document.querySelector('.map__filters');
const type = filter.querySelector('#housing-type');
const price = filter.querySelector('#housing-price');
// const rooms = filter.querySelector('#housing-rooms');
// const guests = filter.querySelector('#housing-guests');
// const features = filter.querySelector('#housing-features');

const PRICE_TYPES = {
  'LOW': 10000,
  'HIGH': 50000,
};

const getFilterByType = (data) => type.value === 'any' || data.offer.type === type.value;

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

const getFilters = (data) => {
  return (
    getFilterByType(data) &&
    getFilterByPrice(data)
  )
}

const setFilterChange = (cb) => {
  filter.addEventListener('change', () => {
    cb();
  });
};

export {getFilters, setFilterChange}
