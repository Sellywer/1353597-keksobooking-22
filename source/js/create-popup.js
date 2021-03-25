const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getTypeRu = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const renderOfferCard = ({offer, author}) => {

  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__avatar').setAttribute('src', author.avatar);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').innerHTML = `${offer.price} ₽/ночь`;

  cardElement.querySelector('.popup__type').textContent = getTypeRu[offer.type];

  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const similarFeaturesList = cardElement.querySelector('.popup__features');
  if (offer.features.length > 0) {
    similarFeaturesList.innerHTML = '';

    for (let featuresList of offer.features) {
      const element = `<li class="popup__feature popup__feature--${featuresList}"></li>`;
      similarFeaturesList.insertAdjacentHTML('beforeend', element);
    }
  } else {
    similarFeaturesList.remove();
  }

  cardElement.querySelector('.popup__description').textContent = offer.description;

  const photosGallery = cardElement.querySelector('.popup__photos');
  if (offer.photos.length > 0) {
    photosGallery.innerHTML = '';

    for (let photosList of offer.photos) {
      const element = `<img src="${photosList}" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`;
      photosGallery.insertAdjacentHTML('beforeend', element);
    }
  } else {
    photosGallery.remove();
  }
  return cardElement;
};

export {renderOfferCard};
