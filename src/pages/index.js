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
const popupChoiseCity = document.querySelector('.popup__choise-city');
const popupBurgerMenu = document.querySelector('.popup__menu-burger');
const burgerMenu = document.querySelector('.menu-burger-icon');
// const btnBurgerChangeCity = document.querySelector('.burger-menu__button-location')

//  Открытие popup
function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

locationBtn.addEventListener('click', function () {
  openPopup(popupChoiseCity)
})

burgerMenu.addEventListener('click', function () {
  if (burgerMenu.classList.toggle('menu-burger-icon_active')) {
    openPopup(popupBurgerMenu)
  } else {
    closePopup(popupBurgerMenu)
  }
})


// btnBurgerChangeCity.addEventListener('click', function () {
//   closePopup(burgerMenu);
//   openPopup(popupChoiseCity)
// })


import cardsArray from '../components/cards.json';
import Card from '../components/card.js';

const cardTemplate = document.querySelector('#card-template').content;
const eventsCardsContainer = document.querySelector('.events__cards-container');

for (const cardElement of cardsArray) {
  const card = new Card(cardElement, cardTemplate).createCard();
  eventsCardsContainer.append(card);
}
