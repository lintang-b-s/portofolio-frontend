"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _profileReducers = require("./reducers/profileReducers");

var _projectReducers = require("./reducers/projectReducers");

var _organizationReducer = require("./reducers/organizationReducer.js");

var _activitiesReducers = require("./reducers/activitiesReducers.js");

var _userReducers = require("./reducers/userReducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducer = (0, _redux.combineReducers)({
  profileDetails: _profileReducers.profileDetailReducer,
  profileOneDetails: _profileReducers.profileOneDetailsReducer,
  profileUpdate: _profileReducers.profileUpdateReducer,
  profileTechnologiesCreate: _profileReducers.profiletTechnologiesCreateReducer,
  profileDeleteTechnologies: _profileReducers.profileDeleteTechnologiesReducer,
  projectCreate: _projectReducers.projectCreateReducer,
  projectDelete: _projectReducers.projectDeleteReducer,
  projectDetails: _projectReducers.projectDetailsReducer,
  projectList: _projectReducers.projectListReducer,
  projectUpdate: _projectReducers.projectUpdateReducer,
  userLogin: _userReducers.userLoginReducer,
  organizationDetails: _organizationReducer.organizationDetailsReducer,
  organizationCreate: _organizationReducer.organizationCreateReducer,
  organizationDelete: _organizationReducer.organizationDeleteReducer,
  organizationList: _organizationReducer.organizationListReducer,
  organizationUpdate: _organizationReducer.organizationUpdateReducer,
  activitiesDetails: _activitiesReducers.activitiesDetailsReducer,
  activitiesCreate: _activitiesReducers.activitiesCreateReducer,
  activitiesDelete: _activitiesReducers.activitiesDeleteReducer,
  activitiesList: _activitiesReducers.activitiesListReducer,
  activitiesUpdate: _activitiesReducers.activitiesUpdateReducer
});
var userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null; //kalo userlogin nnull berarti emang belum difecth api/users/login nya
//kalo userlogin gak ada di state berarti error di script reduxnya
//erornya dimana?

var initialState = {
  userLogin: {
    userInfo: userInfoFromStorage
  }
};
var middleware = [_reduxThunk["default"], _reduxLogger["default"]];
var store = (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(void 0, middleware)));
var _default = store;
exports["default"] = _default;