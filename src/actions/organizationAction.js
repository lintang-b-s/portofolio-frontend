import {axiosInstance} from '../config.js'
import {
  ORGANIZATION_LIST_REQUEST,
  ORGANIZATION_LIST_SUCCESS,
  ORGANIZATION_LIST_FAIL,
  ORGANIZATION_DELETE_REQUEST,
  ORGANIZATION_DELETE_SUCCESS,
  ORGANIZATION_DELETE_FAIL,
  ORGANIZATION_UPDATE_REQUEST,
  ORGANIZATION_UPDATE_SUCCESS,
  ORGANIZATION_UPDATE_RESET,
  ORGANIZATION_UPDATE_FAIL,
  ORGANIZATION_CREATE_REQUEST,
  ORGANIZATION_CREATE_SUCCESS,
  ORGANIZATION_CREATE_FAIL,
  ORGANIZATION_DETAILS_REQUEST,
  ORGANIZATION_DETAILS_SUCCESS,
  ORGANIZATION_DETAILS_FAIL,
  
    
} from '../constants/organizationConstants'
import { logout } from "./userAction.js";


const req = `/admins/organizations`;


export const listOrganizations = () => async (dispatch) => {
    try {
        dispatch({
            type: ORGANIZATION_LIST_REQUEST
        });
        const { data } = await axiosInstance.get(`${req}`)

        dispatch({
            type: ORGANIZATION_LIST_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: ORGANIZATION_LIST_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listOrganizationDetails = (id) => async (dispatch) => {
    try{
        dispatch({
            type: ORGANIZATION_DETAILS_REQUEST
        });
        const { data } = await axiosInstance.get(`${req}/${id}`);
        dispatch({
            type: ORGANIZATION_DETAILS_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: ORGANIZATION_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const createNewOrganization = (organizationData) => async (dispatch, getState) => {
    try{
        dispatch({
            type: ORGANIZATION_CREATE_REQUEST
        });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axiosInstance.post(`${req}`, organizationData, config)

        dispatch({
            type: ORGANIZATION_CREATE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: ORGANIZATION_CREATE_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const deleteOrganization = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORGANIZATION_DELETE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        await axiosInstance.delete(`${req}/${id}`, config);
        dispatch({
            type: ORGANIZATION_DELETE_SUCCESS
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
          type: ORGANIZATION_DELETE_FAIL,
          payload: message,
        });
      }
    };



// update organization action
export const updateOrganization = (id, organizationData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORGANIZATION_UPDATE_REQUEST
        });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                
            
              "Content-Type": "multipart/form-data",
              "Accept": "application/json",
                "type": "formData",

              Authorization: `Bearer ${userInfo.token}`,
            },
          };
        
        const { data } = await axiosInstance.put(`${req}/${id}`, organizationData, config);
        dispatch({ 
            type: ORGANIZATION_UPDATE_SUCCESS,
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
          type: ORGANIZATION_UPDATE_FAIL,
          payload: message,
        });
      }
    };




    
















