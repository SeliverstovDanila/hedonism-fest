import '../pages/index.css';
import {openPopup, closePopup} from '../components/utils.js';
import {validationSettings, enableValidation} from '../components/validate.js';

export const pageMembership = document.querySelector('.membership');
export const btnOpenMemberForm = pageMembership.querySelector('.membership__btn'); // заполнить форму
export const formMembership = pageMembership.querySelector('.membership__form');
export const btnCloseMemberForm = pageMembership.querySelector('.membership__form-btn_type_close'); // отмена
export const btnSubmitMemberForm = pageMembership.querySelector('.membership__form-btn_type_submit'); // завершить
export const popupMembership = pageMembership.querySelector('.membership__popup');
export const titleMembership = pageMembership.querySelector('.membership__title');
export const contentMembership = pageMembership.querySelector('.membership__content');
export const classForActiveBtn = 'membership__form-btn_active';

// #todo - (?) реализовать заполнение списка в форме путем подтягивания городов из массива:
export const cityList = ['Moсква', 'Санкт-Петербург', 'Сочи', 'Калуга', 'Екатеринбург'];

// какие значения могут быть в форме:
export const formRequestInfo = {
  "category": '', // выбранная категория 1го филдсета
  "city": '', // город
  "full-name": '', // контактное лицо
  "adress": [], // адрес заведения
  "organizer-phone": '', // телефон для связи с организатором
  "date": '', // дата проведения
  "place-name": '', // название заведения
  "place-hours": '', // часы работы заведения
  "place-phone": '', // номер телефона заведения
  "about": '', // описание
  "about_menu": '', // описание (меню)
  "event-title": '', // название мероприятия
  "event-hours": '', // время проведения
  "event-place": '', // адрес проведения
  "reserve-phone": '', // номер телефона для бронирования
  "price": '', // стоимость участия
  "website": '', // ссылка на сайт
  "social-network-list": [], // ссылки на соцсети
  "images": [], // input[type="file"]
  "type": '', // тип мероприятия (онлайн/оффлайн или открытое/закрытое)
};

// ф-я открытия формы на странице membership
export function openMembershipPopup() {
  openPopup(popupMembership, 'membership__popup_opened');
  titleMembership.classList.add('membership__title_hidden');
  contentMembership.classList.add('membership__content_hidden');
}

// ф-я закрытия формы на странице membership
export function closeMembershipPopup() {
  closePopup(popupMembership, 'membership__popup_opened');
  titleMembership.classList.remove('membership__title_hidden');
  contentMembership.classList.remove('membership__content_hidden');
}

// ф-я, выбирающая нужный филдсет
export function activateFieldset(currFieldsetList) {
  // снимаем со всех филдсетов выделение
  currFieldsetList.forEach(item => item.classList.remove('membership__fieldset_selected'));
  // добавляем текущему элементу выделение
  currFieldsetList[currentFieldsetIndex].classList.add('membership__fieldset_selected');
}

// ф-я для добавления класса элементу
export function addClass(element, className) {
  element.classList.add(className);
}

// ф-я для добавления класса элементу
export function removeClass(element, className) {
  element.classList.remove(className);
}

// ф-я сабмита формы на странице membership
export function submitMembershipPopup(evt) {
  evt.preventDefault();

  // формируем объект с данными заполненной формы
  const formData = new FormData(formMembership);
  // выводим данные заполненной формы (в реальности тут должен быть fetch-запрос отправки данных)
  for (let [key, value] of formData) {
    console.log(`${key} - ${value}`)
  }

  // очищаем форму перед закрытием
  formMembership.reset();

  // подготавливаем всё для того, чтоб при повторном открытии снова был 1й филдсет с нужными кнопками:
  // обновляем счетчик
  currentFieldsetIndex = 0;
  // активируем 1й филдсет
  activateFieldset(fieldsetList);
  // меняем кнопки
  // "назад" -> "отмена"
  removeClass(btnLeft, classForActiveBtn);
  addClass(btnCloseMemberForm, classForActiveBtn);
  // "завершить" -> "далее"
  removeClass(btnSubmitMemberForm, classForActiveBtn);
  addClass(btnRight, classForActiveBtn);

  // закрыть попап
  closeMembershipPopup();

  // перенаправляем на страницу "спасибо за заявку"
  window.location.href = 'application.html'
}



// вешаем слушатель на кнопку "заполнить форму"
btnOpenMemberForm.addEventListener('click', openMembershipPopup);
// вешаем слушатель на кнопку "отмена"
btnCloseMemberForm.addEventListener('click', closeMembershipPopup);
// вешаем слушатель на кнопку "завершить"
btnSubmitMemberForm.addEventListener('click', function(evt) {
  submitMembershipPopup(evt);
});

// ф-я создания филдсета из шаблона (name - тип шаблона, который нам нужен - food, study, party, another)
export function makeFieldset(name) {
  const fieldsetTemplate = pageMembership.querySelector(`#template-${name}`).content.querySelector('.membership__fieldset-container');
  const templateCopy = fieldsetTemplate.cloneNode(true); // клонируем содержимое шаблона
  return templateCopy;
}


// карусель формы
export const fieldsetList = formMembership.querySelectorAll('.membership__fieldset');
export const btnLeft = document.querySelector('.membership__form-btn_type_left'); // назад
export const btnRight = document.querySelector('.membership__form-btn_type_right'); // далее

