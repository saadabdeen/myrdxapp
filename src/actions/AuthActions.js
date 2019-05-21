import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, START_LOADING } from './types';
import { Actions } from "react-native-router-flux";

export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        text
    };
};
export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        text
    };
};

const loginUserSuccess =
    (dispatch, user) => {
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: user
        });
        Actions.main();
};

const loginUserError =
    (dispatch, error) => {
        //alert(error);
        dispatch({
            type: LOGIN_USER_ERROR,
            payload: error
        });
    };

export const loginUser = ({ email, password }) => {
    return dispatch => {
        dispatch({
            type: START_LOADING
        })
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((loginError) => {
                if (loginError.code == "auth/user-not-found") {
                    firebase
                        .auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(user => loginUserSuccess(dispatch, user))
                        .catch((createError) => loginUserError(dispatch, createError));
                } else {
                    loginUserError(dispatch, loginError)
                }
            });
    };
};