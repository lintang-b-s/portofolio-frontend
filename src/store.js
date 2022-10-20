import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    profileDetailReducer,
    profileUpdateReducer,
    profiletTechnologiesCreateReducer,
    profileDeleteTechnologiesReducer,
    profileOneDetailsReducer
    
} from './reducers/profileReducers'
import {
    projectCreateReducer,
    projectDeleteReducer,
    projectDetailsReducer,
    projectListReducer,
    projectUpdateReducer,
 
} from './reducers/projectReducers'

import {
    organizationListReducer,
    organizationDetailsReducer,
    organizationDeleteReducer,
    organizationCreateReducer,
    organizationUpdateReducer
} from './reducers/organizationReducer.js'

import{
    activitiesListReducer,
    activitiesDetailsReducer,
    activitiesDeleteReducer,
    activitiesCreateReducer,
    activitiesUpdateReducer


} from "./reducers/activitiesReducers.js"


import { userLoginReducer  } from './reducers/userReducers'


const reducer = combineReducers({
    profileDetails: profileDetailReducer,
    profileOneDetails: profileOneDetailsReducer,
    profileUpdate: profileUpdateReducer,
    profileTechnologiesCreate: profiletTechnologiesCreateReducer,
    profileDeleteTechnologies: profileDeleteTechnologiesReducer,
    projectCreate: projectCreateReducer,
    projectDelete: projectDeleteReducer,
    projectDetails: projectDetailsReducer,
    projectList: projectListReducer,
    projectUpdate: projectUpdateReducer,
    userLogin: userLoginReducer,
    organizationDetails: organizationDetailsReducer,
    organizationCreate: organizationCreateReducer,
    organizationDelete: organizationDeleteReducer,
    organizationList: organizationListReducer,
    organizationUpdate: organizationUpdateReducer,
    activitiesDetails: activitiesDetailsReducer,
    activitiesCreate: activitiesCreateReducer,
    activitiesDelete :activitiesDeleteReducer,
    activitiesList :activitiesListReducer,
    activitiesUpdate : activitiesUpdateReducer,
  

    

    
})


const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
//kalo userlogin nnull berarti emang belum difecth api/users/login nya
//kalo userlogin gak ada di state berarti error di script reduxnya
//erornya dimana?

const initialState = { userLogin: { userInfo: userInfoFromStorage } };
 

const middleware = [thunk,logger]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store