import axios from 'axios'
import {
  ACTIVITIES_LIST_REQUEST,
  ACTIVITIES_LIST_SUCCESS,
  ACTIVITIES_LIST_FAIL,
  ACTIVITIES_DELETE_REQUEST,
  ACTIVITIES_DELETE_SUCCESS,
  ACTIVITIES_DELETE_FAIL,
  ACTIVITIES_UPDATE_REQUEST,
  ACTIVITIES_UPDATE_SUCCESS,
  ACTIVITIES_UPDATE_RESET,
  ACTIVITIES_UPDATE_FAIL,
  ACTIVITIES_CREATE_REQUEST,
  ACTIVITIES_CREATE_SUCCESS,
  ACTIVITIES_CREATE_FAIL,
  ACTIVITIES_CREATE_RESET,
  ACTIVITIES_DETAILS_REQUEST,
  ACTIVITIES_DETAILS_SUCCESS,
  ACTIVITIES_DETAILS_FAIL,
  
    
} from '../constants/activitiesConstants'
import { logout } from "../actions/userAction.js";



export const activitiesListReducer = (state = { activities: [] }, action) => {
    switch (action.type) {
      case ACTIVITIES_LIST_REQUEST:
        return { loading: true, activities: [] };
      case ACTIVITIES_LIST_SUCCESS:
        return { loading: false, activities: action.payload };
      case ACTIVITIES_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };


  export const activitiesDetailsReducer = (state = { activitie: {} }, action) => {
    switch (action.type) {
      case ACTIVITIES_DETAILS_REQUEST:
        return { loading: true, ...state };
      case ACTIVITIES_DETAILS_SUCCESS:
        return { loading: false, activitie: action.payload };
      case ACTIVITIES_DETAILS_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };




  export const activitiesDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case ACTIVITIES_DELETE_REQUEST:
        return { loading: true };
      case ACTIVITIES_DELETE_SUCCESS:
        return { loading: false, success: true };
      case ACTIVITIES_DELETE_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

  export const activitiesCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case ACTIVITIES_CREATE_REQUEST:
        return { loading: true };
      case ACTIVITIES_CREATE_SUCCESS:
        return { loading: false, success: true, activitie: action.payload };
      case ACTIVITIES_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case ACTIVITIES_CREATE_RESET:
        return {};
  
      default:
        return state;
    }
  };



  export const activitiesUpdateReducer = (state = { activitie: {} }, action) => {
    switch (action.type) {
      case ACTIVITIES_UPDATE_REQUEST:
        return { loading: true };
      case ACTIVITIES_UPDATE_SUCCESS:
        return { loading: false, success: true, activitie: action.payload };
      case ACTIVITIES_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case ACTIVITIES_UPDATE_RESET:
        return { activitie: {} };
  
      default:
        return state;
    }
  };