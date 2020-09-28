ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [7.838252, 98.29922],
      zoom: 9
    }, {
      searchControlProvider: 'yandex#search'
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Grand Hotel',
      balloonContent: 'The awesome place in the world!'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: './img/myIcon.gif',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
    });

  myMap.geoObjects
    .add(myPlacemark);
});