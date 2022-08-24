import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';
import { login, signup } from './redux/auth';

const user = {
  name: 'Solomon',
};

store.dispatch(signup(user));

store.dispatch(login(user));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
