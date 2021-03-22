const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const PREVIEW_SIZE = 70;
const DEFAULT_AVATAR_SRC = 'img/muffin-grey.svg';

const userUploader = document.querySelector('.ad-form__field input[type=file]');
const userPreview = document.querySelector('.ad-form-header__preview img');

const photoContainer = document.querySelector('.ad-form__photo');

const photoUploader = document.querySelector('.ad-form__upload input[type=file]');
const photoPreview = document.createElement('img');

const setPreviewFiles = (selectedFile, preview) => {
  return (evt) => {
    evt.preventDefault();
    const file = selectedFile.files[0];
    const fileName = file.name.toLowerCase();
    const photoFile = FILE_TYPES.some((fileType) => {
      return fileName.endsWith(fileType);
    });
    if (photoFile) {
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
  photoUploader.addEventListener('change', setPreviewFiles(photoUploader, photoPreview));
  photoPreview.width = PREVIEW_SIZE;
  photoPreview.height = PREVIEW_SIZE;
  photoContainer.append(photoPreview);
};

const resetPreview = () => {
  userPreview.src = DEFAULT_AVATAR_SRC;
  photoPreview.removeAttribute('src');
};

export { initPhotoUploaders, resetPreview };
