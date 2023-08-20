import '../pages/index.css';


const locationBtn = document.querySelector('.header__location-button');
const popupChoiseCity = document.querySelector('.popup__choise-city');
const popupBurgerMenu = document.querySelector('.popup__menu-burger');
const burgerMenu = document.querySelector('.menu-burger-icon');
// const btnBurgerChangeCity = document.querySelector('.burger-menu__button-location')

//  Открытие popup
function openPopup(popup){
    popup.classList.add('popup_opened')
}

function closePopup(popup){
  popup.classList.remove('popup_opened')
}

locationBtn.addEventListener('click',function(){
    openPopup(popupChoiseCity)
})

burgerMenu.addEventListener('click', function(){
  if(burgerMenu.classList.toggle('menu-burger-icon_active')){
    openPopup(popupBurgerMenu)
  }else{
    closePopup(popupBurgerMenu)
  }
})


// btnBurgerChangeCity.addEventListener('click', function () {
//   closePopup(burgerMenu);
//   openPopup(popupChoiseCity)
// })


