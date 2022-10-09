// import {
//     ORGANIZATION_LIST_REQUEST,
//     ORGANIZATION_LIST_SUCCESS,
//     ORGANIZATION_LIST_FAIL,
//     ORGANIZATION_DETAILS_REQUEST,
//     ORGANIZATION_DETAILS_SUCCESS,
//     ORGANIZATION_DETAILS_FAIL,
    
// } from '../constants/organizationConstants'

// export const organizationListReducer = (
//     state = { organizations: [] },
//     action 
//     ) => {
//     switch (action.type) {
//         case ORGANIZATION_LIST_REQUEST:
//             return { loading: true, organizations: []}
//         case ORGANIZATION_LIST_SUCCESS:
//             return { loading:false, organizations: action.payload }
//         case ORGANIZATION_LIST_FAIL:
//             return { loading: false, error: action.payload}
//         default: 
//             return state
//     }
// }

// export const organizationDetailsReducer = (state = { organization: {} }, action) => {
//     switch (action.type) {
//         case ORGANIZATION_DETAILS_REQUEST:
//             return { loading: true, ...state};
//         case ORGANIZATION_DETAILS_SUCCESS:
//             return { loading: false, organization: action.payload };
//         case ORGANIZATION_DETAILS_FAIL:
//             return { loading: false, error: action.payload };

//         default: 
//             return state;
//     }


// }