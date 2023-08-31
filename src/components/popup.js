import "../pages/index.css";

const popupOpenedSelector = 'popup_opened';

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

// Закрытие по нажатию на оверлей
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
export { openPopup, closePopup, keyHandlerEsc,keyHandlerOverlay};

