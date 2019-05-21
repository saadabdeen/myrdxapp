import { EMPLOYEE_UPDATE,EMPLOYEE_FAILED,LOAD_ALL_EMPLOYEES } from "../actions/types";

const INITIAL_STATE = { name: "", phone: "", shift: "",error:"",employees:{} };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE: 
            // action.payload === {prop: 'name, value: 'zahid'}
            // [action.payload.prop] is the key interpolation ie it will be decided at the run time
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_FAILED:
            return { ...state, error: action.payload };
        case LOAD_ALL_EMPLOYEES:
            return { ...state, employees: action.payload };
        default:
            return state;
    }
};
