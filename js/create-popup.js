import {similarOffers} from './data.js'

const mapCanvas = document.querySelector('#map-canvas');

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const renderOfferrCard = (offerItem) => {

  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('img').src = offerItem.author.avatar;
  cardElement.querySelector('.popup__title').textContent = offerItem.offer.title;
  cardElement.querySelector('.popup__text--address').innerHTML = offerItem.offer.address;
  cardElement.querySelector('.popup__text--price').innerHTML = `${offerItem.offer.price} ₽/ночь`;

  const getTypeRu = () => {
    switch (offerItem.offer.type) {
      case 'bungalow': return 'Бунгало';
      case 'flat': return 'Квартира';
      case 'house': return 'Дом';
      case 'palace': return 'Дворец';
    }
  };
  cardElement.querySelector('.popup__type').textContent = getTypeRu(offerItem.offer.type);

  cardElement.querySelector('.popup__text--capacity').textContent = `${offerItem.offer.rooms} комнаты для ${offerItem.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offerItem.offer.checkin}, выезд до ${offerItem.offer.checkout}`;
  const similarFeaturesList = cardElement.querySelector('.popup__features');
  const featuresList = offerItem.offer.features;
  similarFeaturesList.innerHTML = '';
  for (let i = 0; i < featuresList.length; i++) {
    const element = `<li class="popup__feature popup__feature--${featuresList[i]}"></li>`;
    similarFeaturesList.insertAdjacentHTML('beforeend', element);
  }
  cardElement.querySelector('.popup__description').textContent = offerItem.offer.description;
  const photosGallery = cardElement.querySelector('.popup__photos');
  const photosList = offerItem.offer.photos;
  photosGallery.innerHTML = '';
  for (let i = 0; i < photosList.length; i++) {
    const element = `<img src="${photosList[i]}" class="popup__photo" width="50" height="40" alt="Изображение места"></img>`;
    photosGallery.insertAdjacentHTML('beforeend', element);
  }

  return cardElement;
};

mapCanvas.appendChild(renderOfferrCard(similarOffers[0]));

export {renderOfferrCard};
