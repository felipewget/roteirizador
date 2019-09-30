import React,
      { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class Block404 extends Component {

  constructor( props )
  {

    super();

  }

  render() {

    let { footer_texts, texts } = this.props;

    return (
      <div data-component="block-404">

        <div data-block>
          <h1>{texts.main_title}</h1>

          <p data-description>{texts.main_description}</p>
          <p data-description>{texts.suggestion_description}</p>

          <p data-link><span>Front-end:</span> <a target="_blank" href="https://github.com/felipewget/roteirizador">https://github.com/felipewget/roteirizador</a></p>
          <p data-link><span>Back-end:</span> <a target="_blank" href="https://github.com/felipewget/roteirizador">https://github.com/felipewget/roteirizador</a></p>

          <p data-or><span>{texts.or}</span></p>

          <Link to="/"><p data-link-back>{texts.link_login.text}</p></Link>
        </div>

      </div>
    );
  }
}
export default Block404;
