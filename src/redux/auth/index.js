import API from '../api';

export const loadCurrentUser = (state) => state.auth.currentUser;

const LOAD_CURRENT_USER = 'auth/current_user';
const RESET = 'auth/reset';

export const setCurrentUser = (payload) => ({
  type: LOAD_CURRENT_USER,
  payload,
});

export const login = (payload) => async (dispatch) => {
  const response = await API.login(payload);
  dispatch(setCurrentUser(response));
};

export const logout = () => async (dispatch) => {
  await API.logout();
  dispatch(setCurrentUser(null));
};

export const signup = (payload) => async (dispatch) => {
  const response = await API.register(payload);
  dispatch(setCurrentUser(response));
};

const initialState = {
  currentUser: null,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENT_USER:
      return action.payload;
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
