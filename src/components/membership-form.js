import {pageMembership, formMembership, btnCloseMemberForm, btnSubmitMemberForm,
  popupMembership, titleMembership, contentMembership, classForActiveBtn, fieldsetList,
  btnLeft, btnRight, openPopup, closePopup, addClass, removeClass} from '../components/utils.js';

// функции для работы с формой страницы membership
// {openMembershipPopup, closeMembershipPopup, activateFieldset, submitMembershipPopup, makeFieldset}
export let currentFieldsetIndex = 0;

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

// ф-я создания филдсета из шаблона (name - тип шаблона, который нам нужен - food, study, party, another)
export function makeFieldset(name) {
  const fieldsetTemplate = pageMembership.querySelector(`#template-${name}`).content.querySelector('.membership__fieldset-container');
  const templateCopy = fieldsetTemplate.cloneNode(true); // клонируем содержимое шаблона
  return templateCopy;
}
