
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
    ORGANIZATION_CREATE_RESET
    
      
  } from '../constants/organizationConstants'
 

  export const organizationListReducer = (state = { organizations: [] }, action) => {
    switch (action.type) {
        case ORGANIZATION_LIST_REQUEST:
            return { loading: true, organizations: [] };
        case ORGANIZATION_LIST_SUCCESS: 
            return { loading: false, organizations: action.payload};
        case ORGANIZATION_LIST_FAIL:
            return { loading: false, error: action.payload}

        default:
        return state;
    }
  }



export const organizationDetailsReducer = (state = { organization: {} }, action) => {
    switch (action.type) {
        case ORGANIZATION_DETAILS_REQUEST:
            return { loading: true, ...state };
        case ORGANIZATION_DETAILS_SUCCESS:
            return { loading: false, organization: action.payload}
        case ORGANIZATION_DETAILS_FAIL:     
            return { loading: false, error:action.payload };

        default:
            return state;
    }
}

export const organizationDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ORGANIZATION_DELETE_REQUEST:
            return { loading: true };
        case ORGANIZATION_DELETE_SUCCESS:
            return { loading: false, success: true};
        case ORGANIZATION_DELETE_FAIL:
            return { loading: false, error: action.payload };
        
        default: 
            return state
    }
}


export const organizationCreateReducer = ( state = {}, action) => {
    switch (action.type) {
        case ORGANIZATION_CREATE_REQUEST:
            return { loading: true };
        case ORGANIZATION_CREATE_SUCCESS:
            return { loading: false, success: true, organization: action.payload};
        case ORGANIZATION_CREATE_FAIL:
            return { loading: false, error: action.payload};
        case ORGANIZATION_CREATE_RESET:
            return {};

        default: 
            return state;
    }
}

export const organizationUpdateReducer = (state = { organization: {}}, action ) => {
    switch (action.type) {
        case ORGANIZATION_UPDATE_REQUEST:
            return { loading: true};
        case ORGANIZATION_UPDATE_SUCCESS:
            return { loading: false, success: true, organization: action.payload};
        case ORGANIZATION_UPDATE_FAIL:
            return { loading: false, error:action.payload};
        case ORGANIZATION_UPDATE_RESET:
            return { organization: {} };

        default:
            return state;

    }
}





