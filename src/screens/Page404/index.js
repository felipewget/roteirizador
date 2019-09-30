import React,
       { Component }            from 'react';
import Footer                   from './../../components/Footer';
import { getLanguage }          from './../../components/i18n';
import Block404                 from './../../components/Block404';

import Particles from 'react-particles-js';

let particles_settings = {
      particles: {
        number: {
          value: 80
        },
        size: {
          value: 2
        },
        line_linked: {
          shadow: {
            enable: true,
            color: "#555",
            blur: 1
          }
        }
      }
    };

class Page404 extends Component {

  constructor( props )
  {

    super();

    let texts = getLanguage();

    this.state = {
      texts: texts
    }

  }

  componentDidMount(){
    document.title = "Roteirizador | 404"
  }

  render() {

    let { texts }  = this.state;
    let { footer, page_404 } = texts;

    return (
      <div>
        <Particles
          params={ particles_settings } />

        <Block404
          texts={page_404}/>

        <Footer
          type="resize-fixed"
          texts={footer}/>

      </div>
    );
  }
}

export default Page404;
