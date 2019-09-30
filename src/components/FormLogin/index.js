import React,
       { Component }          from 'react';
import { Link }               from 'react-router-dom';
import {  login             } from './../../actions/authAction';

import './index.css';

class FormLogin extends Component {

  constructor( props )
  {

    super();

    this.state = {
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

  async handleSubmit( e )
  {

    let { email,
          password } = this.state;


    e.preventDefault();

    this.setState({
      loading: true,
    })

    let response = await login( email, password);

    if( response.success && response.metadata && response.metadata.authenticated === true ) {
      window.location.reload();
    } else {

      this.setState({
        error: "Login/Senha Incorretos",
        loading: false,
      })
    }


  }

  render()
  {

    let { email,
          password,
          loading,
          error     } = this.state;

    let { texts } = this.props;

    return (
      <div data-component="form-login">

        <form
          onSubmit={this.handleSubmit}
          data-form-type={
            loading === true
            ? "loading"
            : ""
          } >
          <div data-header>
            <i className="icon-map"></i>
            <h1>{texts.title}</h1>
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
              placeholder={texts.form.password.placeholder}/>
          </div>

          {
            error && error !== ""
            ? (<p data-error>{error}</p>)
            : ""
          }

          <button data-submit>
            {texts.form.button_submit.text}
          </button>

          <Link to="/register"><p data-link>{texts.link_register.text}</p></Link>
        </form>

      </div>
    );

  }

}

export default FormLogin;
