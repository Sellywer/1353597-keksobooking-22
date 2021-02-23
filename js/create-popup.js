import {similarOffers} from './data.js'

const mapCanvas = document.querySelector('#map-canvas');

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getTypeRu = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const renderOfferCard = ({author, offer}) => {

  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('img').src = author.avatar;
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').innerHTML = offer.address;
  cardElement.querySelector('.popup__text--price').innerHTML = `${offer.price} ₽/ночь`;

  cardElement.querySelector('.popup__type').textContent = getTypeRu[offer.type];

  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const similarFeaturesList = cardElement.querySelector('.popup__features');
  similarFeaturesList.innerHTML = '';

  for (let featuresList of offer.features) {
    const element = `<li class="popup__feature popup__feature--${featuresList}"></li>`;
    similarFeaturesList.insertAdjacentHTML('beforeend', element);
  }

  cardElement.querySelector('.popup__description').textContent = offer.description;

  const photosGallery = cardElement.querySelector('.popup__photos');
  photosGallery.innerHTML = '';

  for (let photosList of offer.photos) {
    const element = `<img src="${photosList}" class="popup__photo" width="50" height="40" alt="Изображение места"></img>`;
    photosGallery.insertAdjacentHTML('beforeend', element);
  }

  return cardElement;
};

mapCanvas.appendChild(renderOfferCard(similarOffers[0]));

export {renderOfferCard};
