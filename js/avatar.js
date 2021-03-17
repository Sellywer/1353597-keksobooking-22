const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const PREVIEW_SIZE = 70;
const DEFAULT_AVATAR_SRC = 'img/muffin-grey.svg';
const DEFAULT_PHOTO_SRC = 'img/no-image.svg';

const userUploader = document.querySelector('.ad-form__field input[type=file]');
const userPreview = document.querySelector('.ad-form-header__preview img');

const photoContainer = document.querySelector('.ad-form__photo');

const houstingUploader = document.querySelector('.ad-form__upload input[type=file]');
const houstingPreview = document.createElement('img');

const setPreviewFiles = (selectedFile, preview) => {
  return (evt) => {
    evt.preventDefault();
    const file = selectedFile.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((fileType) => {
      return fileName.endsWith(fileType);
    });
    if (matches) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        preview.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  };
};

const initPhotoUploaders = () => {
  userUploader.addEventListener('change', setPreviewFiles(userUploader, userPreview));
  houstingUploader.addEventListener('change', setPreviewFiles(houstingUploader, houstingPreview));
  houstingPreview.width = PREVIEW_SIZE;
  houstingPreview.height = PREVIEW_SIZE;
  photoContainer.append(houstingPreview);
};

const resetPreview = () => {
  userPreview.src = DEFAULT_AVATAR_SRC;
  houstingPreview.src = DEFAULT_PHOTO_SRC;
};

export { initPhotoUploaders, resetPreview };
