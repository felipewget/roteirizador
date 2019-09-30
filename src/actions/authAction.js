import axios from 'axios';

export const isAuthenticated = async ( type = "" ) => {

  let auth_token = localStorage.getItem('auth_token');

  if( auth_token === undefined || auth_token === null || auth_token === "" ){

    if( type === 'authenticated') {
        window.location.href="/login"
    }

    return {
      success: true,
      metadata: {
        authenticated: false
      }
    }

  }

  let response = await axios.get('http://localhost:8080/auth', {
    params: {
      token: auth_token,
    }
  });

  if( response.data.success && response.data.metadata && response.data.metadata.authenticated === true ){

      if( type === 'no_authenticated') {
          window.location.href="/"
      }

      return {
        success: true,
        metadata: {
          authenticated: true
        }
      }

  } else {

    localStorage.removeItem('auth_token');

    if( type === 'authenticated') {
        window.location.href="/login"
    }

    return {
      success: true,
      metadata: {
        authenticated: false
      }
    }


  }


}

export const login = async ( login, password ) => {

  let response = await axios.post('http://localhost:8080/auth', {
      login: login,
      password: password
  });

  if( response.data.success && response.data.metadata && response.data.metadata.authenticated === true ){

      localStorage.setItem('auth_token', response.data.metadata.token );

  }

  return response.data;

}

export const loggout = async () => {

  let auth_token = localStorage.getItem('auth_token');

  let response = await axios.delete('http://localhost:8080/auth', {
      params: {
        token: auth_token
      }
  });

  return response.data;

}

export const register = async ( full_name, login, password ) => {

  let response = await axios.post('http://localhost:8080/register', {
        name: full_name,
        login: login,
        password: password
  });

  return response.data;

}
