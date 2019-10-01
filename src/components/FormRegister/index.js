import React,
       { Component }            from 'react';
import { Link }                 from 'react-router-dom';
import {  register,
          login            }    from './../../actions/authAction';
import {  checkHasValue,
          checkPassword,
          checkEmail,
          checkFullName         } from './../../utils/formValidate';
import './../FormLogin/index.css';

class FormRegister extends Component {

  constructor( props )
  {

    super();

    this.state = {
      full_name : "",
      email     : "",
      password  : "",
      loading   : false,
      error     : ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  updateState( field, value )
  {

    this.setState({
      [field]: value
    })

  }

  validate()
  {

    let { email,
          password,
          full_name } = this.state;

    if( !checkHasValue( email ) || !checkHasValue( password ) || !checkHasValue( full_name ) ){

      return {
        validate: false,
        error   : "Todos os campos sao obrigatórios"
      }

    }

    if( !checkFullName( full_name )  ){

      return {
        validate: false,
        error   : "Digite seu nome completo"
      }

    }

    if( !checkEmail( email )  ){

      return {
        validate: false,
        error   : "Email Inválido"
      }

    }

    if( !checkPassword( password )  ){

      return {
        validate: false,
        error   : "password Inválido ( Deve conter pelo menos 8 caracteres )"
      }

    }

    return true;

  }

  async handleSubmit( e )
  {

    e.preventDefault();

    let { full_name,
          email,
          password } = this.state;

    let validation = this.validate();

    if( validation === true ){

      this.setState({
        loading: true,
      });

      let response = await register( full_name, email, password);

      if( response.success === true && response.metadata && response.metadata[0] && response.metadata[0]._id ){

        response = await login( email, password);

        if( response.success && response.metadata && response.metadata.authenticated === true ) {
          window.location.reload();
        } else {

          this.setState({
            error   : "Erro ao tentar logar, pela pagina de login",
            loading : false,
          })

        }

      } else {

        let error = response.error
                    ? response.error
                    : "Erro ao criar sua conta"

        this.setState({
          error   : error,
          loading : false,
        })

      }

    } else {

      this.setState({
        error   : validation.error,
        loading : false,
      })

    }

  }

  render()
  {

    let { email,
          password,
          loading,
          error,
          full_name     } = this.state;

    let { texts } = this.props;

    return (
      <div data-component="form-login">

        <form
          data-form-type={  loading === true  ? "loading" : ""  }
          onSubmit={this.handleSubmit}  >

          <div data-header>
            <i className="icon-map"></i>
            <h1>{texts.titleå}</h1>
          </div>

          <div data-field>
            <i className="icon-smiley"></i>
            <input
              type="text"
              value={full_name}
              onChange={ ( e ) => { this.updateState( "full_name", e.target.value ) }}
              placeholder={texts.form.full_name.placeholder}   />
          </div>

          <div data-field>
            <i className="icon-mail"></i>
            <input
              type="email"
              value={email}
              onChange={ ( e ) => { this.updateState( "email", e.target.value ) }}
              placeholder={texts.form.email.placeholder}   />
          </div>

          <div data-field>
            <i className="icon-key"></i>
            <input
              type="password"
              value={password}
              onChange={ ( e ) => { this.updateState( "password", e.target.value ) }}
              placeholder={texts.form.password.placeholder} />
          </div>

          {
            error && error !== ""
            ? (<p data-error>{error}</p>)
            : ""
          }

          <button data-submit>
            {texts.form.button_submit.text}
          </button>

          <Link to="/login"><p data-link>{texts.link_login.text}</p></Link>
        </form>

      </div>
    );

  }

}

export default FormRegister;
