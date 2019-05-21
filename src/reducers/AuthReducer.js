import {EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS,LOGIN_USER_ERROR,START_LOADING} from '../actions/types';
const INITIAL_STATE = { email : "",password:"",loading:false,error:"",user:null};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state,email:action.text};
        case PASSWORD_CHANGED:
            return {...state,password:action.text};
        case START_LOADING:
            return {...state,loading:true,error:""};
        case LOGIN_USER_SUCCESS:
            return {...state,user:action.payload,loading:false};
        case LOGIN_USER_ERROR:
            return {...state,error:action.payload.message,loading:false};
        default:
            return state;
    }
};