import React,
      { Component } from 'react';

class Footer extends Component {

  constructor( props )
  {

    super();

  }

  render() {

    let { type,
          texts } = this.props;

    return (
      <div
        data-component="footer"
        data-type={ type  ? type  : "" } >

        <p>{texts.copy}</p>
        <i className="icon-home"></i>

      </div>
    );
  }
}
export default Footer;
