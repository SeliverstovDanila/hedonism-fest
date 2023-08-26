import '../pages/index.css';
import {openPopup, closePopup} from './index.js';

const pageMembership = document.querySelector('.membership');
const btnOpenMemberForm = pageMembership.querySelector('.membership__btn');
const formMembership = pageMembership.querySelector('.membership__form');
const btnCloseMemberForm = pageMembership.querySelector('.membership__form-btn_type_close');
const popupMembership = pageMembership.querySelector('.membership__popup');
const titleMembership = pageMembership.querySelector('.membership__title');
const contentMembership = pageMembership.querySelector('.membership__content');

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

// вешаем слушатель на "заполнить форму"
btnOpenMemberForm.addEventListener('click', openMembershipPopup);
// вешаем слушатель на все кнопки "отмена"
btnCloseMemberForm.addEventListener('click', closeMembershipPopup);


// карусель формы
const fieldsetList = formMembership.querySelectorAll('.membership__fieldset');
const btnLeft = document.querySelector('.membership__form-btn_type_left'); // назад
const btnRight = document.querySelector('.membership__form-btn_type_right'); // далее

let currenFieldsetIndex = 0;

//  default - при загрузке страницы выбран 1й fieldset
fieldsetList[0].classList.add('membership__fieldset_selected');

// описываем поведение при щелчке "назад"
btnLeft.addEventListener('click', () => {
  // снимаем со всех филдсетов выделение
  fieldsetList.forEach(item => item.classList.remove('membership__fieldset_selected'));

  // при клике "назад" индекс уменьшается
  currenFieldsetIndex -= 1;

  // добавляем текущему элементу выделение
  fieldsetList[currenFieldsetIndex].classList.add('membership__fieldset_selected');
});

// описываем поведение при щелчке "далее"
btnRight.addEventListener('click', () => {
  // снимаем со всех филдсетов выделение
  fieldsetList.forEach(item => item.classList.remove('membership__fieldset_selected'));

  // при клике "далее" индекс увеличивается
  currenFieldsetIndex += 1;

  // добавляем текущему элементу выделение
  fieldsetList[currenFieldsetIndex].classList.add('membership__fieldset_selected');
});
