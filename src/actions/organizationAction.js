<<<<<<< HEAD
import axios from 'axios'
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


const req = `http://localhost:3001/api/admins/organizations`;


export const listOrganizations = () => async (dispatch) => {
    try {
        dispatch({
            type: ORGANIZATION_LIST_REQUEST
        });
        const { data } = await axios.get(`${req}`)

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
        const { data } = await axios.get(`${req}/${id}`);
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

        const { data } = await axios.post(`${req}`, organizationData, config)

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

        await axios.delete(`${req}/${id}`, config);
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
                "enctype":"multipart/form-data",
                // "Accept": "application/json",
              "Content-Type": "multipart/form-data",
                // "Content-Type": "application/json",
              // "Content-type": "multipart/form-data",
            //   kalo content type app/json req body bisa kecuali di affiliation,profile, projects
              Authorization: `Bearer ${userInfo.token}`,
            },
          };
        
        const { data } = await axios.put(`${req}/${id}`, organizationData, config);
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




    
















=======
// import axios from 'axios'
// import {
//     ORGANIZATION_LIST_REQUEST,
//     ORGANIZATION_LIST_SUCCESS,
//     ORGANIZATION_LIST_FAIL,
//     ORGANIZATION_DETAILS_REQUEST,
//     ORGANIZATION_DETAILS_SUCCESS,
//     ORGANIZATION_DETAILS_FAIL,
    
// } from '../constants/organizationConstants'

// const req = `http://localhost:3001/api/organizations`

// export const listOrganizations = () => async (dispatch) => {
//     try {
//       dispatch({
//         type: ORGANIZATION_LIST_REQUEST,
//       });
//       const { data } = await axios.get(`${req}/getAllOrganization`);
//       dispatch({
//         type: ORGANIZATION_LIST_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       console.log("error cok")
//       dispatch({
//         type: ORGANIZATION_LIST_FAIL,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
      
//     }
//   };

// export const listOrganizationDetails = (id) => async(dispatch) => {
//     try {
//         dispatch({
//             type: ORGANIZATION_DETAILS_REQUEST,
//         });
//         const { data } = await axios.get(`${req}/${id}`);
//         dispatch({
//             type: ORGANIZATION_DETAILS_SUCCESS,
//             payload: data,
//         });

//     } catch (error) {
//         dispatch({
//             type: ORGANIZATION_DETAILS_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message,
//         })
//     }
// }
>>>>>>> upstream/main
