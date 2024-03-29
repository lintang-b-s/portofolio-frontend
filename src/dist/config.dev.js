"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axiosInstance = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var axiosInstance = _axios["default"].create({
  baseURL: "https://api.lintangbs.my.id/"
});

exports.axiosInstance = axiosInstance;