export let currentFieldsetIndex = 0;

//  default - при загрузке страницы выбран 1й fieldset
fieldsetList[0].classList.add('membership__fieldset_selected');

// описываем поведение при щелчке "далее"
btnRight.addEventListener('click', () => {
  let currentFieldsetList = fieldsetList;
  if (currentFieldsetIndex == 0) { // если переход с 1 на 2 филдсет, то:
    const choice = formMembership.querySelector('.membership__radio-input:checked'); // radio-input, который выбрал пользователь
    const containerName = choice.id;
    const currentContainer = formMembership.querySelector('.membership__fieldset-container');

    // если текущие филдсеты НЕ совпадают с выбором пользователя, то:
    if (!currentContainer.classList.contains(`membership__fieldset-container_type_${containerName}`)) {
      console.log(containerName);
      // клонируем нужный шаблон
      const newFieldset = makeFieldset(containerName);
      // и заменяем текущие филдсеты на клонированный шаблон
      currentContainer.replaceWith(newFieldset);
      // (в ином случае - оставляем текущий контейнер с филдсетами)
    }

    // в любом случае:
    // проверяем получившуюся форму на валидность
    enableValidation(validationSettings, pageMembership);
    // меняем "отмена" на "назад"
    btnCloseMemberForm.classList.remove('membership__form-btn_active');
    btnLeft.classList.add('membership__form-btn_active');
  } else if (currentFieldsetIndex == fieldsetList.length-2) { // если переход с предпоследнего на последний филдсет, то:
    // меняем "далее" на "завершить"
    btnRight.classList.remove('membership__form-btn_active');
    btnSubmitMemberForm.classList.add('membership__form-btn_active');
  }
  // обновляем элемент с филдсетами, так как они могли поменяться
  currentFieldsetList = formMembership.querySelectorAll('.membership__fieldset');

  // при клике "далее" индекс увеличивается
  currentFieldsetIndex += 1;

  // выбираем нужный филдсет
  activateFieldset(currentFieldsetList);
});


// описываем поведение при щелчке "назад"
btnLeft.addEventListener('click', () => {
  let currentFieldsetList = fieldsetList;
  if (currentFieldsetIndex == 1) { // если переход с 2 на 1 филдсет, то:
    // меняем "назад" на "отмена"
    btnLeft.classList.remove('membership__form-btn_active');
    btnCloseMemberForm.classList.add('membership__form-btn_active');
  } else if (currentFieldsetIndex == fieldsetList.length-1) { // если переход с последний на предпоследний филдсет, то:
    // меняем "завершить" на "далее"
    btnSubmitMemberForm.classList.remove('membership__form-btn_active');
    btnRight.classList.add('membership__form-btn_active');
  }
  // обновляем элемент с филдсетами, так как они могли поменяться
  currentFieldsetList = formMembership.querySelectorAll('.membership__fieldset');

  // при клике "назад" индекс уменьшается
  currentFieldsetIndex -= 1;

  // выбираем нужный филдсет
  activateFieldset(currentFieldsetList);
});


// #todo - (сделать) замена текста внутри окна загрузки фотографий
// const inputTypeFile = pageMembership.querySelector('.input_type_file');
// const messagePhotoLoad = pageMembership.querySelector('.input__context_type_file');

// LOADING PHOTO
// import {uploadButton, chosenImage, fileName, container, error, imageDisplay, fileHandler} from '../components/photo-load.js';
export const btnCloseImage = pageMembership.querySelector('.input__close-btn');

export function activateCloseBtn() {
  addClass(btnCloseImage, 'input__close-btn_active');
  btnCloseImage.addEventListener('click', deactivateCloseBtn);
}

export function deactivateCloseBtn() {
  removeClass(btnCloseImage, 'input__close-btn_active');
  btnCloseImage.removeEventListener('click', deactivateCloseBtn);
  // и очищаем контейнер от картинок
  imageDisplay.innerHTML = '';
}


export let uploadButton = pageMembership.querySelector(".input_type_file");
export let container = pageMembership.querySelector(".input__wrapper_type_file");
export let error = pageMembership.querySelector(".input__error_type_images"); // input__error_type_images
export let imageDisplay = pageMembership.querySelector(".input__image-display");
export let containerActiveClass = 'input__wrapper_active';

export const fileHandler = (file, name, type) => {
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



uploadButton.addEventListener("change", () => {
  imageDisplay.innerHTML = "";
  Array.from(uploadButton.files).forEach((file) => {
    fileHandler(file, file.name, file.type);
  });
})

// смена визуального отображения при перетаскивании
container.addEventListener(
  "dragenter",
  (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    container.classList.add(containerActiveClass);
},
false
);

container.addEventListener(
  "dragleave",
  (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    container.classList.remove(containerActiveClass);
},
false
);

container.addEventListener(
  "dragover",
  (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    container.classList.add(containerActiveClass);
},
false
);

// перетаскивание внутрь области (вместо открытия в отдельном окне)
container.addEventListener(
  "drop",
  (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    container.classList.remove(containerActiveClass);
    let draggedData = evt.dataTransfer;
    let files = draggedData.files;
    imageDisplay.innerHTML = "";
    Array.from(files).forEach((file) => {
      fileHandler(file, file.name, file.type);
    })
},
false
);

window.onload = () => {
  error.innerText = "";
}

