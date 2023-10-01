"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfileTech = exports.createProfileTech = exports.updateProfile = exports.profileDetail = exports.getProfileOneDetails = void 0;

var _config = require("../config.js");

var _profileConstants = require("../constants/profileConstants.js");

var _userAction = require("./userAction.js");

var req = "/admins/profiles"; //profile dg id (bukan list)  tapi obj

var getProfileOneDetails = function getProfileOneDetails(id) {
  return function _callee(dispatch, getState) {
    var _getState, userInfo, config, _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: _profileConstants.PROFILE_DETAILSONE_REQUEST
            });
            _getState = getState(), userInfo = _getState.userLogin.userInfo;
            config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(userInfo.token)
              }
            };
            _context.next = 6;
            return regeneratorRuntime.awrap(_config.axiosInstance.get("".concat(req, "/6517b8092b9496c8f240218e"), config));

          case 6:
            _ref = _context.sent;
            data = _ref.data;
            dispatch({
              type: _profileConstants.PROFILE_DETAILSONE_SUCCESS,
              payload: data
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: _profileConstants.PROFILE_DETAILSONE_FAIL,
              payload: _context.t0.response && _context.t0.response.data.message ? _context.t0.response.data.message : _context.t0.message
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
}; //list profile


exports.getProfileOneDetails = getProfileOneDetails;

var profileDetail = function profileDetail() {
  return function _callee2(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            dispatch({
              type: _profileConstants.PROFILE_DETAILS_REQUEST
            });
            _context2.next = 4;
            return regeneratorRuntime.awrap(_config.axiosInstance.get("https://api.lintangbs1.my.id/api/about"));

          case 4:
            _ref2 = _context2.sent;
            data = _ref2.data;
            dispatch({
              type: _profileConstants.PROFILE_DETAILS_SUCCESS,
              payload: data
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            dispatch({
              type: _profileConstants.PROFILE_DETAILS_FAIL,
              payload: _context2.t0.response && _context2.t0.response.data.message ? _context2.t0.response.data.message : _context2.t0.message
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.profileDetail = profileDetail;

var updateProfile = function updateProfile(profile) {
  return function _callee3(dispatch, getState) {
    var _getState2, userInfo, config, _ref3, data, message;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            dispatch({
              type: _profileConstants.PROFILE_UPDATE_REQUEST
            });
            _getState2 = getState(), userInfo = _getState2.userLogin.userInfo;
            config = {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer ".concat(userInfo.token)
              }
            };
            _context3.next = 6;
            return regeneratorRuntime.awrap(_config.axiosInstance.put("".concat(req, "/6517b8092b9496c8f240218e"), profile, config));

          case 6:
            _ref3 = _context3.sent;
            data = _ref3.data;
            dispatch({
              type: _profileConstants.PROFILE_UPDATE_SUCCESS,
              payload: data
            });
            _context3.next = 16;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            message = _context3.t0.response && _context3.t0.response.data.message ? _context3.t0.response.data.message : _context3.t0.message;

            if (message === "Not authorized, token failed") {
              dispatch((0, _userAction.logout)());
            }

            dispatch({
              type: _profileConstants.PROFILE_UPDATE_FAIL,
              payload: message
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
}; //@desc untuk technoologies


exports.updateProfile = updateProfile;

var createProfileTech = function createProfileTech(techData) {
  return function _callee4(dispatch, getState) {
    var _getState3, userInfo, config, _ref4, data, message;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            dispatch({
              type: _profileConstants.PROFILE_CREATE_TECHNOLOGIES_REQUEST
            });
            _getState3 = getState(), userInfo = _getState3.userLogin.userInfo;
            config = {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer ".concat(userInfo.token)
              }
            };
            _context4.next = 6;
            return regeneratorRuntime.awrap(_config.axiosInstance.post("".concat(req, "/6517b8092b9496c8f240218e/technologies"), techData, config));

          case 6:
            _ref4 = _context4.sent;
            data = _ref4.data;
            dispatch({
              type: _profileConstants.PROFILE_CREATE_TECHNOLOGIES_SUCCESS,
              payload: data
            });
            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            message = _context4.t0.response && _context4.t0.response.data.message ? _context4.t0.response.data.message : _context4.t0.message;
            dispatch({
              type: _profileConstants.PROFILE_CREATE_TECHNOLOGIES_FAIL,
              payload: message
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.createProfileTech = createProfileTech;

var deleteProfileTech = function deleteProfileTech(techId) {
  return function _callee5(dispatch, getState) {
    var _getState4, userInfo, config, _ref5, data, message;

    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            dispatch({
              type: _profileConstants.PROFILE_DELETE_TECHNOLOGIES_REQUEST
            });
            _getState4 = getState(), userInfo = _getState4.userLogin.userInfo;
            config = {
              headers: {
                Authorization: "Bearer ".concat(userInfo.token)
              }
            };
            _context5.next = 6;
            return regeneratorRuntime.awrap(_config.axiosInstance["delete"]("".concat(req, "/6517b8092b9496c8f240218e/").concat(techId), config));

          case 6:
            _ref5 = _context5.sent;
            data = _ref5.data;
            dispatch({
              type: _profileConstants.PROFILE_DELETE_TECHNOLOGIES_SUCCESS,
              payload: data
            });
            _context5.next = 15;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            message = _context5.t0.response && _context5.t0.response.data.message ? _context5.t0.response.data.message : _context5.t0.message;
            dispatch({
              type: _profileConstants.PROFILE_DELETE_TECHNOLOGIES_FAIL,
              payload: message
            });

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.deleteProfileTech = deleteProfileTech;