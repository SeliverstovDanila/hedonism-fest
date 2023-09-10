const cardsCounter = document.querySelector('#cardsCounter');
const oops = document.querySelector('.catalog__oops');
export const _eventButtonTemplate = document.querySelector('#event-button-template').content;
import {renderedCards} from '../pages/catalog.js';

let currentFilters = {
  type: [],
  date: [],
  liked: [],
  all: []
};

//Создание кнопок по фильтрам
export function eventFilter(key, param, container) {

  const filterButton = _eventButtonTemplate.querySelector('#button-filter-template').cloneNode(true);

  filterButton.innerHTML = param + '<svg class="btn__icon disabled" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M18 6C17.8125 5.81253 17.5582 5.70721 17.293 5.70721C17.0278 5.70721 16.7735 5.81253 16.586 6L12 10.586L7.414 6C7.22647 5.81253 6.97216 5.70721 6.707 5.70721C6.44184 5.70721 6.18753 5.81253 6 6C5.81253 6.18753 5.70721 6.44184 5.70721 6.707C5.70721 6.97216 5.81253 7.22647 6 7.414L10.586 12L6 16.586C5.81253 16.7735 5.70721 17.0278 5.70721 17.293C5.70721 17.5582 5.81253 17.8125 6 18C6.18753 18.1875 6.44184 18.2928 6.707 18.2928C6.97216 18.2928 7.22647 18.1875 7.414 18L12 13.414L16.586 18C16.7735 18.1875 17.0278 18.2928 17.293 18.2928C17.5582 18.2928 17.8125 18.1875 18 18C18.1875 17.8125 18.2928 17.5582 18.2928 17.293C18.2928 17.0278 18.1875 16.7735 18 16.586L13.414 12L18 7.414C18.1875 7.22647 18.2928 6.97216 18.2928 6.707C18.2928 6.44184 18.1875 6.18753 18 6Z" fill="currentColor" /></svg>';

  filterButton.dataset.type = param;
  filterButton.setAttribute("data-state", "inactive");

  filterButton.addEventListener("click", (evt) =>
    handleButtonClick(evt, key, param, container)
  );

  if(key === 'all') {
    filterButton.innerHTML = param;
    filterButton.setAttribute("data-state", "active");
    filterButton.classList.add('btn_type_violet');
    filterButton.classList.remove('btn_type_bordered')
  }

  return filterButton;
}


//Хэндлер нажатия кнопки
const handleButtonClick = (evt, key, param, container) => {
  const button = evt.target;
  const buttonState = button.getAttribute("data-state");
  const btnIcon = button.querySelector('.btn__icon');

  if(key == 'all') {
    const filterButtons = container.querySelectorAll('.btn:not([data-type="все"])');
    filterButtons.forEach(button => {
      button.setAttribute("data-state", "inactive");
      button.querySelector('.btn__icon').classList.add('disabled');
      button.classList.remove('btn_type_violet');
      button.classList.add('btn_type_bordered');
    })
    button.setAttribute("data-state", "active");
    button.classList.add('btn_type_violet');
    button.classList.remove('btn_type_bordered')
    currentFilters[key].push(param);
    handleFilterCards(currentFilters, container);
    return
  }
  else {
    const btnFilterAll = container.querySelector('[data-type="все"]');
    btnFilterAll.setAttribute("data-state", "inactive");
    btnFilterAll.classList.remove('btn_type_violet');
    btnFilterAll.classList.add('btn_type_bordered')
  }

  if (buttonState == "inactive") {
    btnIcon.classList.remove("disabled");
    button.setAttribute("data-state", "active");
    button.classList.add('btn_type_violet');
    button.classList.remove('btn_type_bordered')
    currentFilters[key].push(param);
    handleFilterCards(currentFilters, container);
  } else {
    btnIcon.classList.add("disabled");
    button.setAttribute("data-state", "inactive");
    button.classList.remove('btn_type_violet');
    button.classList.add('btn_type_bordered')
    currentFilters[key] = currentFilters[key].filter((item) => item !== param);
    handleFilterCards(currentFilters, container);
  }
};


//Хэнлдер фильтрации карточек после клика на фильтр
const handleFilterCards = (filters, container) => {
  let filteredCards = [...renderedCards];
  let filterKeys = Object.keys(filters);

  oops.classList.add('disabled');

  renderedCards.forEach((card) => {
    card.classList.add('disabled');
  })

  if(filters['all'].length > 0) {
    filters[container.id].length = 0;
    filters['all'].length -= 1;
    if(container.id === 'type') {
      filters['liked'].length = 0;
    }
  }

  filterKeys.forEach((key) => {
    let currentKey = filters[key];
    if (currentKey.length <= 0) {
      return
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
    oops.classList.remove('disabled');
  } else {
    oops.classList.add('disabled');
  }

  filteredCards.forEach((card) => {
    card.classList.toggle('disabled');
  });
};


//Функция для апдейта счётчика карточек вверху контейнера
export function updateCardsCounter(amount, total) {
  cardsCounter.textContent = 'показано ' + amount + ' из ' + total;
}
