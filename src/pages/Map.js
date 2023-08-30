const center = [55.7, 37.5];
const eventsMapContainer = document.querySelector(".catalog__map-container");

export function init() {
  let myMap = new ymaps.Map(eventsMapContainer, {
    center: center,
    zoom: 17,
  });
  // Создаем коллекцию.
  let myCollection = new ymaps.GeoObjectCollection(),
    // Создаем массив с данными.
    myPoints = [
      {
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
        type: "еда и напитки",
        date: "Пн-Вс",
        time: "10:00-22:00",
        title: "Ярмарка фруктов и овощей",
        about:
          "Фрукты и овощи с большими скидкамиФрукты и овощи с большими скидкамиФрукты и овощи с большими скидкамиФрукты и овощи с большими скидкамиФрукты и овощи с большими скидками",
        description: "Описание события",
        address: "Малая Конюшенная улица",
        additional: "+ ещё 4",
        cord: [55.77, 37.46],
      },
      {
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
        type: "кафе",
        date: "среда",
        time: "13:00",
        title: "ХУЙ",
        about: "Кафешка у дома",
        description: "Описание события",
        address: "Малая Конюшенная улица",
        additional: "+ ещё 4",
        cord: [55.66, 37.48],
      },
      {
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
        type: "еда и напитки",
        date: "Пн-Вс",
        time: "10:00-22:00",
        title: "ДЖОДЖО",
        about:
          "Фрукты и овощи с большими скидкамиФрукты и овощи с большими скидкамиФрукты и овощи с большими скидкамиФрукты и овощи с большими скидкамиФрукты и овощи с большими скидками",
        description: "Описание события",
        address: "Малая Конюшенная улица",
        additional: "+ ещё 4",
        cord: [55.65, 37.42],
      },
      {
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
        type: "еда и напитки",
        date: "Пн-Вс",
        time: "10:00-22:00",
        title: "СЕКС",
        about:
          "Фрукты и овощи с большими скидкамиФрукты и овощи с большими скидкамиФрукты и овощи с большими скидкамиФрукты и овощи с большими скидкамиФрукты и овощи с большими скидками",
        description: "Описание события",
        address: "Малая Конюшенная улица",
        additional: "+ ещё 4",
        cord: [55.64, 37.54],
      },
      {
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
        type: "еда и напитки",
        date: "Пн-Вс",
        time: "10:00-22:00",
        title: "АНИМЕ",
        about:
          "Фрукты и овощи с большими скидкамиФрукты и овощи с большими скидкамиФрукты и овощи с большими скидкамиФрукты и овощи с большими скидкамиФрукты и овощи с большими скидками",
        description: "Описание события",
        address: "Малая Конюшенная улица",
        additional: "+ ещё 4",
        cord: [55.54, 37.52],
      },
    ];

  // Заполняем коллекцию данными.

  for (var i = 0, l = myPoints.length; i < l; i++) {
    var point = myPoints[i];
    myCollection.add(
      new ymaps.Placemark(point.cord, {
        balloonContent: `

//     <div class="balloon">
//         <h1 class="balloon__name"></h1>
//         <div class="date"></div>
//         <div class="adress"></div>
//         <div class="balloon__contacts">
//             <a href="tel:+7999999999">+7999999999</a>
//         </div>
//     </div>
// `,
})
    );
  }
  myMap.controls.remove("geolocationControl"); // удаляем геолокацию
  myMap.controls.remove("searchControl"); // удаляем поиск
  myMap.controls.remove("trafficControl"); // удаляем контроль трафика
  myMap.controls.remove("typeSelector"); // удаляем тип
  myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
  myMap.controls.remove("rulerControl"); // удаляем контрол правил
  // Добавляем коллекцию меток на карту.
  myMap.geoObjects.add(myCollection);
}

