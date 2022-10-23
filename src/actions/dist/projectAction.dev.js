"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProject = exports.deleteProject = exports.createNewProject = exports.listProjectDetails = exports.listProjects = void 0;

var _config = require("../config.js");

var _projectConstants = require("../constants/projectConstants");

var _userAction = require("./userAction.js");

var req = "/admins/projects";

var listProjects = function listProjects() {
  return function _callee(dispatch) {
    var _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: _projectConstants.PROJECT_LIST_REQUEST
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(_config.axiosInstance.get("".concat(req)));

          case 4:
            _ref = _context.sent;
            data = _ref.data;
            dispatch({
              type: _projectConstants.PROJECT_LIST_SUCCESS,
              payload: data
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: _projectConstants.PROJECT_LIST_FAIL,
              payload: _context.t0.response && _context.t0.response.data.message ? _context.t0.response.data.message : _context.t0.message
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.listProjects = listProjects;

var listProjectDetails = function listProjectDetails(id) {
  return function _callee2(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            dispatch({
              type: _projectConstants.PROJECT_DETAILS_REQUEST
            });
            _context2.next = 4;
            return regeneratorRuntime.awrap(_config.axiosInstance.get("".concat(req, "/").concat(id)));

          case 4:
            _ref2 = _context2.sent;
            data = _ref2.data;
            dispatch({
              type: _projectConstants.PROJECT_DETAILS_SUCCESS,
              payload: data
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            dispatch({
              type: _projectConstants.PROJECT_DETAILS_FAIL,
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

exports.listProjectDetails = listProjectDetails;

var createNewProject = function createNewProject(projectData) {
  return function _callee3(dispatch, getState) {
    var _getState, userInfo, config, _ref3, data;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            dispatch({
              type: _projectConstants.PROJECT_CREATE_REQUEST
            });
            _getState = getState(), userInfo = _getState.userLogin.userInfo;
            config = {
              headers: {
                Authorization: "Bearer ".concat(userInfo.token)
              }
            };
            _context3.next = 6;
            return regeneratorRuntime.awrap(_config.axiosInstance.post("".concat(req), projectData, config));

          case 6:
            _ref3 = _context3.sent;
            data = _ref3.data;
            dispatch({
              type: _projectConstants.PROJECT_CREATE_SUCCESS,
              payload: data
            });
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            dispatch({
              type: _projectConstants.PROJECT_CREATE_FAIL,
              payload: _context3.t0.response && _context3.t0.response.data.message ? _context3.t0.response.data.message : _context3.t0.message
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.createNewProject = createNewProject;

var deleteProject = function deleteProject(id) {
  return function _callee4(dispatch, getState) {
    var _getState2, userInfo, config, message;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            dispatch({
              type: _projectConstants.PROJECT_DELETE_REQUEST
            });
            _getState2 = getState(), userInfo = _getState2.userLogin.userInfo;
            config = {
              headers: {
                Authorization: "Bearer ".concat(userInfo.token)
              }
            };
            _context4.next = 6;
            return regeneratorRuntime.awrap(_config.axiosInstance["delete"]("".concat(req, "/").concat(id), config));

          case 6:
            dispatch({
              type: _projectConstants.PROJECT_DELETE_SUCCESS
            });
            _context4.next = 14;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            message = _context4.t0.response && _context4.t0.response.data.message ? _context4.t0.response.data.message : _context4.t0.message;

            if (message === "Not authorized, token failed") {
              dispatch((0, _userAction.logout)());
            }

            dispatch({
              type: _projectConstants.PROJECT_DELETE_FAIL,
              payload: message
            });

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.deleteProject = deleteProject;

var updateProject = function updateProject(id, projectData) {
  return function _callee5(dispatch, getState) {
    var _getState3, userInfo, config, _ref4, data, message;

    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            dispatch({
              type: _projectConstants.PROJECT_UPDATE_REQUEST
            });
            _getState3 = getState(), userInfo = _getState3.userLogin.userInfo;
            config = {
              headers: {
                "enctype": "multipart/form-data",
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer ".concat(userInfo.token)
              }
            }; //500 status code : url yang di put gak ada

            _context5.next = 6;
            return regeneratorRuntime.awrap(_config.axiosInstance.put("".concat(req, "/").concat(id), projectData, config));

          case 6:
            _ref4 = _context5.sent;
            data = _ref4.data;
            dispatch({
              type: _projectConstants.PROJECT_UPDATE_SUCCESS,
              payload: data
            });
            _context5.next = 16;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            message = _context5.t0.response && _context5.t0.response.data.message ? _context5.t0.response.data.message : _context5.t0.message;

            if (message === "Not authorized, token failed") {
              dispatch((0, _userAction.logout)());
            }

            dispatch({
              type: _projectConstants.PROJECT_UPDATE_FAIL,
              payload: message
            });

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
}; // export const createProjectImages = (projectId, imagesObj) => 
//   async(dispatch, getState) => {
//     try {
//       dispatch({ type: PROJECT_CREATE_IMAGES_REQUEST });
//       const {
//         userLogin: { userInfo },
//       } = getState();
//       const config = {
//         headers: {
//           Authorization: `Bearer ${userInfo.token}`,
//         },
//       };
//       const { data } = await axiosInstance.post(
//         `${req}/${projectId}/images`,
//         imagesObj,
//         config
//       );
//       dispatch({
//         type: PROJECT_CREATE_IMAGES_SUCCESS,
//         payload: data,
//       })
//     } catch (error) {
//       const message =
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message;
//       dispatch({
//         type: PROJECT_CREATE_IMAGES_FAIL,
//         payload: message,
//       });
//     }
//   }
// export const deleteProjectImages =
//   (projectId, imagesId) => async (dispatch, getState) => {
//     try {
//       dispatch({ type: PROJECT_DELETE_IMAGES_REQUEST });
//       const {
//         userLogin: { userInfo },
//       } = getState();
//       const config = {
//         headers: {
//           Authorization: `Bearer ${userInfo.token}`,
//         },
//       };
//       const { data } = await axiosInstance.delete(
//         `${req}/${projectId}/${imagesId}`,
//         config
//       );
//       dispatch({
//         type: PROJECT_DELETE_IMAGES_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       const message =
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message;
//       dispatch({
//         type: PROJECT_DELETE_IMAGES_FAIL,
//         payload: message,
//       });
//     }
//   };


exports.updateProject = updateProject;