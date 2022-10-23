"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = void 0;

var _userConstants = require("../constants/userConstants.js");

var _config = require("../config.js");

var req = "/users"; //login biasa

var login = function login(username, password) {
  return function _callee(dispatch) {
    var config, _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: _userConstants.USER_LOGIN_REQUEST
            });
            config = {
              headers: {
                "Content-Type": "application/json"
              }
            };
            _context.next = 5;
            return regeneratorRuntime.awrap(_config.axiosInstance.post("".concat(req, "/login"), {
              username: username,
              password: password
            }, config));

          case 5:
            _ref = _context.sent;
            data = _ref.data;
            dispatch({
              type: _userConstants.USER_LOGIN_SUCCESS,
              payload: data
            });
            localStorage.setItem("userInfo", JSON.stringify(data)); //menambahkan isi localstrogae userinfo dengan data(payload )

            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: _userConstants.USER_LOGIN_FAIL,
              payload: _context.t0.response && _context.t0.response.data.message ? _context.t0.response.data.message : _context.t0.message
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.login = login;

var logout = function logout() {
  return function (dispatch) {
    localStorage.removeItem("userInfo");
    dispatch({
      type: _userConstants.USER_LOGOUT
    });
    dispatch({
      type: _userConstants.USER_DETAILS_RESET
    });
  };
}; //tidak tau ini bisa gak
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


exports.logout = logout;