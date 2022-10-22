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
    PROFILE_CREATE_TECHNOLOGIES_RESET
    
} from '../constants/profileConstants'
//user jadi profile
export const profileDetailReducer = (
    state = { proflile: {} },
    action 
    ) => {
    switch (action.type) {
        case PROFILE_DETAILS_REQUEST:
            return { ...state, loading: true}
        case PROFILE_DETAILS_SUCCESS:
            return { loading:false, profile: action.payload }
        case PROFILE_DETAILS_FAIL:
            return { loading: false, error: action.payload}
        default: 
            return state
    }
}

export const profileOneDetailsReducer = (state = { profile: {} }, action) => {
    switch (action.type) {
        case PROFILE_DETAILSONE_REQUEST:
            return { ...state, loading: true}
        case PROFILE_DETAILSONE_SUCCESS:
            return { loading:false, profile: action.payload }
        case PROFILE_DETAILSONE_FAIL:
            return { loading: false, error: action.payload}
        default: 
            return state
    }
}


export const profileUpdateReducer = (state = { profile: {} }, action) => {
    switch (action.type) {
        case PROFILE_UPDATE_REQUEST:
          return { loading: true };
        case PROFILE_UPDATE_SUCCESS:
          return { loading: false, success: true, profile: action.payload };
        case PROFILE_UPDATE_FAIL:
          return { loading: false, error: action.payload };
        case PROFILE_UPDATE_RESET:
          return { profile: {} };
    
        default:
          return state;
      }
}


export const profiletTechnologiesCreateReducer = (
    state = { technologies: {} },
    action
) => {
    switch (action.type) {
        case PROFILE_CREATE_TECHNOLOGIES_REQUEST:
          return { loading: true };
        case PROFILE_CREATE_TECHNOLOGIES_SUCCESS:
          return { loading: false, success: true };
        case PROFILE_CREATE_TECHNOLOGIES_FAIL:
          return { loading: false, error: action.payload };
        case PROFILE_CREATE_TECHNOLOGIES_RESET:
          return {};
    
        default:
          return state;
      }
}

export const profileDeleteTechnologiesReducer = (state = {}, action) => {
    switch (action.type) {
        case PROFILE_DELETE_TECHNOLOGIES_REQUEST:
          return { loading: true };
        case PROFILE_DELETE_TECHNOLOGIES_SUCCESS:
          return { loading: false, success: true };
        case PROFILE_DELETE_TECHNOLOGIES_FAIL:
          return { loading: false, error: action.payload };
    
        default:
          return state;
      }
}

