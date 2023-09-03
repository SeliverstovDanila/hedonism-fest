import cardsArray from "../components/cards.json";
const center = [55.66, 37.48];
const eventsMapContainer = document.querySelector(".catalog__map-container");

export function init() {
  let myMap = new ymaps.Map(eventsMapContainer, {
    center: center,
    zoom: 17,
    controls: [],
  });
  // Создаем коллекцию.
  let myCollection = new ymaps.GeoObjectCollection(),
    // Создаем массив с данными.
    myPoints = cardsArray;

  // Заполняем коллекцию данными.

  const BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div class="ballon">' +
      '<p class="balloon__type">{{properties.type}}</p>' +
      '<h1 class="balloon__name">{{properties.name}}</h1>' +
      '<p class="balloon__date">{{properties.date}}</p>' +
      '<p class="balloon__address">{{properties.address}}</p>' +
      '<p class="balloon__additional">{{properties.add}}</p>' +
      '<button class="btn btn_type_violet text text_type_button">подробнее</button>' +
      "</div>"
  );

  for (var i = 0, l = myPoints.length; i < l; i++) {
    var point = myPoints[i];
    myCollection.add(
      new ymaps.Placemark(
        point.cord,
        {
          name: point.title,
          type: point.type,
          date: point.date + ", " + point.time,
          add: point.additional,
          address: point.address,
        },
        {
          balloonCloseButton:false,
          balloonContentLayout: BalloonContentLayout,
          iconLayout: "default#image",
          iconImageHref:
            "https://cdn.icon-icons.com/icons2/1949/PNG/512/free-30-instagram-stories-icons46_122593.png",
          iconImageSize: [50, 50],
        }
      )
    );
    // Отобразим объекты на карте.
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
  myMap.events.add('click', function() {
    myMap.balloon.close();
});
}
