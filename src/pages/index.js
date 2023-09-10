import "../pages/index.css";
import {
  cardFormData,
  cardForm,
  likeBTN,
  participateButton,
} from "../components/CardForm";
import { openPopup, closePopup, changeCity } from "../components/popup";
import {
  locationBtn,
  popupBurgerMenu,
  popupChoiseCity,
  popupDonate,
  closeButton,
  burgerMenuBtn,
  btnChoiseCity,
  btnChoiseCityBack,
  btnDonate,
  closeBtnDonate,
  closeBtnTickets,
  headerDropdown,
  labelCity,
  btnSupport,
  btnMinus,
  btnPlus,
  amount,
  sumTickets,popupBuyTickets,activeDropdownClass
} from "../components/constants.js";
import { eventsCardsContainer, cardList } from "../components/carusel.js";
import cardsArray from "../components/cards.json";
import createCard from "../components/card.js";
let renderedCards = [];
// начало функционала header


closeButton.addEventListener("click", () => {
  closePopup(cardForm);
});
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

btnSupport.addEventListener("click", function () {
  openPopup(popupDonate);
});

btnDonate.addEventListener("click", function () {
  openPopup(popupDonate);
  closePopup(popupBurgerMenu);
  burgerMenuBtn.classList.toggle("header__menu-burger-icon_active");
});

closeBtnDonate.addEventListener("click", function () {
  closePopup(popupDonate);
});

closeBtnTickets.addEventListener("click", function () {
  closePopup(popupBuyTickets);
});
labelCity.forEach((item) => item.addEventListener("change", changeCity));

// счетчик (покупка билетов)
btnMinus.addEventListener("click", function () {
  const result = Number(amount.textContent) - 1;
  if (result >= 0) {
    amount.textContent = result;
    sumTickets.textContent = 500 * result + "₽";
  }
});
btnPlus.addEventListener("click", function () {
  const result = Number(amount.textContent) + 1;
  amount.textContent = result;
  sumTickets.textContent = 500 * result + "₽";
});
// конец

participateButton.addEventListener("click", () => {
  likeBTN.classList.toggle("card__like_active");
});

for (const cardElement of cardsArray) {
  const card = createCard(cardElement);
  eventsCardsContainer.append(card);
  renderedCards.push(card);
}


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
