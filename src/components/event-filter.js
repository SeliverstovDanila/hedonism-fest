const _eventButtonTemplate = document.querySelector('#event-button-template').content;
const cardsCounter = document.querySelector('#cardsCounter');
import {eventsCardsContainer, buttonFilterContainer, renderedCards} from '../pages/catalog.js';
import createCard from '../components/card.js';

let currentFilters = {
  type: [],
  date: [],
  liked: []
};

//Создание кнопок по фильтрам
export function eventFilter(key, param) {

  const filterButton = _eventButtonTemplate.querySelector('#button-filter-template').cloneNode(true);

  filterButton.innerHTML = param + '<svg class="btn__icon disabled" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M18 6C17.8125 5.81253 17.5582 5.70721 17.293 5.70721C17.0278 5.70721 16.7735 5.81253 16.586 6L12 10.586L7.414 6C7.22647 5.81253 6.97216 5.70721 6.707 5.70721C6.44184 5.70721 6.18753 5.81253 6 6C5.81253 6.18753 5.70721 6.44184 5.70721 6.707C5.70721 6.97216 5.81253 7.22647 6 7.414L10.586 12L6 16.586C5.81253 16.7735 5.70721 17.0278 5.70721 17.293C5.70721 17.5582 5.81253 17.8125 6 18C6.18753 18.1875 6.44184 18.2928 6.707 18.2928C6.97216 18.2928 7.22647 18.1875 7.414 18L12 13.414L16.586 18C16.7735 18.1875 17.0278 18.2928 17.293 18.2928C17.5582 18.2928 17.8125 18.1875 18 18C18.1875 17.8125 18.2928 17.5582 18.2928 17.293C18.2928 17.0278 18.1875 16.7735 18 16.586L13.414 12L18 7.414C18.1875 7.22647 18.2928 6.97216 18.2928 6.707C18.2928 6.44184 18.1875 6.18753 18 6Z" fill="currentColor" /></svg>';

  filterButton.dataset.type = param;
  filterButton.setAttribute("data-state", "inactive");

  filterButton.addEventListener("click", (evt) =>
    handleButtonClick(evt, key, param)
  );

  return filterButton;
}

const handleButtonClick = (e, key, param) => {
  const button = e.target;
  const buttonState = button.getAttribute("data-state");
  const btnIcon = button.querySelector('.btn__icon');
  if (buttonState == "inactive") {
    btnIcon.classList.remove("disabled");
    button.setAttribute("data-state", "active");
    currentFilters[key].push(param);
    handleFilterPosts(currentFilters);
  } else {
    btnIcon.classList.add("disabled");
    button.setAttribute("data-state", "inactive");
    currentFilters[key] = currentFilters[key].filter((item) => item !== param);
    handleFilterPosts(currentFilters);
  }
};

const handleFilterPosts = (filters) => {
  let filteredCards = [...renderedCards];
  let filterKeys = Object.keys(filters);

  console.log(filters);

  filterKeys.forEach((key) => {
    let currentKey = filters[key];
    if (currentKey.length <= 0) {
      return;
    }
    filteredCards = filteredCards.filter((card) => {
      let currentValue = card.dataset[key];
      return Array.isArray(currentValue)
        ? currentValue.some((val) => currentKey.includes(val))
        : currentKey.includes(currentValue);
    });
  });

  updateCardsCounter(filteredCards.length, renderedCards.length);

  if (filteredCards.length == 0) {
    eventsCardsContainer.textContent = "Ничего нет";
    return;
  } else {
    eventsCardsContainer.textContent = "";
  }

  filteredCards.map((card) => {
    createCard(card);
    eventsCardsContainer.append(card);
  });
};

export function updateCardsCounter(amount, total) {
  cardsCounter.textContent = 'показано ' + amount + ' из ' + total;
}
