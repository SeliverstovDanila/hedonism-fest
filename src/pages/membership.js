import '../pages/index.css';
import {openPopup, closePopup} from './index.js';

const pageMembership = document.querySelector('.membership');
const btnOpenMemberForm = pageMembership.querySelector('.membership__btn'); // заполнить форму
const formMembership = pageMembership.querySelector('.membership__form');
const btnCloseMemberForm = pageMembership.querySelector('.membership__form-btn_type_close'); // отмена
const btnSubmitMemberForm = pageMembership.querySelector('.membership__form-btn_type_submit'); // завершить
const popupMembership = pageMembership.querySelector('.membership__popup');
const titleMembership = pageMembership.querySelector('.membership__title');
const contentMembership = pageMembership.querySelector('.membership__content');
const classForActiveBtn = 'membership__form-btn_active';

const cityList = ['Moсква', 'Санкт-Петербург', 'Сочи', 'Калуга', 'Екатеринбург']
const formRequestInfo = {
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
  "images": []
};

// ф-я открытия формы на странице membership
function openMembershipPopup() {
  openPopup(popupMembership, 'membership__popup_opened');
  titleMembership.classList.add('membership__title_hidden');
  contentMembership.classList.add('membership__content_hidden');
}

// ф-я закрытия формы на странице membership
function closeMembershipPopup() {
  closePopup(popupMembership, 'membership__popup_opened');
  titleMembership.classList.remove('membership__title_hidden');
  contentMembership.classList.remove('membership__content_hidden');
}

// ф-я, выбирающая нужный филдсет
function activateFieldset() {
  // снимаем со всех филдсетов выделение
  fieldsetList.forEach(item => item.classList.remove('membership__fieldset_selected'));
  // добавляем текущему элементу выделение
  fieldsetList[currentFieldsetIndex].classList.add('membership__fieldset_selected');
}

  // ф-я для добавления класса элементу
  function addClass(element, className) {
    element.classList.add(className);
  }

  // ф-я для добавления класса элементу
  function removeClass(element, className) {
    element.classList.remove(className);
  }

 // ф-я сабмита формы на странице membership
 function submitMembershipPopup(evt) {
  // выполнить отправку формы
  // handleSubmit(evt);
  // пока что не работает evt.submitter (из-за того что нет полей формы или отправки формы?)
  // мб renderLoading и handleSubmit не понадобятся, просто остановить перезагрузку страницы (?)
  evt.preventDefault();
  // #todo - сохранить объект с данными формами (new FormData)
  // обновить форму reset()
  // evt.target.reset();

  // подготавливаем всё для того, чтоб при повторном открытии снова был 1й филдсет с нужными кнопками:
  // обновляем счетчик
  currentFieldsetIndex = 0;
  // активируем нужный филдсет
  activateFieldset();
  // меняем кнопки
  // "назад" -> "отмена"
  removeClass(btnLeft, classForActiveBtn);
  addClass(btnCloseMemberForm, classForActiveBtn);
  // "завершить" -> "далее"
  removeClass(btnSubmitMemberForm, classForActiveBtn);
  addClass(btnRight, classForActiveBtn);

  // закрыть попап
  closeMembershipPopup();
}



// вешаем слушатель на кнопку "заполнить форму"
btnOpenMemberForm.addEventListener('click', openMembershipPopup);
// вешаем слушатель на кнопку "отмена"
btnCloseMemberForm.addEventListener('click', closeMembershipPopup);
// вешаем слушатель на кнопку "завершить"
btnSubmitMemberForm.addEventListener('click', function(evt) {
  submitMembershipPopup(evt);
});


// карусель формы
const fieldsetList = formMembership.querySelectorAll('.membership__fieldset');
const btnLeft = document.querySelector('.membership__form-btn_type_left'); // назад
const btnRight = document.querySelector('.membership__form-btn_type_right'); // далее

let currentFieldsetIndex = 0;

//  default - при загрузке страницы выбран 1й fieldset
fieldsetList[0].classList.add('membership__fieldset_selected');

// описываем поведение при щелчке "далее"
btnRight.addEventListener('click', () => {
  if (currentFieldsetIndex == 0) { // если переход с 1 на 2 филдсет, то:
    // меняем "отмена" на "назад"
    btnCloseMemberForm.classList.remove('membership__form-btn_active');
    btnLeft.classList.add('membership__form-btn_active');
  } else if (currentFieldsetIndex == fieldsetList.length-2) { // если переход с предпоследнего на последний филдсет, то:
    // меняем "далее" на "завершить"
    btnRight.classList.remove('membership__form-btn_active');
    btnSubmitMemberForm.classList.add('membership__form-btn_active');
  }

  // при клике "далее" индекс увеличивается
  currentFieldsetIndex += 1;

  // выбираем нужный филдсет
  activateFieldset();
});


// описываем поведение при щелчке "назад"
btnLeft.addEventListener('click', () => {
  if (currentFieldsetIndex == 1) { // если переход с 2 на 1 филдсет, то:
    // меняем "назад" на "отмена"
    btnLeft.classList.remove('membership__form-btn_active');
    btnCloseMemberForm.classList.add('membership__form-btn_active');
  } else if (currentFieldsetIndex == fieldsetList.length-1) { // если переход с последний на предпоследний филдсет, то:
    // меняем "завершить" на "далее"
    btnSubmitMemberForm.classList.remove('membership__form-btn_active');
    btnRight.classList.add('membership__form-btn_active');
  }

  // при клике "назад" индекс уменьшается
  currentFieldsetIndex -= 1;

  // выбираем нужный филдсет
  activateFieldset();
});


// замена текста внутри окна загрузки фотографий
const inputTypeFile = pageMembership.querySelector('.input_type_file');
const messagePhotoLoad = pageMembership.querySelector('.input__context_type_file');

