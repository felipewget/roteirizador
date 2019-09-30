export const loadDirections = ( arr_route ) => {

  return new Promise( async (resolve, reject) => {

    if( arr_route && arr_route.length > 0 ){

      const directionsService = new window.google.maps.DirectionsService();

      var origin, destination = null;
      var waypoints = [];

      let count = 0;
      for( let i in arr_route ){

        if( arr_route[i].metadata && arr_route[i].metadata.lat ){

          if( count === 0 ){
              origin = { lat: arr_route[i].metadata.lat, lng: arr_route[i].metadata.lng }
          } else if( count === 1 ){
              destination = { lat: arr_route[i].metadata.lat, lng: arr_route[i].metadata.lng }
          } else {
              waypoints.push( { location: arr_route[i].metadata.lat + "," + arr_route[i].metadata.lng, stopover: true } );
          }

          count++;

        }

      }

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          waypoints: waypoints,
          optimizeWaypoints: true,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {

            resolve({
              success: true,
              metadata: result
            });

          } else {

            resolve({
              success: false,
              metadata: result
            });

          }
        }
      );

    } else {

      resolve({
        success: true,
        metadata: []
      });

    }

  });

}
