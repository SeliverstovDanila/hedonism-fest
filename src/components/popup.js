import "../pages/index.css";
import {popupOpenedSelector,headerText,burgerCityText} from "../components/constants.js"



function openPopup(popupSelector) {
  popupSelector.classList.add("popup_opened");
  popupSelector.addEventListener('click', keyHandlerOverlay)
  document.addEventListener('keydown', keyHandlerEsc)
}

function closePopup(popupSelector) {
  popupSelector.classList.remove("popup_opened");
  popupSelector.removeEventListener('click', keyHandlerOverlay)
  document.removeEventListener('keydown',  keyHandlerEsc)
}

// Закрытие popup по нажатию на оверлей
function keyHandlerOverlay(evt) {
  if (evt.target.classList.remove(popupOpenedSelector)) {
    closePopup()
  }
}

// Закрытие по нажатию на Esc
function  keyHandlerEsc(evt) {
  if (evt.key === 'Escape') {
      const popupActive = document.querySelector(`.${popupOpenedSelector}`)
      popupActive && closePopup(popupActive)
  }
}

//изменить город
function changeCity(e) {
  if (
    (headerText.textContent = e.target
      .closest("label")
      .querySelector("span").textContent)
  );
  if (
    (burgerCityText.textContent = e.target
      .closest("label")
      .querySelector("span").textContent)
  );
}

export { openPopup, closePopup, keyHandlerEsc,keyHandlerOverlay, changeCity};

