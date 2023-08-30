import '../pages/index.css';
import cardsArray from '../components/cards.json';
import createCard from '../components/card.js';
import {eventFilter, updateCardsCounter} from '../components/event-filter.js';

export const eventsCardsContainer = document.querySelector('.catalog__cards-container');
const eventTypes = [];
const eventDates = [];
export const buttonFilterContainer = document.querySelector('#filter-types');
export const buttonDateContainer = document.querySelector('#filter-date');
export const renderedCards = [];


//Отрисовка карточек на странице
for(const cardElement of cardsArray) {
  const card = createCard(cardElement);
  eventsCardsContainer.append(card);
  renderedCards.push(card);
}

updateCardsCounter(cardsArray.length, cardsArray.length);

buttonFilterContainer.append(eventFilter('liked', 'хочу пойти'));

//Создание массива с type для фильтра
for(let i=0; i < cardsArray.length; i++) {
  eventTypes.push(cardsArray[i].type)
}

const cardsType = [...new Set(eventTypes)];

for(const cardType of cardsType) {
  const buttonType = eventFilter('type', cardType);
  buttonFilterContainer.append(buttonType);
}

//Создание массива с date для фильтра
for(let i=0; i < cardsArray.length; i++) {
  eventDates.push(cardsArray[i].date)
}

const cardsDate = [...new Set(eventDates)];

for(const cardDate of cardsDate) {
  const buttonDate = eventFilter('date', cardDate);
  buttonDateContainer.append(buttonDate);
}


