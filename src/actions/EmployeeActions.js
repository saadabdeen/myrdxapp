import { EMPLOYEE_UPDATE,EMPLOYEE_SUCCESS,EMPLOYEE_FAILED,LOAD_ALL_EMPLOYEES } from "./types";
import { Actions } from "react-native-router-flux";
import firebase from 'firebase';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

const employeeSuccess =
    (dispatch, employee) => {
        dispatch({
            type: EMPLOYEE_SUCCESS,
            payload: employee
        });
        Actions.main();
        loadEmployees()(dispatch)
};

const employeeError =
    (dispatch, error) => {
        //alert(error);
        dispatch({
            type: EMPLOYEE_FAILED,
            payload: error
        });
    };

export const addEmployee = ({ name,phone,shift }) => {
    return dispatch => { 
        firebase
            .database()
            .ref("users").push().set({name,phone,shift})
            .then(() => {
                employeeSuccess(dispatch,{name,phone,shift})
            })
            .catch((dbError) => {
                alert(dbError)
                employeeError(dispatch, dbError)
            });
    };
};

export const loadEmployees = () =>{
    return dispatch => { 
        firebase
            .database()
            .ref("users").once('value')
            .then((data) => {
                dispatch({
                    type:LOAD_ALL_EMPLOYEES,
                    payload:data.val()
                })
            })
            .catch((dbError) => {
                alert(dbError)
                employeeError(dispatch, dbError)
            });
    };
}