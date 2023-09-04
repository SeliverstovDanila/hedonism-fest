import '../pages/index.css';
import {locationBtn,popupBurgerMenu,popupChoiseCity,popupDonate,burgerMenuBtn,btnChoiseCity,btnChoiseCityBack,btnDonate,closeBtnDonate,closeBtnTickets,headerDropdown,labelCity,btnSupport,btnMinus,btnPlus,amount,sumTickets} from "../components/constants.js"
import { openPopup, closePopup, changeCity} from '../components/popup.js';

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
