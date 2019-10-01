import  React,
        { Component }            from "react";
import  { withGoogleMap,
          GoogleMap,
          DirectionsRenderer  }  from "react-google-maps";

class Map extends Component {

  constructor( props )
  {

    super();

  }

  render() {

    let { directions } = this.props;

    let GoogleMapExample;

      GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
          defaultZoom={13}
        >
        {
          directions && directions !== null
          ? <DirectionsRenderer
            directions={directions}
          />
          : null
        }
        </GoogleMap>
      ));


    return (
      <div>

        {
          <GoogleMapExample
            containerElement={<div data-google-map />}
            mapElement={<div style={{ height: `100%` }} />} />
        }

      </div>
    );

  }
}

export default Map;
