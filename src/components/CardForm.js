const eventDuration = document.querySelector(".popup__duration");
const eventDate = document.querySelector('.popup__date')
const eventCost = document.querySelector(".popup__cost");
const eventPlace = document.querySelector(".popup__place");
const eventAddress = document.querySelector(".popup__address");
const eventNumber = document.querySelector(".popup__number");
const eventSocials = document.querySelector(".popup__socials");
const eventImage = document.querySelector(".popup__cover");
const eventType = document.querySelector(".popup__name");
const eventTitle = document.querySelector(".title_type_cardform");
const eventAdditonal = document.querySelector(".popup__additional");
const cardForm = document.querySelector(".popup__cardform");
const participateButton = cardForm.querySelector('.btn_type_formButton')
const likeBTN = participateButton.querySelector('.btn_type_like')
const eventAbout = document.querySelector('.popup__about')
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
  eventAdditonal.textContent = data.additional;
  eventDate.textContent = data.date + ', ' + data.time;
  eventAbout.textContent = data.about
}
export {cardFormData, cardForm, likeBTN, participateButton}