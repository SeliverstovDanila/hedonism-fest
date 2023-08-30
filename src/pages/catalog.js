import "../pages/index.css";
import cardsArray from "../components/cards.json";
import createCard from "../components/card.js";
import { eventFilter, updateCardsCounter } from "../components/event-filter.js";

export const eventsCardsContainer = document.querySelector(
  ".catalog__cards-container"
);
const eventsMapContainer = document.querySelector(".catalog__map-container");
const eventTypes = [];
const eventDates = [];
export const buttonFilterContainer = document.querySelector("#filter-types");
export const buttonDateContainer = document.querySelector("#filter-date");
export const renderedCards = [];

//Отрисовка карточек на странице
for (const cardElement of cardsArray) {
  const card = createCard(cardElement);
  eventsCardsContainer.append(card);
  renderedCards.push(card);
}

updateCardsCounter(cardsArray.length, cardsArray.length);

buttonFilterContainer.append(eventFilter("liked", "хочу пойти"));

//Создание массива с type для фильтра
for (let i = 0; i < cardsArray.length; i++) {
  eventTypes.push(cardsArray[i].type);
}

const cardsType = [...new Set(eventTypes)];

for (const cardType of cardsType) {
  const buttonType = eventFilter("type", cardType);
  buttonFilterContainer.append(buttonType);
}

//Создание массива с date для фильтра
for (let i = 0; i < cardsArray.length; i++) {
  eventDates.push(cardsArray[i].date);
}

const cardsDate = [...new Set(eventDates)];

for (const cardDate of cardsDate) {
  const buttonDate = eventFilter("date", cardDate);
  buttonDateContainer.append(buttonDate);
}

import { init } from "./Map";
ymaps.ready(init);

function windowSwitch(catalog1, catalog2, button1, button2) {
  catalog1.classList.add("disabled");
  catalog2.classList.remove("disabled");
  button1.classList.add("catalog__tab-button-disabled");
  button2.classList.remove("catalog__tab-button-disabled");
}

const mapButton = document.querySelector(".map");
const cardsButton = document.querySelector(".cards");
mapButton.addEventListener("click", () => {
  windowSwitch(eventsCardsContainer, eventsMapContainer, cardsButton, mapButton);
});
cardsButton.addEventListener("click", () => {
  windowSwitch(eventsMapContainer, eventsCardsContainer, mapButton, cardsButton);
});

cardsArray.forEach((it)=> {
  console.log(it)

})
