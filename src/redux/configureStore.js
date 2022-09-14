import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import ReduxThunk from 'redux-thunk';
import authReducer from './auth';
import motorcyclesReducer from './motorcycles/motorcycles';
import reservationsReducer from './reservations/reservations';

export const middlewares = [ReduxThunk];

export const rootReducer = combineReducers({
  motorcycles: motorcyclesReducer,
  auth: authReducer,
  reservations: reservationsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
