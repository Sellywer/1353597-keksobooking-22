const typeOfHousing = document.querySelector('#type');
const priceOfHousing = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

typeOfHousing.addEventListener('change', () => {
  let placeholder;

  switch (typeOfHousing.value) {
    case 'bungalow':
      placeholder = '0';
      break
    case 'flat':
      placeholder = '1000';
      break
    case 'house':
      placeholder = '5000';
      break
    case 'palace':
      placeholder = '10000';
      break
  }
  priceOfHousing.placeholder = placeholder;
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});
