 // This example displays a marker at the center of Australia.
  // When the user clicks the marker, an info window opens.
  // The maximum width of the info window is set to 200 pixels.

  function initMap() {

    if (document.getElementById('map')) {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: destination,
            styles: [
                {
                    "featureType": "road",
                    "stylers": [
                        {
                            "hue": "#002525"
                        },
                        {
                            "saturation": -20
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "saturation": -20
                        },
                        {
                            "hue": "#002525"
                        },
                        {
                            "lightness": -47
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "lightness": 22
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "stylers": [
                        {
                            "hue": "#002525"
                        },
                        {
                            "saturation": -11
                        }
                    ]
                },
                {},
                {},
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "saturation": -20
                        },
                        {
                            "hue": "#002525"
                        },
                        {
                            "lightness": 8
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "weight": 1.3
                        },
                        {
                            "lightness": 30
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "hue": "#002525"
                        },
                        {
                            "saturation": -16
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "stylers": [
                        {
                            "saturation": -20
                        }
                    ]
                },
                {}
            ]

        });


        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        var marker = new google.maps.Marker({
            position: destination,
            map: map,

            icon: {
                url: "https://images.vexels.com/media/users/3/131261/isolated/lists/b2e48580147ca0ed3f970f30bf8bb009-map-location-marker.png",
                scaledSize: new google.maps.Size(64, 64)
            }
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    }
  }
