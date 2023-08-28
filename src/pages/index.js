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



const locationBtn = document.querySelector('.header__location-button');

const popupBurgerMenu = document.querySelector('.popup__menu-burger');
const popupChoiseCity = document.querySelector('.popup__choise-city')
const popupDonate = document.querySelector('.popup__donate-form');
const burgerMenuBtn = document.querySelector('.menu-burger-icon');
const btnChoiseCity = document.querySelector('.burger-menu__button-location')
const btnChoiseCityBack = document.querySelector('.burger-menu__button-back')
const burgerCityText = document.querySelector('.burger-menu__city-name')
const headerDropdown = document.querySelector('.header__dropdown')
const headerText = document.querySelector('.header__text')
const labelCity = document.querySelectorAll('.form-city__list');
const btnDonate = document.querySelector('.btn__donate');
const closeBtnDonate = document.querySelector('.popup__close-donate');

//изменить город
function changeCity(e) {
 if(headerText.textContent = e.target.closest('label').querySelector('span').textContent);
 if(burgerCityText.textContent = e.target.closest('label').querySelector('span').textContent);
}
  labelCity.forEach((item) => item.addEventListener('change', changeCity))


//  Открытие popup
function openPopup(popup){
    popup.classList.add('popup_opened')
}

function closePopup(popup){
  popup.classList.remove('popup_opened')
}

// всплывающее окно
locationBtn.addEventListener('click',function(){
  headerDropdown.classList.toggle('header__dropdown_active');
})



burgerMenuBtn.addEventListener('click', function () {
  burgerMenuBtn.classList.toggle('menu-burger-icon_active')
  popupBurgerMenu.classList.toggle('popup_opened')
  if (popupChoiseCity.classList.contains('popup_opened')) {
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

btnDonate.addEventListener('click', function(){
  openPopup(popupDonate)
  closePopup(popupBurgerMenu)
})

closeBtnDonate.addEventListener('click', function(){
  closePopup(popupDonate)
})


import cardsArray from '../components/cards.json';
import Card from '../components/card.js';

const cardTemplate = document.querySelector('#card-template').content;
const eventsCardsContainer = document.querySelector('.events__cards-container');

for (const cardElement of cardsArray) {
  const card = new Card(cardElement, cardTemplate).createCard();
  eventsCardsContainer.append(card);
}



