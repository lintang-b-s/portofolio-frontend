import {axiosInstance } from '../config.js'
import {
    PROFILE_DETAILS_REQUEST,
    PROFILE_DETAILS_SUCCESS,
    PROFILE_DETAILS_FAIL,
    PROFILE_DETAILSONE_REQUEST,
    PROFILE_DETAILSONE_SUCCESS,
    PROFILE_DETAILSONE_FAIL,
    PROFILE_CREATE_TECHNOLOGIES_REQUEST,
    PROFILE_CREATE_TECHNOLOGIES_SUCCESS,
    PROFILE_CREATE_TECHNOLOGIES_FAIL,
    PROFILE_DELETE_TECHNOLOGIES_REQUEST,
    PROFILE_DELETE_TECHNOLOGIES_SUCCESS,
    PROFILE_DELETE_TECHNOLOGIES_FAIL,
    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_FAIL,
    PROFILE_UPDATE_RESET,

    PROJECT_CREATE_TECHNOLOGIES_REQUEST,
    PROJECT_CREATE_TECHNOLOGIES_SUCCESS,
    PROJECT_CREATE_TECHNOLOGIES_FAIL,
    PROJECT_DELETE_TECHNOLOGIES_REQUEST,
    PROJECT_DELETE_TECHNOLOGIES_SUCCESS,
    PROJECT_DELETE_TECHNOLOGIES_FAIL,
    
} from '../constants/profileConstants.js'
import { logout } from "./userAction.js"

const req = `/admins/profiles`;

//profile dg id (bukan list)  tapi obj
export const getProfileOneDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROFILE_DETAILSONE_REQUEST,
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

        const { data } = await axiosInstance.get(`${req}/6517b8092b9496c8f240218e`, config);
        dispatch({
            type: PROFILE_DETAILSONE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: PROFILE_DETAILSONE_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}


//list profile
export const profileDetail = () => async (dispatch) => {
    try {
        dispatch({ type: PROFILE_DETAILS_REQUEST })

        const { data } = await axiosInstance.get(`http://localhost:3001/api/about`)

        dispatch({
            type: PROFILE_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PROFILE_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const updateProfile = (profile) => async (dispatch, getState) => {
    try{
        dispatch({
            type: PROFILE_UPDATE_REQUEST,
        });
        const {
            userLogin: { userInfo } ,
        } = getState();

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axiosInstance.put(`${req}/6517b8092b9496c8f240218e`, profile, config);
        dispatch({ 
            type: PROFILE_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message = 
            error.response && error.response.data.message   
            ? error.response.data.message
            : error.message;
        if (message === "Not authorized, token failed"){
            dispatch(logout());
        }
        dispatch({
            type: PROFILE_UPDATE_FAIL,
            payload: message,
        })
    }
} 


//@desc untuk technoologies
export const createProfileTech = 
    ( techData) => async(dispatch,getState) => {
        try{
            dispatch({ type: PROFILE_CREATE_TECHNOLOGIES_REQUEST});
            const {
                userLogin: { userInfo },

            } = getState();

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${userInfo.token}`
                },
            };

            const { data } = await axiosInstance.post(`${req}/6517b8092b9496c8f240218e/technologies`, techData, config);
            dispatch({
                type: PROFILE_CREATE_TECHNOLOGIES_SUCCESS,
                payload: data,
            })

        } catch (error) {
            const message = 
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
            dispatch({
            type: PROFILE_CREATE_TECHNOLOGIES_FAIL,
            payload: message,
            });
        }
    }



export const deleteProfileTech = 
    ( techId)  => async(dispatch, getState) => {
        try {
            dispatch({ type: PROFILE_DELETE_TECHNOLOGIES_REQUEST });
            const {
                userLogin: { userInfo },

            } = getState();
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                },
            };
            const { data } = await axiosInstance.delete(
                `${req}/6517b8092b9496c8f240218e/${techId}`, config
            );
            dispatch({
                type: PROFILE_DELETE_TECHNOLOGIES_SUCCESS,
                payload: data
            });

        }catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PROFILE_DELETE_TECHNOLOGIES_FAIL,
        payload: message,
      });
    }
    }



