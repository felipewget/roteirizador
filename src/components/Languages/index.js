import React,
      { Component } from 'react';

import './index.css'

class Languages extends Component {

  constructor( props )
  {

    super();

  }

  selectLanguage( cod )
  {

    localStorage.setItem( 'language', cod );
    window.location.reload();

  }

  processLanguages()
  {

    let { languages_texts } = this.props;
    let self = this;

    return languages_texts.map( ( language ) => {

      return (
        <li key={language.cod}
            onClick={ () => { self.selectLanguage( language.cod )} }>
          <i></i>
          <p>{language.name}</p>
        </li>
      );

    });

  }

  processActualLanguage()
  {

    let { languages_texts ,
          actual_language } = this.props;

    let language = "";

    for( let index in languages_texts ){

      if( languages_texts[ index ].cod == actual_language ){
        language = languages_texts[ index ].name;
      }

    }

    return language;

  }

  render() {

    return (
        <div data-container-language>
          <div data-actual-language>
            <i></i>
            <p>{this.processActualLanguage()}</p>
          </div>
          <ul data-list-languages>
            {this.processLanguages()}
          </ul>
        </div>
    );

  }

}
export default Languages;
