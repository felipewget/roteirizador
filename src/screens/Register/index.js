import React,
       { Component }            from 'react';
import Footer                   from './../../components/Footer';
import FormRegister             from './../../components/FormRegister';
import { getLanguage }          from './../../components/i18n';
import LoadingScreen            from './../../components/LoadingScreen';
import {  isAuthenticated     } from './../../actions/authAction';

/**
 *  Tela de Registrp
 */
class Login extends Component {

  constructor( props )
  {

    super();

    let texts = getLanguage();

    this.state = {
      loading_page: true,
      texts: texts
    }

  }

  async componentDidMount(){

    document.title = "Roteirizador | Register"

    let auth_response = await isAuthenticated( 'no_authenticated' );

    if( auth_response.metadata && auth_response.metadata.authenticated === false ){

      this.setState({
        loading_page : false
      });

    }

  }

  renderPage = () => {

    let { texts } = this.state;
    let { footer, page_register } = texts;

    return(
      <div>

        <FormRegister
          texts={page_register} />

        <Footer
          type="resize-fixed"
          texts={footer}  />

      </div>
    )

  }

  render()
  {

    let { loading_page } = this.state;

    return loading_page
            ? <LoadingScreen />
            : this.renderPage();

  }

}

export default Login;
