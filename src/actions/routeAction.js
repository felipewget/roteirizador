import axios from 'axios';

export const addRoute = async ( obj_route ) => {

    let auth_token = localStorage.getItem('auth_token');

    let response = await axios.post('http://localhost:8080/route/create', {
        token     : auth_token,
        obj_route : obj_route,
    });

    return response.data;

}

export const listRoutes    = async () => {

  let auth_token = localStorage.getItem('auth_token');

  let response = await axios.get('http://localhost:8080/routes', {
    params: {
      token: auth_token,
    }
  });

  return response.data;

}
export const getRouteByid = () => {}
