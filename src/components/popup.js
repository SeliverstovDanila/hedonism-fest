function openPopup(popupSelector) {
  popupSelector.classList.add("popup_opened");
}
function closePopup(popupSelector) {
  popupSelector.classList.remove("popup_opened");
}
export { openPopup, closePopup };
