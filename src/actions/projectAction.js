import {axiosInstance } from '../config.js'
import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_RESET,
  PROJECT_UPDATE_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,
  
    
} from '../constants/projectConstants'
import { logout } from "./userAction.js";


const req = `/admins/projects`

export const listProjects = () => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_LIST_REQUEST,
    });
    const { data } = await axiosInstance.get(`${req}`);
    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



export const listProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_DETAILS_REQUEST,
    });
    const { data } = await axiosInstance.get(`${req}/${id}`);
    dispatch({
      type: PROJECT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNewProject = (projectData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_CREATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axiosInstance.post(`${req}`, projectData, config);

    dispatch({
      type: PROJECT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProject = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_DELETE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
  

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axiosInstance.delete(`${req}/${id}`, config);
    dispatch({
      type: PROJECT_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PROJECT_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateProject = (id, projectData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_UPDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "enctype":"multipart/form-data",
        "Content-Type": "multipart/form-data",
      
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    //500 status code : url yang di put gak ada
    const { data } = await axiosInstance.put(`${req}/${id}`, projectData, config);
    dispatch({
      type: PROJECT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PROJECT_UPDATE_FAIL,
      payload: message,
    });
  }
};


// export const createProjectImages = (projectId, imagesObj) => 
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