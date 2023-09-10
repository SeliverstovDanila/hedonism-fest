import "../pages/index.css";
import cardsArray from "../components/cards.json";
import createCard from "../components/card.js";
import { eventFilter, updateCardsCounter } from "../components/event-filter.js";
import {
  cardFormData,
  cardForm,
  likeBTN,
  participateButton,
} from "../components/CardForm";
import {locationBtn,popupBurgerMenu,popupChoiseCity,popupDonate,burgerMenuBtn,btnChoiseCity,btnChoiseCityBack,btnDonate,closeBtnDonate,closeBtnTickets,headerDropdown,labelCity,btnSupport,btnMinus,btnPlus,amount,sumTickets,popupBuyTickets,activeDropdownClass} from "../components/constants.js"
import { openPopup, closePopup, changeCity} from '../components/popup.js';


const closeButton = document.querySelector(".popup__close-cardform");

export const eventsMapContainer = document.querySelector(".catalog__map-container");

export const eventsCardsContainer = document.querySelector(
  ".catalog__cards-container"
);
const eventTypes = [];
const eventDates = [];
const buttonFilterContainer = document.querySelector("#type");
const buttonDateContainer = document.querySelector("#date");
export const renderedCards = [];

const oopsBtn = document.querySelector("#oopsBtn");

//Отрисовка карточек на странице
for (const cardElement of cardsArray) {
  const card = createCard(cardElement);
  eventsCardsContainer.append(card);
  renderedCards.push(card);
}

updateCardsCounter(cardsArray.length, cardsArray.length);

//Создание кнопки для случаев, нет фильтруемых предметов
oopsBtn.addEventListener("click", () => {
  location.reload();
});

//Создание кнопок все и хочу пойти для контейнера с типами
buttonFilterContainer.append(eventFilter("all", "все", buttonFilterContainer));
buttonFilterContainer.append(
  eventFilter("liked", "хочу пойти", buttonFilterContainer)
);

//Создание массива с type для фильтра
for (let i = 0; i < cardsArray.length; i++) {
  eventTypes.push(cardsArray[i].type);
}

const cardsType = [...new Set(eventTypes)];

for (const cardType of cardsType) {
  const buttonType = eventFilter("type", cardType, buttonFilterContainer);
  buttonFilterContainer.append(buttonType);
}

//Создание кнопки все для дней
buttonDateContainer.append(eventFilter("all", "все", buttonDateContainer));

//Создание массива с date для фильтра
for (let i = 0; i < cardsArray.length; i++) {
  eventDates.push(cardsArray[i].date);
}

const cardsDate = [...new Set(eventDates)];

for (const cardDate of cardsDate) {
  const buttonDate = eventFilter("date", cardDate, buttonDateContainer);
  buttonDateContainer.append(buttonDate);
}

function windowSwitch(catalog1, catalog2, button1, button2) {
  catalog1.classList.add("disabled");
  catalog2.classList.remove("disabled");
  button1.classList.add("catalog__tab-button-disabled");
  button2.classList.remove("catalog__tab-button-disabled");
}
const mapButton = document.querySelector(".map");
const cardsButton = document.querySelector(".cards");
mapButton.addEventListener("click", () => {
  windowSwitch(
    eventsCardsContainer,
    eventsMapContainer,
    cardsButton,
    mapButton
  );
});
cardsButton.addEventListener("click", () => {
  windowSwitch(
    eventsMapContainer,
    eventsCardsContainer,
    mapButton,
    cardsButton
  );
});
closeButton.addEventListener("click", () => {
  closePopup(cardForm);
});
participateButton.addEventListener("click", () => {
  likeBTN.classList.toggle("card__like_active");
});

import { init } from "../components/Map";

ymaps.ready(init);

// начало функционала header
// всплывающее окно
locationBtn.addEventListener("click", function (e) {
  e.stopPropagation()
  if (!headerDropdown.classList.contains(activeDropdownClass)) {
    headerDropdown.classList.add(activeDropdownClass)
    document.addEventListener('click', hideTooltip)
  } else {
    hideTooltip()
  }
});

function hideTooltip() {
  headerDropdown.classList.remove("header__dropdown_active");
  document.removeEventListener('click', hideTooltip)
}

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
  burgerMenuBtn.classList.toggle("header__menu-burger-icon_active");
})

closeBtnDonate.addEventListener('click', function(){
closePopup(popupDonate)
})

closeBtnTickets.addEventListener('click', function(){
  closePopup(popupBuyTickets)
})


labelCity.forEach((item) => item.addEventListener("change", changeCity));

// счетчик (покупка билетов)
btnMinus.addEventListener('click', function(){
  const result = Number(amount.textContent) - 1;
  if(result >= 0){
    amount.textContent = result;
    sumTickets.textContent = 500 * result + '₽';
  }
})
btnPlus.addEventListener('click', function(){
  const result = Number(amount.textContent) + 1;
  amount.textContent = result;
  sumTickets.textContent = 500 * result + '₽';
})
// конец
