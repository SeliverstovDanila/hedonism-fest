import '../pages/index.css';
import cardsArray from '../components/cards.json';
import createCard from '../components/card.js';
import {eventFilter, updateCardsCounter} from '../components/event-filter.js';

export const eventsCardsContainer = document.querySelector('.catalog__cards-container');
const eventTypes = [];
const eventDates = [];
const buttonFilterContainer = document.querySelector('#type');
const buttonDateContainer = document.querySelector('#date');
export const renderedCards = [];

const oopsBtn = document.querySelector('#oopsBtn');

//Отрисовка карточек на странице
for(const cardElement of cardsArray) {
  const card = createCard(cardElement);
  eventsCardsContainer.append(card);
  renderedCards.push(card);
}

updateCardsCounter(cardsArray.length, cardsArray.length);

//Создание кнопки для случаев, нет фильтруемых предметов
oopsBtn.addEventListener('click', () => {
  location.reload();
})

//Создание кнопок все и хочу пойти для контейнера с типами
buttonFilterContainer.append(eventFilter('all', 'все', buttonFilterContainer));
buttonFilterContainer.append(eventFilter('liked', 'хочу пойти', buttonFilterContainer));

//Создание массива с type для фильтра
for(let i=0; i < cardsArray.length; i++) {
  eventTypes.push(cardsArray[i].type)
}

const cardsType = [...new Set(eventTypes)];

for(const cardType of cardsType) {
  const buttonType = eventFilter('type', cardType, buttonFilterContainer);
  buttonFilterContainer.append(buttonType);
}

//Создание кнопки все для дней
buttonDateContainer.append(eventFilter('all', 'все', buttonDateContainer));

//Создание массива с date для фильтра
for(let i=0; i < cardsArray.length; i++) {
  eventDates.push(cardsArray[i].date)
}

const cardsDate = [...new Set(eventDates)];

for(const cardDate of cardsDate) {
  const buttonDate = eventFilter('date', cardDate, buttonDateContainer);
  buttonDateContainer.append(buttonDate);
}


