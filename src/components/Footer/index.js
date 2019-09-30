import React,
      { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {

  constructor( props )
  {

    super();

  }

  render() {

    let { footer_texts, type, texts } = this.props;

    return (
      <div
        data-component="footer"
        data-type={ type
                      ? type
                      : ""  } >

          <p>{texts.copy}</p>
          <i className="icon-home"></i>

      </div>
    );
  }
}
export default Footer;
