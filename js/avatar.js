// const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'svg'];

// const userPhotoUpload = document.querySelector('.ad-form__upload input[type=file]');
// const userPreview = document.querySelector('.ad-form-header__preview img');
// //const housingPhotoUpload = document.querySelector('.ad-form__input');
// //const housingPhotoContainer = document.querySelector('.ad-form__photo');


// userPhotoUpload.addEventListener('change', () => {
//   const file = userPhotoUpload.files[0];
//   const fileName = file.name.toLowerCase();

//   const matches = FILE_TYPES.some((it) => {
//     return fileName.endsWith(it);
//   });

//   if (matches) {
//     const reader = new FileReader();

//     reader.addEventListener('load', () => {
//       userPreview.src = reader.result;
//     });

//     reader.readAsDataURL(file);
//   }
// });
