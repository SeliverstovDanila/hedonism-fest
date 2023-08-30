const center = [59.93726178565812, 30.325354684656176];
const eventsMapContainer = document.querySelector(".catalog__map-container");


export async function init() {
  let map = new ymaps.Map(eventsMapContainer, {
    center: center,
    zoom: 17,
  });
  let placemark = new ymaps.Placemark(
    center,
    {
      balloonContent: `

    <div class="balloon">
        <div class="balloon__name">хуй</div>
        <div class="date"></div>
        <div class="adress"></div>
        <div class="balloon__contacts">
            <a href="tel:+7999999999">+7999999999</a>
        </div>
    </div>
`,
    },
    {
      iconLayout: "default#image",
      iconImageHref: "https://cdn-icons-png.flaticon.com/512/1114/1114342.png",
      iconImageSize: [40, 40],
      iconImageOffset: [-19, -44],
    }
  );
  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил

  map.geoObjects.add(placemark);
}