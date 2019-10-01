import axios                from 'axios';
import  { URL_BACKEND }     from './../constants';

/**
 *  Cadastra um registro de rota
 *
 *  @param obj obj_route
 *
 *  @return json
 */
export const addRoute = async ( obj_route ) => {

    let auth_token = localStorage.getItem('auth_token');

    let response = await axios.post( URL_BACKEND + 'route/create', {
        token     : auth_token,
        obj_route : obj_route,
    });

    return response.data;

}


/**
 *  Lista minhas rotas
 *
 *  @return json
 */
export const listRoutes    = async () => {

  let auth_token = localStorage.getItem('auth_token');

  let response = await axios.get( URL_BACKEND + 'routes', {
    params: {
      token: auth_token,
    }
  });

  return response.data;

}
export const getRouteByid = () => {}
