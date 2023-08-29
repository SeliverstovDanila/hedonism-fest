import '../pages/index.css';
import {openPopup, closePopup} from '../components/utils.js';

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
  "images": [], // input[type="file"]
  "type": '', // тип мероприятия (онлайн/оффлайн или открытое/закрытое)
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
function activateFieldset(currFieldsetList) {
  // снимаем со всех филдсетов выделение
  currFieldsetList.forEach(item => item.classList.remove('membership__fieldset_selected'));
  // добавляем текущему элементу выделение
  currFieldsetList[currentFieldsetIndex].classList.add('membership__fieldset_selected');
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
  evt.preventDefault();

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
}



// вешаем слушатель на кнопку "заполнить форму"
btnOpenMemberForm.addEventListener('click', openMembershipPopup);
// вешаем слушатель на кнопку "отмена"
btnCloseMemberForm.addEventListener('click', closeMembershipPopup);
// вешаем слушатель на кнопку "завершить"
btnSubmitMemberForm.addEventListener('click', function(evt) {
  submitMembershipPopup(evt);
});

// const fieldsetTemplate = formMembership.querySelector(`template-${name}`).content.querySelector('.membership__fieldset-container');

// ф-я создания филдсета из шаблона (name - тип шаблона, который нам нужен - food, study, party, another)
function makeFieldset(name) {
  const fieldsetTemplate = pageMembership.querySelector(`#template-${name}`).content.querySelector('.membership__fieldset-container');
  const templateCopy = fieldsetTemplate.cloneNode(true); // клонируем содержимое шаблона
  return templateCopy;
}


// карусель формы
const fieldsetList = formMembership.querySelectorAll('.membership__fieldset');
const btnLeft = document.querySelector('.membership__form-btn_type_left'); // назад
const btnRight = document.querySelector('.membership__form-btn_type_right'); // далее

let currentFieldsetIndex = 0;

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


// замена текста внутри окна загрузки фотографий
const inputTypeFile = pageMembership.querySelector('.input_type_file');
const messagePhotoLoad = pageMembership.querySelector('.input__context_type_file');

