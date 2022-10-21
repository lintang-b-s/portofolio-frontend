"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _react = require("react");

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _reactRouterDom = require("react-router-dom");

var _reactImagesUploading = _interopRequireDefault(require("react-images-uploading"));

var _ImageUpload = _interopRequireDefault(require("../../components/shared/ImageUpload.js"));

var _formHook = require("../../customHooks/form-hook");

var _organizationConstants = require("../../constants/organizationConstants.js");

var _organizationAction = require("../../actions/organizationAction.js");

var _useGetOrganizationDetails = require("../../customHooks/useGetOrganizationDetails.js");

var _useGetProjects2 = require("../../customHooks/useGetProjects.js");

var _projectAction = require("../../actions/projectAction.js");

var _profileAction = require("../../actions/profileAction.js");

var _useGetActivities2 = require("../../customHooks/useGetActivities.js");

var _activitiesAction = require("../../actions/activitiesAction.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NewOrganizationPage = function NewOrganizationPage() {
  var dispatch = (0, _reactRedux.useDispatch)();

  var _useParams = (0, _reactRouter.useParams)(),
      id = _useParams.id;

  var navigate = (0, _reactRouter.useNavigate)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      date1 = _useState6[0],
      setDate1 = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      date2 = _useState8[0],
      setDate2 = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      images = _useState10[0],
      setImages = _useState10[1];

  var _useState11 = (0, _react.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      activitiesName = _useState12[0],
      setActivitiesName = _useState12[1];

  var _useState13 = (0, _react.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      projectsName = _useState14[0],
      setProjectsName = _useState14[1];

  var _useState15 = (0, _react.useState)(''),
      _useState16 = _slicedToArray(_useState15, 2),
      profileName = _useState16[0],
      setProfileName = _useState16[1];

  var profileDetails = (0, _reactRedux.useSelector)(function (state) {
    return state.profileOneDetails;
  });
  var profile = profileDetails.profile;
  var userLogin = (0, _reactRedux.useSelector)(function (state) {
    return state.userLogin;
  });
  var userInfo = userLogin.userInfo;

  var _useGetActivities = (0, _useGetActivities2.useGetActivities)(),
      loadingListActv = _useGetActivities.loading,
      errorListActv = _useGetActivities.error,
      activities = _useGetActivities.activities;

  var _useGetProjects = (0, _useGetProjects2.useGetProjects)(),
      loadingListPrj = _useGetProjects.loading,
      errorListPrj = _useGetProjects.error,
      projects = _useGetProjects.projects;

  var organizationCreate = (0, _reactRedux.useSelector)(function (state) {
    return state.organizationCreate;
  });
  var loadingCreate = organizationCreate.loading,
      errorCreate = organizationCreate.error,
      successCreate = organizationCreate.success;

  var _useForm = (0, _formHook.useForm)({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false),
      _useForm2 = _slicedToArray(_useForm, 3),
      formState = _useForm2[0],
      inputHandler = _useForm2[1],
      setFormData = _useForm2[2];

  (0, _react.useEffect)(function () {
    if (successCreate) {
      dispatch({
        type: _organizationConstants.ORGANIZATION_CREATE_RESET
      });
      navigate("/admin/organizations");
    }

    if (!activities) {
      dispatch((0, _activitiesAction.listActivities)());
    }

    if (!projects) {
      dispatch((0, _projectAction.listProjects)());
    }

    if (profile.name != "Lintang Birda Saputra") {
      dispatch((0, _profileAction.getProfileOneDetails)("settings"));
    }

    setProfileName(profile._id);
  }, [dispatch, id, activities, projects, profile]);

  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.set("name", name);
    formData.set("position", position);
    formData.set("date1", date1);
    formData.set("date2", date2);

    if (formState.inputs.images) {
      formData.append("images", formState.inputs.images.value);
    }

    formData.set("activities", activitiesName);
    formData.set("projects", projectsName);
    formData.set("profile", profileName);
  };
};