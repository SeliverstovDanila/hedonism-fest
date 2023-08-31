import '../pages/index.css';
import {pageMembership, btnOpenMemberForm, formMembership, btnCloseMemberForm,
  btnSubmitMemberForm, fieldsetList, btnLeft, btnRight, uploadButton, container,
  error, imageDisplay, containerActiveClass, addClass, removeClass} from '../components/utils.js';
import {validationSettings, enableValidation} from '../components/validate.js';
import {openMembershipPopup, closeMembershipPopup, activateFieldset, submitMembershipPopup, makeFieldset} from '../components/membership-form.js';
import {activateCloseBtn, deactivateCloseBtn, fileHandler} from '../components/photo-load.js';



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


// ФОРМА
// вешаем слушатель на кнопку "заполнить форму"
btnOpenMemberForm.addEventListener('click', openMembershipPopup);
// вешаем слушатель на кнопку "отмена"
btnCloseMemberForm.addEventListener('click', closeMembershipPopup);
// вешаем слушатель на кнопку "завершить"
btnSubmitMemberForm.addEventListener('click', function(evt) {
  submitMembershipPopup(evt);
});


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



// ЗАГРУЗКА ФОТО
// вешаем слушатель для изменения окна с изображением
uploadButton.addEventListener("change", () => {
  imageDisplay.innerHTML = "";
  Array.from(uploadButton.files).forEach((file) => {
    fileHandler(file, file.name, file.type);
  });
})

// вешаем слушатели событий для смены визуального отображения при перетаскивании
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