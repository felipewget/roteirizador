import React,
       { Component }            from 'react';
import Footer                   from './../../components/Footer';
import Languages                from './../../components/Languages';
import FormRoterizador          from './../../components/FormRoterizador';
import PreviewRoterizador       from './../../components/PreviewRoterizador';
import { getLanguage }          from './../../components/i18n';
import PerfectScrollbar         from 'react-perfect-scrollbar';
import { withScriptjs }         from 'react-google-maps';
import { loadDirections }       from './../../actions/mapAction';
import LoadingScreen            from './../../components/LoadingScreen';
import Map                      from './../../components/Map';
import TabHistory               from './components/TabHistory';
import {  isAuthenticated,
          loggout             } from './../../actions/authAction';
import {  addRoute,
          listRoutes        }   from './../../actions/routeAction';

/**
 *  Tela do Renderizador
 */
class Roteirizador extends Component {

  constructor( props )
  {

    super();

    let texts = getLanguage();

    this.state = {
      loading_page  : true,
      texts         : texts,
      arr_route     : [],
      directions    : [],
      arr_list_routes : []
    }

    this.updateMap    = this.updateMap.bind(this);

  }

  async componentDidMount()
  {

    document.title      = "Roteirizador"

    let auth_response   = await isAuthenticated( 'authenticated' );
    let routes_response = await listRoutes();

    if( auth_response.metadata && auth_response.metadata.authenticated === true ){

      this.setState({
        loading_page : false,
        arr_list_routes: routes_response.metadata
      });

    }

  }

  async updateMap( arr_route )
  {

    let { arr_list_routes } = this.state;

    let response        = await loadDirections( arr_route );
    let response_route  = await addRoute( arr_route );

    if( response_route.success ){

      arr_list_routes.unshift( response_route.metadata );

      this.setState({
        arr_route    : arr_route,
        arr_list_routes: arr_list_routes,
        directions   : response.metadata
      })

    }

  }

  renderPage = () => {

    let { texts,
          directions,
          arr_list_routes }           = this.state;
    let { footer, page_roteirizador } = texts;
    let MapLoader                     = withScriptjs(Map);

    return (
      <div>

        <div data-container-form>

          <PerfectScrollbar>

            <h1>{page_roteirizador.title}</h1>
            <button
              data-button-loggout
              className="icon-power_settings_new"
              onClick={ async () => {
                  await loggout();
                  window.location.reload();
                }}></button>

            <Languages
              languages_texts = { texts.all_languages }
              actual_language = { texts.language      } />

            <FormRoterizador
              funcUpdateMap = { this.updateMap  }
              texts         = { page_roteirizador.form_roteirizador } />

            <PreviewRoterizador
              directions  = { directions  }
              texts       = { page_roteirizador.preview_roteirizador  } />

          </PerfectScrollbar>

        </div>

        <TabHistory
          history_routes  = { arr_list_routes }
          texts           = { page_roteirizador.history_routes  } />

        <div data-container-maps>

          {
            <MapLoader
                  googleMapURL    = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBadM1YaUkhSp7Kki0F-Dj382ZxW-8VZxw"
                  loadingElement  = { <div /> }
                  directions      = { directions  } />
          }

        </div>

        <Footer
          texts={footer}/>

      </div>
    );

  }

  render() {

    let { loading_page } = this.state;

    return loading_page
            ? <LoadingScreen />
            : this.renderPage();;
  }
  
}

export default Roteirizador;
