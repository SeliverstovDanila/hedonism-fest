import '../pages/index.css';
import cardsArray from '../components/cards.json';
import Card from '../components/card.js';

const cardTemplate = document.querySelector('#card-template').content;
const eventsCardsContainer = document.querySelector('.events__cards-container');

for (const cardElement of cardsArray) {
  const card = new Card(cardElement, cardTemplate).createCard();
  eventsCardsContainer.append(card);
}
