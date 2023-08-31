import "../pages/index.css";
import { cardFormData, cardForm, likeBTN, participateButton } from "../components/CardForm";
import { openPopup, closePopup} from "../components/popup";

import cardsArray from "../components/cards.json";
import Card from "../components/card.js";

const cardTemplate = document.querySelector("#card-template").content;
const eventsCardsContainer = document.querySelector(".events__cards-container");
const locationBtn = document.querySelector(".header__location-button");

const popupBurgerMenu = document.querySelector('.popup__menu-burger');
const popupChoiseCity = document.querySelector('.popup__choise-city');
const popupDonate = document.querySelector('.popup__donate-form');
const closeButton = document.querySelector(".popup__close-cardform");
const burgerMenuBtn = document.querySelector(".header__menu-burger-icon");
const btnChoiseCity = document.querySelector(".popup__burger-menu-button-location");
const btnChoiseCityBack = document.querySelector(".popup__burger-menu-button-back");
const btnDonate = document.querySelector('.btn__donate');
const closeBtnDonate = document.querySelector('.popup__close-donate');
const closeBtnTickets = document.querySelector('.popup__close-buy-ticket');
const burgerCityText = document.querySelector(".popup__burger-menu-city-name");
const headerDropdown = document.querySelector(".header__dropdown");
const headerText = document.querySelector(".header__text");
const labelCity = document.querySelectorAll(".form-city__list");
const btnSupport = document.querySelector('.btn__support');
const btnMinus = document.querySelector('.controller_el_amount-minus');
const btnPlus = document.querySelector('.controller_el_amount-plus');
const amount = document.querySelector('.controller__amount-square');
const sumTickets = document.querySelector('.popup__sum-ticket');

// открытие карты события
closeButton.addEventListener("click", () => {
  closePopup(cardForm);
});

participateButton.addEventListener("click", () => {
  likeBTN.classList.toggle("card__like_active");
});

// всплывающее окно
locationBtn.addEventListener("click", function () {
  headerDropdown.classList.toggle("header__dropdown_active");
});

burgerMenuBtn.addEventListener("click", function () {
  burgerMenuBtn.classList.toggle("header__menu-burger-icon_active");
  popupBurgerMenu.classList.toggle("popup_opened");
  if (popupChoiseCity.classList.contains("popup_opened")) {
    closePopup(popupChoiseCity);
    closePopup(popupBurgerMenu);
  }
});

btnChoiseCity.addEventListener("click", function () {
  closePopup(popupBurgerMenu);
  openPopup(popupChoiseCity);
});

btnChoiseCityBack.addEventListener("click", function () {
  closePopup(popupChoiseCity);
  openPopup(popupBurgerMenu);
});

btnSupport.addEventListener('click', function(){
  openPopup(popupDonate)
})

btnDonate.addEventListener('click', function(){
openPopup(popupDonate)
closePopup(popupBurgerMenu)
})

closeBtnDonate.addEventListener('click', function(){
closePopup(popupDonate)
})

closeBtnTickets.addEventListener('click', function(){
  closePopup(popupBuyTickets)
})

for (const cardElement of cardsArray) {
  const card = new Card(cardElement, cardTemplate, {
    zoomCard: () => {
      cardFormData(cardElement);
    },
  }).createCard();
  eventsCardsContainer.append(card);
}

const cardList = document.querySelectorAll(".card");
cardList.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (!event.target.classList.contains("card__like")) {
      openPopup(cardForm);
    }
  });
});

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

  items[0].classList.add("fest-images__image_selected");
  buttons[0].classList.add("fest-images__button_selected");
});

//изменить город
function changeCity(e) {
  if (
    (headerText.textContent = e.target
      .closest("label")
      .querySelector("span").textContent)
  );
  if (
    (burgerCityText.textContent = e.target
      .closest("label")
      .querySelector("span").textContent)
  );
}
labelCity.forEach((item) => item.addEventListener("change", changeCity));

// счетчик (покупка билетов)
btnMinus.addEventListener('click', function(){
    const result = Number(amount.textContent) - 1;
    if(result > 0){
      amount.textContent = result;
      sumTickets.textContent = 500 * result + '₽';
    }
})
btnPlus.addEventListener('click', function(){
    const result = Number(amount.textContent) + 1;
    amount.textContent = result;
    sumTickets.textContent = 500 * result + '₽';
})
