import React,
      { Component } from 'react';

import PlacesAutocomplete,
       {
        geocodeByAddress,
        getLatLng,
       } from 'react-places-autocomplete';

class Fields extends Component {

  constructor( props )
  {

    super();

    this.state = {
      address: "",
			lat: null,
			lng: null,
			tags: null,
			formated_address: null,
			privacy: null
    }

  }

  handleChange = address => {
	    this.setState({ address });
  	};

	handleSelect = address => {

		let self = this;
    let { funcUpdate, index } = this.props;

		self.setState({ address });

		geocodeByAddress(address)
	  	.then( function(results){

				var types = null;
				var formatted_address = '';
				if( results[0].types ){
					types = results[0].types;
				}

				if( results[0].formatted_address ){
					formatted_address = results[0].formatted_address;
				}

				self.setState({
					tags: types,
					formated_address: formatted_address,
				});

				return getLatLng(results[0]);

			})
			.then( function( latLng ){

				self.setState({
					lat: latLng.lat,
					lng: latLng.lng,
				})

        funcUpdate( self.state, index );

			})
	 	.catch( function( error ){
      console.log(error);
		});

	};

	getLocationValue()
	{

		var { basic_data } = this.props;

		return basic_data.actual_city.address;

	}

  processLabel()
  {

    let { type,
          remove,
          texts   } = this.props;

    if( type === "from" ){
      return ( <label>{texts.label_from.label}</label> )
    } else {

      return remove
              ? ( <label>{texts.label_stop.label}</label> )
              : ( <label>{texts.label_to.label}</label> ) ;

    }

  }

  getInput( placeholder )
  {

    return <PlacesAutocomplete
              value   ={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            >
            {
              ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <span>

                    <input
                        {...getInputProps({
                          placeholder: placeholder
                        })} />

                    <ul data-list-location>

                      { loading && <li data-loading-places>Carregando...</li> }

                      {
                        suggestions.map(suggestion => {

                          const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';

                          const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };

                          return (
                              <li {...getSuggestionItemProps(suggestion, {
                                      className,
                                      style,
                                })} >
                                  <i className="icon-location"></i>
                                  <p>
                                    { suggestion.formattedSuggestion.mainText }
                                  </p>
                                  <span>{ suggestion.formattedSuggestion.secondaryText }</span>
                              </li>

                           );

                          })
                        }

                      </ul>
                  </span>
                )
              }
            </PlacesAutocomplete>

  }

  processField()
  {

    let {
      index,
      type,
      remove,
      funcButton,
      texts
    } = this.props;

    return type === "to"
            ? (
              <span>
                <div>

                  <i className="icon-pin_drop"></i>
                  {
                    this.getInput( remove
                                    ? texts.label_stop.placeholder
                                    : texts.label_to.placeholder    )
                  }

                </div>

                {
                  remove
                  ? ( <button className="icon-close"  type="button" onClick={ () => { funcButton( index ) } } ></button> )
                  : ( <button className="icon-add"    type="button" onClick={ () => { funcButton( this )  } } ></button> )
                }

              </span>
            )
            : (
              <div>
                <i className="icon-person"></i>
                { this.getInput( texts.label_from.placeholder )  }
              </div>
            )

  }

  //  funcUpdate
  render() {

    let {
      type
    } = this.props;

    return (
        <div data-field={ type === "to" ? "with-button" : ""  }>
          { this.processLabel() }
          { this.processField() }
        </div>
    );

  }

}
export default Fields;
