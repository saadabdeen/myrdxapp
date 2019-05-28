import { EMPLOYEES_FETCH_SUCCESS } from "../actions/types";

const INITIAl_STATE = {};

export default (state = INITIAl_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
