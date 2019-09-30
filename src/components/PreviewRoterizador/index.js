import React,
      { Component } from 'react';

import './index.css';

class PreviewRoterizador extends Component {

  constructor( props )
  {

    super();

    this.state = {
      routes: []
    };

  }

  processRoutes()
  {

    let { directions,
          texts       } = this.props;

    if( directions && directions.routes && directions.routes[0] && directions.routes[0].legs ){

        let arr_route = directions.routes[0].legs;

        return arr_route.map( ( route, i ) => {

          return (
            <div data-block-route-data key={i}>
              <i className="icon-pin_drop"></i>
              <div>
                <p><span>{texts.block_route.from}</span> {route.start_address}</p>
                <p><span>{texts.block_route.to}</span> {route.end_address}</p>
                <p><span>{texts.block_route.distance}</span> {route.distance.text}</p>
                <p><span>{texts.block_route.duration}</span> {route.duration.text}</p>
              </div>
            </div>
          )

        });

    } else {
      return "";
    }

  }

  componentWillReceiveProps(){}

  render() {

    return (
      <div data-component="preview-roterizador">

        {this.processRoutes()}

      </div>
    );

  }

}

export default PreviewRoterizador;
