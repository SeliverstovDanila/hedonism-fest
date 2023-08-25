import '../pages/index.css';
// document.querySelectorAll(".fest-images__grid").forEach((carousel) => {
//   const items = carousel.querySelectorAll(".fest-images__image");
//   const buttonsHtml = Array.from(items, () => {
//     return `<span class="fest-images__button"></span>`;
//   });

//   carousel.insertAdjacentHTML(
//     "beforeend",
//     `
//           <div class="fest-images__nav">
//               ${buttonsHtml.join("")}
//           </div>
//       `
//   );

//   const buttons = carousel.querySelectorAll(".fest-images__button");

//   buttons.forEach((button, i) => {
//     button.addEventListener("click", () => {
//       // un-select all the items
//       items.forEach((item) =>
//         item.classList.remove("fest-images__image_selected")
//       );
//       buttons.forEach((button) =>
//         button.classList.remove("fest-images__button_selected")
//       );

//       items[i].classList.add("fest-images__image_selected");
//       button.classList.add("fest-images__button_selected");
//     });
//   });

//   // Select the first item on page load
//   items[0].classList.add("fest-images__image_selected");
//   buttons[0].classList.add("fest-images__button_selected");
// });



// const locationBtn = document.querySelector('.header__location-button');

// const popupBurgerMenu = document.querySelector('.popup__menu-burger');
// const popupChoiseCity = document.querySelector('.popup__choise-city')
// const burgerMenuBtn = document.querySelector('.menu-burger-icon');
// const btnChoiseCity = document.querySelector('.burger-menu__button-location')
// const btnChoiseCityBack = document.querySelector('.burger-menu__button-back')
// const burgerCityText = document.querySelector('.burger-menu__city-name')
// const headerDropdown = document.querySelector('.header__dropdown')
// const headerText = document.querySelector('.header__text')
// const labelCity = document.querySelectorAll('.form-city__list');

// //изменить город
// function changeCity(e) {
//  if(headerText.textContent = e.target.closest('label').querySelector('span').textContent);
//  if(burgerCityText.textContent = e.target.closest('label').querySelector('span').textContent);
// }
//   labelCity.forEach((item) => item.addEventListener('change', changeCity))


//  Открытие popup
function openPopup(popup, className){
    popup.classList.add(className)
}

function closePopup(popup, className){
  popup.classList.remove(className)
}

// всплывающее окно
// locationBtn.addEventListener('click',function(){
//   headerDropdown.classList.toggle('header__dropdown_active');
// })



// burgerMenuBtn.addEventListener('click', function () {
//   burgerMenuBtn.classList.toggle('menu-burger-icon_active')
//   popupBurgerMenu.classList.toggle('popup_opened')
//   if (popupChoiseCity.classList.contains('popup_opened')) {
//     closePopup(popupChoiseCity, 'popup_opened');
//     closePopup(popupBurgerMenu, 'popup_opened');
//   }
// })

// btnChoiseCity.addEventListener('click', function() {
//   closePopup(popupBurgerMenu, 'popup_opened');
//   openPopup(popupChoiseCity, 'popup_opened');
// })

// btnChoiseCityBack.addEventListener('click', function() {
//   closePopup(popupChoiseCity, 'popup_opened');
//   openPopup(popupBurgerMenu, 'popup_opened');
// })


// import cardsArray from '../components/cards.json';
// import Card from '../components/card.js';

// const cardTemplate = document.querySelector('#card-template').content;
// const eventsCardsContainer = document.querySelector('.events__cards-container');

// for (const cardElement of cardsArray) {
//   const card = new Card(cardElement, cardTemplate).createCard();
//   eventsCardsContainer.append(card);
// }


// MEMBERSHIP PAGE
const pageMembership = document.querySelector('.membership');
const btnOpenMemberForm = pageMembership.querySelector('.membership__btn');
const popupMembership = pageMembership.querySelector('.membership__popup');
// const formMembership = pageMembership.querySelector('.membership__form');
const btnCloseMemberForm = pageMembership.querySelector('.form__btn_type_close');
const titleMembership = pageMembership.querySelector('.membership__title');
const contentMembership = pageMembership.querySelector('.membership__content');

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

// вешаем слушатель на "заполнить форму"
btnOpenMemberForm.addEventListener('click', openMembershipPopup);
// вешаем слушатель на все кнопки "отмена"
btnCloseMemberForm.addEventListener('click', closeMembershipPopup);
