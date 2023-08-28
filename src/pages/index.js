import "../pages/index.css";
import { cardFormData, cardForm, likeBTN, participateButton } from "../components/CardForm";
import { openPopup, closePopup } from "../components/popup";

import cardsArray from "../components/cards.json";
import Card from "../components/card.js";
const cardTemplate = document.querySelector("#card-template").content;
const eventsCardsContainer = document.querySelector(".events__cards-container");
const locationBtn = document.querySelector(".header__location-button");

const popupBurgerMenu = document.querySelector(".popup__menu-burger");
const popupChoiseCity = document.querySelector(".popup__choise-city");
const burgerMenuBtn = document.querySelector(".menu-burger-icon");
const btnChoiseCity = document.querySelector(".burger-menu__button-location");
const btnChoiseCityBack = document.querySelector(".burger-menu__button-back");
const burgerCityText = document.querySelector(".burger-menu__city-name");
const headerDropdown = document.querySelector(".header__dropdown");
const headerText = document.querySelector(".header__text");
const labelCity = document.querySelectorAll(".form-city__list");

// открытие карты события

const closeButton = document.querySelector(".popup__close");
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
  burgerMenuBtn.classList.toggle("menu-burger-icon_active");
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
