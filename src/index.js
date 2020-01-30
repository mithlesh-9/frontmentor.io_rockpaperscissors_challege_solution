import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';
import Logo from './assets/images/logo.svg'

import { store, persistor } from './redux/store';
import './index.scss';
const App = React.lazy(() => import('./App'))


const Loading = () => (
  <div className="loading">
    <img src={Logo} alt="logo" />
  </div>
)

ReactDOM.render(
  <Suspense fallback={<Loading/>}>
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
