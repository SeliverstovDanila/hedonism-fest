import '../pages/index.css';
document.querySelectorAll(".fest-images__grid").forEach((carousel) => {
  const items = carousel.querySelectorAll(".fest-images__image");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="fest-images__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
          <div class="fest-images__nav">
              ${buttonsHtml.join("")}
          </div>
      `
  );

  const buttons = carousel.querySelectorAll(".fest-images__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("fest-images__image_selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("fest-images__button_selected")
      );

      items[i].classList.add("fest-images__image_selected");
      button.classList.add("fest-images__button_selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("fest-images__image_selected");
  buttons[0].classList.add("fest-images__button_selected");
});

const popupOpenedSelector = 'popup_opened';
const popupContainerSelector = 'popup__container'

const locationBtn = document.querySelector('.header__location-button');

const popupBurgerMenu = document.querySelector('.popup__menu-burger');
const popupChoiseCity = document.querySelector('.popup__choise-city')
const popupDonate = document.querySelector('.popup__donate-form');
const popupBuyTickets = document.querySelector('.popup__buy-ticket');
const burgerMenuBtn = document.querySelector('.menu-burger-icon');
const btnChoiseCity = document.querySelector('.burger-menu__button-location')
const btnChoiseCityBack = document.querySelector('.burger-menu__button-back')
const burgerCityText = document.querySelector('.burger-menu__city-name')
const headerDropdown = document.querySelector('.header__dropdown')
const headerText = document.querySelector('.header__text')
const labelCity = document.querySelectorAll('.form-city__list');
const btnDonate = document.querySelector('.btn__donate');
const btnSupport = document.querySelector('.btn__support');
const closeBtnDonate = document.querySelector('.popup__close-donate');
const closeBtnTickets = document.querySelector('.popup__close-buy-ticket');
//изменить город
function changeCity(e) {
 if(headerText.textContent = e.target.closest('label').querySelector('span').textContent);
 if(burgerCityText.textContent = e.target.closest('label').querySelector('span').textContent);
}
  labelCity.forEach((item) => item.addEventListener('change', changeCity))


//  Открытие popup
function openPopup(popup){
  popup.classList.add(popupOpenedSelector)
  popup.addEventListener('click', keyHandlerOverlay)
  document.addEventListener('keydown', keyHandlerEsc)
}

function closePopup(popup){
  popup.classList.remove(popupOpenedSelector)
  popup.removeEventListener('click', keyHandlerOverlay)
  document.removeEventListener('keydown',  keyHandlerEsc)
}

// всплывающее окно
locationBtn.addEventListener('click',function(){
headerDropdown.classList.toggle('header__dropdown_active');
})



burgerMenuBtn.addEventListener('click', function () {
burgerMenuBtn.classList.toggle('menu-burger-icon_active')
popupBurgerMenu.classList.toggle(popupOpenedSelector)
if (popupChoiseCity.classList.contains(popupOpenedSelector)) {
  closePopup(popupChoiseCity);
  closePopup(popupBurgerMenu);
}
})

btnChoiseCity.addEventListener('click', function() {
closePopup(popupBurgerMenu);
openPopup(popupChoiseCity);
})

btnChoiseCityBack.addEventListener('click', function() {
closePopup(popupChoiseCity);
openPopup(popupBurgerMenu);
})

btnDonate & btnSupport.addEventListener('click', function(){
openPopup(popupDonate)
closePopup(popupBurgerMenu)
})

closeBtnDonate.addEventListener('click', function(){
closePopup(popupDonate)
})

closeBtnTickets.addEventListener('click', function(){
  closePopup(popupBuyTickets)
})

// Закрытие по нажатию на оверлей
export function keyHandlerOverlay(evt) {
  const popupActive = document.querySelector(`.${popupOpenedSelector}`)
  if (!evt.target.closest(popupContainerSelector) && popupActive) closePopup(popupActive)
}

// Закрытие по нажатию на Esc
export function  keyHandlerEsc(evt) {
  if (evt.key === 'Escape') {
      const popupActive = document.querySelector(`.${popupOpenedSelector}`)
      popupActive && closePopup(popupActive)
  }
}


import cardsArray from '../components/cards.json';
import Card from '../components/card.js';

const cardTemplate = document.querySelector('#card-template').content;
const eventsCardsContainer = document.querySelector('.events__cards-container');

for (const cardElement of cardsArray) {
  const card = new Card(cardElement, cardTemplate).createCard();
  eventsCardsContainer.append(card);
}




let btnMinus = document.querySelector('.controller_el_amount-minus');
let btnPlus = document.querySelector('.controller_el_amount-plus');
let amount = document.querySelector('.controller__amount-square');
let sumTickets = document.querySelector('.popup__sum-ticket');

// счетчик (покупка билетов)
btnMinus.addEventListener('click', function(){
    let result = Number(amount.textContent) - 1;
    if(result > 0){
      amount.textContent = result;
      sumTickets.textContent = 500 * result + '₽';
    }
})

btnPlus.addEventListener('click', function(){
    let result = Number(amount.textContent) + 1;
    amount.textContent = result;
    sumTickets.textContent = 500 * result + '₽';
})

