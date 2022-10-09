import axios from 'axios'
import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAIL
    
} from '../constants/profileConstants'

export const profileDetail = () => async (dispatch) => {
    try {
        dispatch({ type: PROFILE_REQUEST })

        const { data } = await axios.get(`http://localhost:3001/api/about`)

        dispatch({
            type: PROFILE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}