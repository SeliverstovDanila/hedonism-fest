import '../pages/index.css';

//  Открытие popup
export function openPopup(popup, className){
  popup.classList.add(className)
}

export function closePopup(popup, className){
popup.classList.remove(className)
}

// закомментить от
// document.querySelectorAll(".fest-images__grid").forEach((carousel) => {
//   const items = carousel.querySelectorAll(".fest-images__image");
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

//   const buttons = carousel.querySelectorAll(".fest-images__button");

//   buttons.forEach((button, i) => {
//     button.addEventListener("click", () => {
//       // un-select all the items
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

//   // Select the first item on page load
//   items[0].classList.add("fest-images__image_selected");
//   buttons[0].classList.add("fest-images__button_selected");
// });



// const locationBtn = document.querySelector('.header__location-button');

// const popupBurgerMenu = document.querySelector('.popup__menu-burger');
// const popupChoiseCity = document.querySelector('.popup__choise-city')
// const burgerMenuBtn = document.querySelector('.menu-burger-icon');
// const btnChoiseCity = document.querySelector('.burger-menu__button-location')
// const btnChoiseCityBack = document.querySelector('.burger-menu__button-back')
// const burgerCityText = document.querySelector('.burger-menu__city-name')
// const headerDropdown = document.querySelector('.header__dropdown')
// const headerText = document.querySelector('.header__text')
// const labelCity = document.querySelectorAll('.form-city__list');

// //изменить город
// function changeCity(e) {
//  if(headerText.textContent = e.target.closest('label').querySelector('span').textContent);
//  if(burgerCityText.textContent = e.target.closest('label').querySelector('span').textContent);
// }
//   labelCity.forEach((item) => item.addEventListener('change', changeCity))


// // всплывающее окно
// locationBtn.addEventListener('click', function(){
//   headerDropdown.classList.toggle('header__dropdown_active');
// })



// burgerMenuBtn.addEventListener('click', function () {
//   burgerMenuBtn.classList.toggle('menu-burger-icon_active')
//   popupBurgerMenu.classList.toggle('popup_opened')
//   if (popupChoiseCity.classList.contains('popup_opened')) {
//     closePopup(popupChoiseCity, 'popup_opened');
//     closePopup(popupBurgerMenu, 'popup_opened');
//   }
// })

// btnChoiseCity.addEventListener('click', function() {
//   closePopup(popupBurgerMenu, 'popup_opened');
//   openPopup(popupChoiseCity, 'popup_opened');
// })

// btnChoiseCityBack.addEventListener('click', function() {
//   closePopup(popupChoiseCity, 'popup_opened');
//   openPopup(popupBurgerMenu, 'popup_opened');
// })


// import cardsArray from '../components/cards.json';
// import Card from '../components/card.js';

// const cardTemplate = document.querySelector('#card-template').content;
// const eventsCardsContainer = document.querySelector('.events__cards-container');

// for (const cardElement of cardsArray) {
//   const card = new Card(cardElement, cardTemplate).createCard();
//   eventsCardsContainer.append(card);
// }

// закомментить до


