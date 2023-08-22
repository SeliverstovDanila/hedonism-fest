import '../pages/index.css';
const eventDuration = document.querySelector(".duration");
const eventCost = document.querySelector(".cost");
const eventPlace = document.querySelector(".place");
const eventAddress = document.querySelector(".address");
const eventNumber = document.querySelector(".number");
const eventSocials = document.querySelector(".socials");
const eventImage = document.querySelector(".popup__cover");
const eventType = document.querySelector(".name");
const eventTitle = document.querySelector(".Title");
import cardsArray from '../components/cards.json';
import Card from '../components/card.js';
const cardTemplate = document.querySelector("#card-template").content;
const eventsCardsContainer = document.querySelector(".events__cards-container");


function cardFormData(data) {
  eventDuration.textContent = data.duration;
  eventCost.textContent = data.cost;
  eventPlace.textContent = data.place;
  eventAddress.textContent = data.address;
  eventNumber.textContent = data.number;
  eventSocials.textContent = data.socials;
  eventImage.src = data.photo;
  eventType.textContent = data.type;
  eventTitle.textContent = data.title;
}
for (const cardElement of cardsArray) {
  const card = new Card(cardElement, cardTemplate, {
    zoomCard: () => {
      cardFormData(cardElement)
    },
  }).createCard();
  eventsCardsContainer.append(card);
}

const cardForm = document.querySelector(".popup__cardform");
const cardList = document.querySelectorAll(".card");
cardList.forEach((card) => {
  card.addEventListener("click", () => {
    cardForm.classList.add("popup__opened");
  });
});
const closeButton = document.querySelector(".popup__close");
closeButton.addEventListener("click", () => {
  cardForm.classList.remove("popup__opened");
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

const popupBurgerMenu = document.querySelector('.popup__menu-burger');
const popupChoiseCity = document.querySelector('.popup__choise-city')
const burgerMenuBtn = document.querySelector('.menu-burger-icon');
const btnChoiseCity = document.querySelector('.burger-menu__button-location')
const btnChoiseCityBack = document.querySelector('.burger-menu__button-back')
const burgerCityText = document.querySelector('.burger-menu__city-name')
const headerDropdown = document.querySelector('.header__dropdown')
const headerText = document.querySelector('.header__text')
const labelCity = document.querySelectorAll('.form-city__list');

//изменить город
function changeCity(e) {
 if(headerText.textContent = e.target.closest('label').querySelector('span').textContent);
 if(burgerCityText.textContent = e.target.closest('label').querySelector('span').textContent);
}
  labelCity.forEach((item) => item.addEventListener('change', changeCity))


//  Открытие popup
function openPopup(popup){
    popup.classList.add('popup_opened')
}

function closePopup(popup){
  popup.classList.remove('popup_opened')
}

// всплывающее окно
locationBtn.addEventListener('click',function(){
  headerDropdown.classList.toggle('header__dropdown_active');
})



burgerMenuBtn.addEventListener('click', function () {
  burgerMenuBtn.classList.toggle('menu-burger-icon_active')
  popupBurgerMenu.classList.toggle('popup_opened')
  if (popupChoiseCity.classList.contains('popup_opened')) {
    closePopup(popupChoiseCity);
    closePopup(popupBurgerMenu);
  }
})

btnChoiseCity.addEventListener('click', function() {
  closePopup(popupBurgerMenu);
  openPopup(popupChoiseCity);
})

btnChoiseCityBack.addEventListener('click', function() {
  closePopup(popupChoiseCity);
  openPopup(popupBurgerMenu);
})


