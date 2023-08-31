// элементы страницы membership
export const pageMembership = document.querySelector('.membership');
export const btnOpenMemberForm = pageMembership.querySelector('.membership__btn'); // заполнить форму
export const formMembership = pageMembership.querySelector('.membership__form');
export const btnCloseMemberForm = pageMembership.querySelector('.membership__form-btn_type_close'); // отмена
export const btnSubmitMemberForm = pageMembership.querySelector('.membership__form-btn_type_submit'); // завершить
export const popupMembership = pageMembership.querySelector('.membership__popup');
export const titleMembership = pageMembership.querySelector('.membership__title');
export const contentMembership = pageMembership.querySelector('.membership__content');
export const classForActiveBtn = 'membership__form-btn_active';
// карусель формы
export const fieldsetList = formMembership.querySelectorAll('.membership__fieldset');
export const btnLeft = document.querySelector('.membership__form-btn_type_left'); // назад
export const btnRight = document.querySelector('.membership__form-btn_type_right'); // далее
// loading photo
export const btnCloseImage = pageMembership.querySelector('.input__close-btn');
export let uploadButton = pageMembership.querySelector(".input_type_file");
export let container = pageMembership.querySelector(".input__wrapper_type_file");
export let error = pageMembership.querySelector(".input__error_type_images"); // input__error_type_images
export let imageDisplay = pageMembership.querySelector(".input__image-display");
export let containerActiveClass = 'input__wrapper_active';


// {cardTemplate,eventsCardsContainer,locationBtn,popupBurgerMenu,popupChoiseCity,popupDonate,closeButton,burgerMenuBtn,btnChoiseCity,btnChoiseCityBack,btnDonate,closeBtnDonate,closeBtnTickets,burgerCityText,headerDropdown,headerText,labelCity,btnSupport,btnMinus,btnPlus,amount,sumTickets,buttons,cardList,popupOpenedSelector}

// все константы:
// {pageMembership, btnOpenMemberForm, formMembership, btnCloseMemberForm, btnSubmitMemberForm, popupMembership, titleMembership, contentMembership, classForActiveBtn, fieldsetList, btnLeft, btnRight, btnCloseImage, uploadButton, container, error, imageDisplay, containerActiveClass}
// все функции:
// {open, close, addClass, removeClass}

// УНИВЕРСАЛЬНЫЕ ФУНКЦИИ

// просто открыть
export function open(popup, className){
  popup.classList.add(className)
}

// просто закрыть
export function close(popup, className){
popup.classList.remove(className)
}

// добавить элементу класс
export function addClass(element, className) {
  element.classList.add(className);
}

// убрать у элемента класс
export function removeClass(element, className) {
  element.classList.remove(className);
}
