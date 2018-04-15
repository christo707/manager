import { EMPLOYEE_UPDATE,
         EMPLOYEE_CREATE,
         EMPLOYEE_EDITED,
         LOGOUT,
         EMPLOYEE_DELETED
     } from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE: return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE: return INITIAL_STATE;
    case EMPLOYEE_EDITED: return INITIAL_STATE;
    case EMPLOYEE_DELETED: return INITIAL_STATE;
    case LOGOUT: return INITIAL_STATE;
    default: return state;
  }
};
