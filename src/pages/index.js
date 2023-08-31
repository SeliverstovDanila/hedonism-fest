import "../pages/index.css";
import { cardFormData, cardForm, likeBTN, participateButton } from "../components/CardForm";
import { openPopup, closePopup,changeCity} from "../components/popup";
import {locationBtn,popupBurgerMenu,popupChoiseCity,popupDonate,closeButton,burgerMenuBtn,btnChoiseCity,btnChoiseCityBack,btnDonate,closeBtnDonate,closeBtnTickets,headerDropdown,labelCity,btnSupport,btnMinus,btnPlus,amount,sumTickets} from "../components/constants.js";
import {cardTemplate, eventsCardsContainer, cardList} from "../components/carusel.js";
import cardsArray from "../components/cards.json";
import Card from "../components/card.js";


// начало функционала header
// всплывающее окно
locationBtn.addEventListener("click", function () {
  headerDropdown.classList.toggle("header__dropdown_active");
});

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
  if(result > 0){
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

// открытие карты события
closeButton.addEventListener("click", () => {
  closePopup(cardForm);
});

participateButton.addEventListener("click", () => {
  likeBTN.classList.toggle("card__like_active");
});

// for (const cardElement of cardsArray) {
//   const card = new Card(cardElement, cardTemplate, {
//     zoomCard: () => {
//       cardFormData(cardElement);
//     },
//   }).createCard();
//   eventsCardsContainer.append(card);
// }


cardList.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (!event.target.classList.contains("card__like")) {
      openPopup(cardForm);
    }
  });
});


// document.querySelectorAll(".fest-images__grid").forEach((carousel) => {
//   const items = carousel.querySelectorAll(".fest-images__image");
//   const buttons = carousel.querySelectorAll(".fest-images__button");
//   const buttonsHtml = Array.from(items, () => {
//     return `<span class="fest-images__button"></span>`;
//   });

//   carousel.insertAdjacentHTML(
//     "beforeend",
//     `
//           <div class="fest-images__nav">
//               ${buttonsHtml.join("")}
//           </div>
//       `
//   );



//   buttons.forEach((button, i) => {
//     button.addEventListener("click", () => {
//       items.forEach((item) =>
//         item.classList.remove("fest-images__image_selected")
//       );
//       buttons.forEach((button) =>
//         button.classList.remove("fest-images__button_selected")
//       );

//       items[i].classList.add("fest-images__image_selected");
//       button.classList.add("fest-images__button_selected");
//     });
//   });

//   items[0].classList.add("fest-images__image_selected");
//   buttons[0].classList.add("fest-images__button_selected");
// });




