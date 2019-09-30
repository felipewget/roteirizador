import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

class Map extends Component {

  constructor( props )
  {

    super();

  }

  render() {

    let { directions } = this.props;

    let GoogleMapExample;
    if( directions && directions !== null ){
      GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
          defaultZoom={13}
        >
          <DirectionsRenderer
            directions={directions}
          />
        </GoogleMap>
      ));
    }

    return (
      <div>

        {
          directions && directions !== null
          ? <GoogleMapExample
            containerElement={<div data-google-map />}
            mapElement={<div style={{ height: `100%` }} />} />
          : ""
        }

      </div>
    );

  }
}

export default Map;
