import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/configureStore';
import { login } from './redux/auth';
import { fetchMotorcycles } from './redux/motorcycles/motorcycles';

const user = {
  name: 'Solomon',
};

store.dispatch(login(user));

store.dispatch(fetchMotorcycles());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