// MEMBERSHIP PAGE
// if (document.body.id == '#membership') {
//   const pageMembership = document.querySelector('.membership');
//   const btnOpenMemberForm = pageMembership.querySelector('.membership__btn');
//   const formMembership = pageMembership.querySelector('.membership__form');
//   const btnCloseMemberForm = pageMembership.querySelector('.membership__form-btn_type_close');
//   const btnSubmitMemberForm = pageMembership.querySelector('.membership__form-btn_type_submit');
//   const popupMembership = pageMembership.querySelector('.membership__popup');
//   const titleMembership = pageMembership.querySelector('.membership__title');
//   const contentMembership = pageMembership.querySelector('.membership__content');

  // ф-я убрать филдсет
  // function deleteFieldset() {

  // }

  // ф-я вставить филдсет
  // function pasteFieldset() {

  // }

  // отображение надписи "Сохранение..." пока идет загрузка (1 - true или false, 2 - кнопка сабмита, 3 и 4 аргументы необязательные)
  // function renderLoading(isLoading, button, defaultText='Завершить', loadingText='Идет отправка...') {
  //   if (isLoading) {
  //     button.textContent = loadingText; // true - отобразит defaultText (например, 'Завершить')
  //   } else {
  //     button.textContent = defaultText; // false - отобразит loadingText (по умолчанию - 'Идет отправка...')
  //   }
  // }

  // ф-я, предотвращающая перезагрузку формы при сабмите, меняющая текст кнопки во время и после запроса, очищающая форму
  // принимает функцию запроса, объект события и текст во время загрузки (по умолчанию - 'Сохранение...')
  // function handleSubmit(evt) {
  //   evt.preventDefault();

  //   // универсально получаем кнопку сабмита из `evt`
  //   const submitButton = evt.submitter;
  //   // записываем начальный текст кнопки
  //   const initialText = submitButton.textContent;
  //   // изменяем текст кнопки до вызова запроса
  //   renderLoading(true, submitButton, initialText, loadingText);

  //   // очищаем форму после успешного ответа от сервера (или после другой проверки)
  //   // ДОПИСАТЬ ПРОВЕРКУ + сохранение данных (?)
  //   evt.target.reset();

  //   // возвращаем начальный текст кнопки (с fetch-запросами - в .finally)
  //   renderLoading(false, submitButton, initialText);
  // }

  // // ф-я открытия формы на странице membership
  // function openMembershipPopup() {
  //   openPopup(popupMembership, 'membership__popup_opened');
  //   titleMembership.classList.add('membership__title_hidden');
  //   contentMembership.classList.add('membership__content_hidden');
  // }

  // // ф-я закрытия формы на странице membership
  // function closeMembershipPopup() {
  //   closePopup(popupMembership, 'membership__popup_opened');
  //   titleMembership.classList.remove('membership__title_hidden');
  //   contentMembership.classList.remove('membership__content_hidden');
  // }

  // // ф-я сабмита формы на странице membership
  // function submitMembershipPopup(evt) {
  //   // выполнить отправку формы
  //   // handleSubmit(evt);
  //   // пока что не работает evt.submitter (из-за того что нет полей формы или отправки формы?)
  //   // мб renderLoading и handleSubmit не понадобятся, просто остановить перезагрузку страницы (?)
  //   evt.preventDefault();
  //   // #todo - сохранить объект с данными формами (new FormData)
  //   // обновить форму reset()

  //   // закрыть попап
  //   closeMembershipPopup();
  // }

  // // вешаем слушатель на кнопку "заполнить форму"
  // btnOpenMemberForm.addEventListener('click', openMembershipPopup);
  // // вешаем слушатель на кнопку "отмена"
  // btnCloseMemberForm.addEventListener('click', closeMembershipPopup);
  // // вешаем слушатель на кнопку "завершить"
  // btnSubmitMemberForm.addEventListener('click', function(evt) {
  //   submitMembershipPopup(evt);
  // });


  // // карусель формы
  // const fieldsetList = formMembership.querySelectorAll('.membership__fieldset');
  // const btnLeft = document.querySelector('.membership__form-btn_type_left'); // назад
  // const btnRight = document.querySelector('.membership__form-btn_type_right'); // далее

  // let currentFieldsetIndex = 0;

  // //  default - при загрузке страницы выбран 1й fieldset
  // fieldsetList[0].classList.add('membership__fieldset_selected');

  // описываем поведение при щелчке "назад"
//   btnLeft.addEventListener('click', () => {
//     if (currentFieldsetIndex == 0) {
//       const checkedElement = pageMembership.querySelector('.membership__form-input[type="radio"]:checked').value; // выбранный в 1-м филдсете элемент, определяющий развилку формы
//       const selectedFieldsetContainer = pageMembership.querySelector('.membership__fieldset-container_selected'); // текущий контейнер с набором филдсетов

//       let typeOfFieldset;

//       if (checkedElement == 'кафе/бар/ресторан') {
//         typeOfFieldset = 'membership__fieldset-container_type_food';
//       } else if (checkedElement == 'мастер-класс/лекция') {
//         typeOfFieldset = 'membership__fieldset-container_type_study';
//       } else if (checkedElement == 'посиделки/вечеринка') {
//         typeOfFieldset = 'membership__fieldset-container_type_party';
//       } else if (checkedElement == 'другое') {
//         typeOfFieldset = 'membership__fieldset-container_type_another';
//       } else {
//         typeOfFieldset = 'membership__fieldset-container_type_food';
//       }

//       // если текущий контейнер не содержит нужный селектор (то может быть 2 причины - пуст или с другим селектором)
//       if (!selectedFieldsetContainer.classList.contains(typeOfFieldset)) {
//         // то меняем его полностью или заполняем
//         // selectedFieldsetContainer.replaceWith(''); // заменяем контейнер полностью
//       } else {

//       }


// // замена кнопки "отмена" на "назад"

//     }

//     if (currentFieldsetIndex == 2) {
//       // замена кнопки "далее" на "завершить"

//     }


//     // снимаем со всех филдсетов выделение
//     fieldsetList.forEach(item => item.classList.remove('membership__fieldset_selected'));
//     // при клике "назад" индекс уменьшается
//     currentFieldsetIndex -= 1;
//     // добавляем текущему элементу выделение (ДОБАВИТЬ УСЛОВИЕ - внутри текущего контейнера !!!)
//     fieldsetList[currentFieldsetIndex].classList.add('membership__fieldset_selected');
//   });

//   // описываем поведение при щелчке "далее"
//   btnRight.addEventListener('click', () => {
//     if (currentFieldsetIndex == 1) {
//       // замена кнопки "назад" на "отмена"

//     }


//     // снимаем со всех филдсетов выделение
//     fieldsetList.forEach(item => item.classList.remove('membership__fieldset_selected'));
//     // при клике "далее" индекс увеличивается
//     currenFieldsetIndex += 1;
//     // добавляем текущему элементу выделение
//     fieldsetList[currentFieldsetIndex].classList.add('membership__fieldset_selected');
//   });
// }


