import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from '../constants/userConstants.js';

import {axiosInstance } from '../config.js'

//kira kira salahe di 

const req = "/users";

//login biasa
export const login = (username, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.post(
        `${req}/login`,
        {
          username,
          password,
        },
        config
      );
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));//menambahkan isi localstrogae userinfo dengan data(payload )
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };






  export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
    // dispatch({ type: USER_DETAILS_RESET });
  };

  




//tidak tau ini bisa gak

// export const getUserDetails = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_DETAILS_REQUEST,
//     });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };
//     const { data } = await axiosInstance.get(`${req}/${id}`, config);
//     dispatch({
//       type: USER_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: USER_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };