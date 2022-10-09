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