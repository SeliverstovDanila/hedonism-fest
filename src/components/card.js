export default class Card {
  constructor(card, template, cardActions) {
    this._photo = card.photo;
    this._type = card.type;
    this._date = card.date;
    this._title = card.title;
    this._about = card.about;
    this._description = card.description;
    this._address = card.address;
    this._additional = card.additional;
    this._cardTemplate = template;
    this._zoomCard = cardActions.zoomCard;
  }

  _getCard() {
    const cardElement = this._cardTemplate.querySelector('.card').cloneNode(true);

    return cardElement;
  }

  _like() {
    this._cardLikeBtn.classList.toggle('card__like_active');
  }

  createCard() {
    this._card = this._getCard();
    this._cardImage = this._card.querySelector('.card__image');
    this._cardImage.src = this._photo;
    this._cardType = this._card.querySelector('#card-type');
    this._cardType.textContent = this._type;
    this._cardDate = this._card.querySelector('#card-date');
    this._cardDate.textContent = this._date;
    this._cardTitle = this._card.querySelector('#card-title');
    this._cardTitle.textContent = this._title;
    this._cardAbout = this._card.querySelector('#card-lector');
    this._cardAbout.textContent = this._about;
    this._cardAddress = this._card.querySelector('#card-address');
    this._cardAddress.textContent = this._address;
    this._cardAdditional = this._card.querySelector('#card-additional');
    this._cardAdditional.textContent = this._additional;
    this._cardLikeBtn = this._card.querySelector('.card__like');
    this._setEventHandlers();

    return this._card;
  }

  _setEventHandlers() {
    this._cardLikeBtn.addEventListener('click', () => this._like());
    this._card.addEventListener("click", () => this._zoomCard());
  }
}
