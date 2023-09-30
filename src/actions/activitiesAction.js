import {axiosInstance} from '../config.js'
import {
  ACTIVITIES_LIST_REQUEST,
  ACTIVITIES_LIST_SUCCESS,
  ACTIVITIES_LIST_FAIL,
  ACTIVITIES_DELETE_REQUEST,
  ACTIVITIES_DELETE_SUCCESS,
  ACTIVITIES_DELETE_FAIL,
  ACTIVITIES_UPDATE_REQUEST,
  ACTIVITIES_UPDATE_SUCCESS,
  ACTIVITIES_UPDATE_RESET,
  ACTIVITIES_UPDATE_FAIL,
  ACTIVITIES_CREATE_REQUEST,
  ACTIVITIES_CREATE_SUCCESS,
  ACTIVITIES_CREATE_FAIL,
  ACTIVITIES_DETAILS_REQUEST,
  ACTIVITIES_DETAILS_SUCCESS,
  ACTIVITIES_DETAILS_FAIL,
  
    
} from '../constants/activitiesConstants'
import { logout } from "./userAction.js";



const req = `/admins/activities`


export const listActivities= () => async (dispatch) => {
    try {
      dispatch({
        type: ACTIVITIES_LIST_REQUEST,
      });
      const { data } = await axiosInstance.get(`${req}`);

      dispatch({
        type: ACTIVITIES_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ACTIVITIES_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };



  export const listActivitiesDetails = (id) => async (dispatch) => {
    try {
      dispatch({
        type: ACTIVITIES_DETAILS_REQUEST,
      });
      const { data } = await axiosInstance.get(`${req}/${id}`);
      dispatch({
        type: ACTIVITIES_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ACTIVITIES_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };





  export const createNewActivities = (activitiesData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ACTIVITIES_CREATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axiosInstance.post(`${req}`, activitiesData, config);
  
      dispatch({
        type: ACTIVITIES_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ACTIVITIES_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };




  export const deleteActivities = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ACTIVITIES_DELETE_REQUEST,
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
        type: ACTIVITIES_DELETE_SUCCESS,
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
        type: ACTIVITIES_DELETE_FAIL,
        payload: message,
      });
    }
  };



  export const updateActivities = (id, activitiesData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ACTIVITIES_UPDATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
         "Content-Type": "application/json",
          // "Content-Type": "multipart/form-data",
          // "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`
        },
      };
      //500 status code : url yang di put gak ada
      const { data } = await axiosInstance.put(`${req}/${id}`, activitiesData, config);
      dispatch({
        type: ACTIVITIES_UPDATE_SUCCESS,
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
        type: ACTIVITIES_UPDATE_FAIL,
        payload: message,
      });
    }
  };




