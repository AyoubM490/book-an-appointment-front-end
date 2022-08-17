export const FETCH_MOTORCYCLES = 'BOOK-APPOINTMENT/MOTORCYCLES/FETCH_MOTORCYCLES';
export const CREATE_MOTORCYCLE = 'BOOK-APPOINTMENT/MOTORCYCLES/CREATE_MOTORCYCLE';
export const DELETE_MOTORCYCLE = 'BOOK-APPOINTMENT/MOTORCYCLES/DELETE_MOTORCYCLE';
export const FETCH_SINGLE_MOTORCYCLE = 'BOOK-APPOINTMENT/MOTORCYCLES/FETCH_SINGLE_MOTORCYCLE';

export const fetchMotorcycles = (payload) => ({
  type: FETCH_MOTORCYCLES,
  payload,
});

export const createMotorcycle = (payload) => ({
  type: CREATE_MOTORCYCLE,
  payload,
});

export const deleteMotorcycle = (payload) => ({
  type: DELETE_MOTORCYCLE,
  payload,
});

export const fetchSingleMotorcycle = (payload) => ({
  type: FETCH_SINGLE_MOTORCYCLE,
  payload,
});

const initialState = {
  motorcycles: [],
  motorcycle: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOTORCYCLES:
      return action.payload;
    case CREATE_MOTORCYCLE:
      return [...state, action.payload];
    case DELETE_MOTORCYCLE:
      return state.filter((motorcycle) => motorcycle.id !== action.payload);
    case FETCH_SINGLE_MOTORCYCLE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
