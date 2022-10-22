"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _react = require("react");

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _reactRouterDom = require("react-router-dom");

var _reactImagesUploading = _interopRequireDefault(require("react-images-uploading"));

var _ImageUpload = _interopRequireDefault(require("../../components/shared/ImageUpload.js"));

var _formHook = require("../../customHooks/form-hook");

var _useGetProjectDetails = require("../../customHooks/useGetProjectDetails");

var _reactToastify = require("react-toastify");

var _projectAction = require("../../actions/projectAction.js");

var _ai = require("react-icons/ai");

var _profileAction = require("../../actions/profileAction.js");

var _activitiesConstants = require("../../constants/activitiesConstants.js");

var _organizationAction = require("../../actions/organizationAction.js");

var _useGetOrganizations2 = require("../../customHooks/useGetOrganizations.js");

var _useGetProjectDetails2 = require("../../customHooks/useGetProjectDetails.js");

var _activitiesAction = require("../../actions/activitiesAction.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NewActivitiesPage = function NewActivitiesPage() {
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
      description = _useState4[0],
      setDescription = _useState4[1];

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
      profileName = _useState10[0],
      setProfileName = _useState10[1];

  var _useState11 = (0, _react.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      affiliationName = _useState12[0],
      setAffiliationName = _useState12[1];

  var profileDetails = (0, _reactRedux.useSelector)(function (state) {
    return state.profileOneDetails;
  });
  var profile = profileDetails.profile;
  var userLogin = (0, _reactRedux.useSelector)(function (state) {
    return state.userLogin;
  });
  var userInfo = userLogin.userInfo;

  var _useGetOrganizations = (0, _useGetOrganizations2.useGetOrganizations)(),
      loadingListOrg = _useGetOrganizations.loading,
      errorListOrg = _useGetOrganizations.error,
      organizations = _useGetOrganizations.organizations;

  var activitiesCreate = (0, _reactRedux.useSelector)(function (state) {
    return state.activitiesCreate;
  });
  var loadingCreate = activitiesCreate.loading,
      errorCreate = activitiesCreate.error,
      successCreate = activitiesCreate.success;

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
    if (!userInfo) navigate("/admin");

    if (successCreate) {
      dispatch({
        type: ACTIVITIES_CREATEE_RESET
      });
      navigate("/admin/activities");
    }

    if (!activities) {
      dispatch((0, _activitiesAction.listActivities)());
    }

    if (profile.name != "Lintang Birda Saputra") {
      dispatch((0, _profileAction.getProfileOneDetails)("settings"));
    }

    setProfileName(profile._id);
  }, [dispatch, id, profile, activities]);

  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.set("name", name);
    formData.set("description", description);
    formData.set("date1", date1);
    formData.set("date2", date2);
    formData.set("profile", profileName);
    formData.set("affiliation", affiliationName);
    dispatch((0, _activitiesAction.createNewActivities)(formData));
  };
};