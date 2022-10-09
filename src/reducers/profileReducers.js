import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAIL
    
} from '../constants/profileConstants'
//user jadi profile
export const profileDetailReducer = (
    state = { proflile: {} },
    action 
    ) => {
    switch (action.type) {
        case PROFILE_REQUEST:
            return { ...state, loading: true}
        case PROFILE_SUCCESS:
            return { loading:false, profile: action.payload }
        case PROFILE_FAIL:
            return { loading: false, error: action.payload}
        default: 
            return state
    }
}