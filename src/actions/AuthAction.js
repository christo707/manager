import firebase from 'firebase';
import { Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED,
   PASSWORD_CHANGED,
   LOGIN_USER_SUCCESS,
   LOGIN_USER,
   LOGIN_USER_FAIL
} from './types';

export const emailChange = (email) => ({
    type: EMAIL_CHANGED,
    payload: email
  });

export const passwordChange = (pass) => ({
      type: PASSWORD_CHANGED,
      payload: pass
    });

export const loginUser = ({ email, password }) => {
  Keyboard.dismiss();
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return (dispatch) => {
    if (email === '') {
      loginUserFail('Email cannot be empty', dispatch);
    } else if (!email.match(mailformat)) {
      loginUserFail('Not a vaild Email', dispatch);
    } else if (password === '') {
      loginUserFail('Password cannot be empty', dispatch);
    } else {
      dispatch({ type: LOGIN_USER });
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => { loginUserSuccess(dispatch, user); })
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => { loginUserSuccess(dispatch, user); })
            .catch(error => loginUserFail((error.code).substring(5), dispatch));
        });
    }
  };
};

const loginUserFail = (error, dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error
  });
};


const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};
