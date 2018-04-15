import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_EDITED,
  LOGOUT,
  EMPLOYEE_DELETED
 } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return ({
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  });
};

export const employeeCreateStart = () => {
  return ({
    type: EMPLOYEE_CREATE
  });
};


export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({
          type: EMPLOYEE_CREATE
        });
        Actions.pop();
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: EMPLOYEES_FETCH });
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
    Actions.auth({ type: 'reset' });
  };
};

export const employeeEdit = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        console.log('EDIT');
        dispatch({
          type: EMPLOYEE_EDITED
        });
        Actions.pop();
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        console.log('EDIT');
        dispatch({
          type: EMPLOYEE_DELETED
        });
        Actions.main({ type: 'reset' });
      });
  };
};
