import axios from 'axios'
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
    PROFILE_UPDATE_RESET
    
} from '../constants/profileConstants.js'
import { logout } from "./userAction.js"

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

        const { data } = await axios.get(`http://localhost:3001/api/admins/profiles/634e3d3e0efd4866c6062b35`, config);
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

        const { data } = await axios.get(`http://localhost:3001/api/about`)

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
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.put(`http://localhost:3001/api/admins/profiles/634e3d3e0efd4866c6062b35`, profile, config);
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


// export const createImagesProfile = 
//     (profileId, imagesObj) => async (dispatch, getState) => {
//         try{
//             dispatch({ type: PROFILE_CREATE_IMAGES_REQUEST });
//             const {
//                 userLogin: { userInfo },

//             } = getState();

//             const config = {
//                 headers: {
//                     Authorization: `Bearer ${userInfo.token}`,
//                 },
//             };

//             const { data } = await axios.post(
//                 `http://`
//             )
//         }
//     }