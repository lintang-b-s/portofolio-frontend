import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT
} from '../constants/userConstants.js';

//bisa aja error di sintanya, karena gak di log sama seklai error karena sintax

/*
A reducer is a function that receives the current state and an 
action object, decides how to update the state if necessary, and 
returns the new state: (state, action) => newState. You can think 
of a reducer as an event listener which 
handles events based on the received action (event) type.
*/

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { loading: true };
      case USER_LOGIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_LOGIN_FAIL:
        return { loading: false, error: action.payload };
      case USER_LOGOUT:
        return {};
        
      default:
        return state;
    }
  };


  