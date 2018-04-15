import { EMPLOYEES_FETCH_SUCCESS, EMPLOYEES_FETCH, LOGOUT } from '../actions/types';

const INITIAL_STATE = { employees: {}, loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH: return { ...state, loading: true };
    case EMPLOYEES_FETCH_SUCCESS: return { ...state, employees: action.payload, loading: false };
    case LOGOUT: return INITIAL_STATE;
    default: return state;
  }
};
