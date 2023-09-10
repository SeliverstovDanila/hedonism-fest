const _cardElementTemplate = document.querySelector("#card-template").content;
import { cardFormData, cardForm } from "../components/CardForm";
import { openPopup, closePopup, changeCity } from "../components/popup";
export default function createCard(card) {
  const _cardElement = _cardElementTemplate
    .querySelector(".card")
    .cloneNode(true);
  _cardElement.dataset.type = card.type;
  _cardElement.dataset.date = card.date;
  _cardElement.dataset.id = card.cord
  const _cardImage = _cardElement.querySelector(".card__image");
  _cardImage.src = card.photo;
  const _cardType = _cardElement.querySelector("#card-type");
  _cardType.textContent = card.type;
  const _cardDate = _cardElement.querySelector("#card-date");
  _cardDate.textContent = card.date + ", " + card.time;
  const _cardTitle = _cardElement.querySelector("#card-title");
  _cardTitle.textContent = card.title;
  const _cardAbout = _cardElement.querySelector("#card-lector");
  _cardAbout.textContent = card.about;
  const _cardAddress = _cardElement.querySelector("#card-address");
  _cardAddress.textContent = card.address;
  const _cardAdditional = _cardElement.querySelector("#card-additional");
  _cardAdditional.textContent = card.additional;
  const _cardLikeBtn = _cardElement.querySelector(".card__like");
  /*console.log(localStorage.getItem(`${_cardElement.dataset.id}-like`));*/
  if(localStorage.getItem(`${_cardElement.dataset.id}-like`) !== null ) {
    _cardLikeBtn.classList.add("card__like_active");
    _cardElement.dataset.liked = "хочу пойти";
  }
  _cardLikeBtn.addEventListener("click", () => {
    _cardLikeBtn.classList.toggle("card__like_active");
    if (_cardLikeBtn.classList.contains("card__like_active")) {
      _cardElement.dataset.liked = "хочу пойти";
      localStorage.setItem(`${_cardElement.dataset.id}-like`, _cardElement.dataset.liked);
    } else {
      delete _cardElement.dataset.liked;
      localStorage.removeItem(`${_cardElement.dataset.id}-like`);
    }
  });
  _cardElement.addEventListener("click", (event) => {
    if (!event.target.classList.contains("card__like")) {
      openPopup(cardForm);
      cardFormData(card);
    }
  });
/*console.log(_cardElement.dataset.liked)*/
  return _cardElement;
}
