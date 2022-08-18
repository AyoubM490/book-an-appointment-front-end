import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import motorcylesReducer from './motorcycles/motorcycles';
import authReducer from './auth';
import reservationsReducer from './reservations/reservations';

const reducer = combineReducers({
  motorcycle: motorcylesReducer,
  auth: authReducer,
  reservations: reservationsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
