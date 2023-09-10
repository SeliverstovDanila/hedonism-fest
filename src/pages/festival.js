import '../pages/index.css';
import {locationBtn, popupBurgerMenu, popupChoiseCity, popupDonate, burgerMenuBtn,
  btnChoiseCity, btnChoiseCityBack, btnDonate, closeBtnDonate, closeBtnTickets,
  headerDropdown, labelCity, btnSupportList, btnMinus, btnPlus, amount, sumTickets, popupBuyTickets,activeDropdownClass} from "../components/constants.js"
import { openPopup, closePopup, changeCity} from '../components/popup.js';

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

btnSupportList.forEach(btn => {
  btn.addEventListener('click', function(){
    openPopup(popupDonate)
  })
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
