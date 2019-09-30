import React,
      { Component } from 'react';
import Fields       from './Fields';
import './index.css';

class FormRoterizador extends Component {

  constructor( props )
  {

    super();

    this.state = {
      route: [
        {
          type: "from",
          metadata: null,
          remove: false,
        },
        {
          type: "to",
          metadata: null,
          remove: false,
        }
      ]
    };

    this.addStop    = this.addStop.bind(this);
    this.removeStop = this.removeStop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStop = this.updateStop.bind(this);

  }

  addStop()
  {

    let { route } = this.state;

    let obj_route = {
      type: "to",
      metadata: null,
      remove: true,
    };

    route.push( obj_route );

    this.setState({
      route: route
    });

  }

  removeStop( index )
  {

    let { route } = this.state;

    delete( route[ index ] );

    this.setState({
      route: route
    });

  }

  updateStop( matadata, index )
  {

    let { route } = this.state;

    route[ index ].metadata = matadata;

    this.setState({
      route: route
    });

  }

  processFields()
  {

    let self      = this;
    let { route } = this.state;
    let { texts } = this.props;

    return route.map( ( route , key ) => {

      return <Fields
                texts     = { texts             }
                key       = { key               }
                index     = { key               }
                type      = { route.type        }
                metadata  = { route.metadata    }
                remove    = { route.remove      }
                funcUpdate= { self.updateStop   }
                funcButton= { route.remove
                                ? self.removeStop
                                : self.addStop    }/>

    });

  }

  async handleSubmit( e )
  {


    e.preventDefault();

    let { funcUpdateMap } = this.props
    let { route } = this.state;

    let data_filled = true;
    for( let i in route ){

      if( route[i].metadata == null ) {
        data_filled = false;
      }

    }

    if( data_filled ){
      funcUpdateMap( route )
    } else {
      alert("Preencha todos os dados")
    }

  }

  render() {

    let { texts } = this.props;

    return (
      <form data-component="form-roterizador"
            onSubmit={this.handleSubmit}>

        {this.processFields()}

        <button data-button-submit
          type="submit" >
          <i className="icon-map"></i>
          {texts.button_submit.text}
        </button>

      </form>
    );

  }

}
export default FormRoterizador;
