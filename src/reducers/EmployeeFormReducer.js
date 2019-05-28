import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from "../actions/types";

const INITIAL_STATE = { name: "", phone: "", shift: "" }; //we can init the shift with Monday to solve the error

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //  action.payload === {prop: 'name, value: 'zahid'}
      // [action.payload.prop] is the key interpolation ie it will be decided at the run time
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
