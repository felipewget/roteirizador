import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,
         Switch,
         Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import './assets/css/fonts.css';
import './assets/fonts/icomoon/style.css';
import './assets/css/style.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import Roteirizador   from './screens/Roteirizador';
import Register       from './screens/Register';
import Login          from './screens/Login';
import Page404        from './screens/Page404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={Register}        exact={true}  />
      <Route path="/login"    component={Login}           exact={true}  />
      <Route path="/"         component={Roteirizador}    exact={true}  />
      <Route path="*"         component={Page404}                         />
    </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
);

serviceWorker.unregister();
