function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 50.614368147334076, lng: 26.24691667357167 },
      zoom: 18,
      mapId: 'be4ee38b06f1ca0',
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false
   });
   const markers = [
      [
         "Yoshi's House",
         50.614336642102494,
         26.2447672570623,
         'yoshi_house.svg',
         38,
         31,
      ],
      [
         'You Are Here',
         50.612573,
         26.244169,
         'pointer.svg',
         30,
         47.8,
      ],
      [
         'Ghost House',
         50.61621346984855,
         26.245688554320875,
         'ghosthouse.svg',
         40,
         48,
      ],
      ['Castle', 50.61651549663188, 26.24270071415159, 'castle.svg', 40, 53],
      ['Warp Pipe', 50.614385728493446, 26.246253781099238, 'pipe.svg', 38, 42.5],
      ['Star World', 50.61333036023267, 26.245712276529712, 'star.svg', 38, 38],
      [
         'Donut Plains',
         50.61580398097177,
         26.2411985388976,
         'hill_with_eyes.svg',
         50,
         60.7,
      ],
      [
         'Donut Plains',
         50.61500484020566,
         26.242997880801035,
         'hill_with_eyes.svg',
         50,
         60.7,
      ],
      [
         'Donut Plains',
         50.61386314325062,
         26.2404377457339,
         'hill_with_eyes.svg',
         50,
         60.7,
      ],
   ];

   for (let i = 0; i < markers.length; i++) {
      const currMarker = markers[i];

      const marker = new google.maps.Marker({
         position: { lat: currMarker[1], lng: currMarker[2] },
         map,
         title: currMarker[0],
         icon: {
            url: currMarker[3],
            scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
         },
         animation: google.maps.Animation.DROP,
      });

      const infowindow = new google.maps.InfoWindow({
         content: currMarker[0],
      });

      marker.addListener('click', () => {
         infowindow.open(map, marker);
      });
   }

}