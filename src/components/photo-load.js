import {btnCloseImage, error, imageDisplay, addClass, removeClass} from '../components/utils.js';

// функции для работы с drag'n'drop загрузки изображений
// {activateCloseBtn, deactivateCloseBtn, fileHandler}

// ф-я показать крестик и повесить слушатель клика
export function activateCloseBtn() {
  addClass(btnCloseImage, 'input__close-btn_active');
  btnCloseImage.addEventListener('click', deactivateCloseBtn);
}

// ф-я скрыть крестик, убрать слушатель клика и очистить инпут от загруженных картинок
export function deactivateCloseBtn() {
  removeClass(btnCloseImage, 'input__close-btn_active');
  btnCloseImage.removeEventListener('click', deactivateCloseBtn);
  // и очищаем контейнер от картинок
  imageDisplay.innerHTML = '';
}

// ф-я для изменения окна загрузки изображений
export function fileHandler(file, name, type) {
  if(type.split("/")[0] !== "image") {
    error.innerText = "Загрузить можно только файлы типа 'изображение'";
    error.classList.add(validationSettings.errorClass);
    return false;
  }
  error.innerText = "";
  error.classList.remove(validationSettings.errorClass);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    // image and file name
    let imageContainer = document.createElement("figure");
    let img = document.createElement("img");
    img.src = reader.result;
    imageContainer.appendChild(img);
    imageContainer.innerHTML += `<figcaption>${name}</figcaption>`;
    imageDisplay.appendChild(imageContainer);
    activateCloseBtn();
  };
};
