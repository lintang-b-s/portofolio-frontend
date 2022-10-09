import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    profileDetailReducer
    
} from './reducers/profileReducers'
import {
    projectListReducer,
    projectDetailsReducer
} from './reducers/projectReducers'
// import {
//     organizationListReducer,
//     organizationDetailsReducer,
// } from './reducers/organizationReducer'

const reducer = combineReducers({
    profileDetails: profileDetailReducer,
    projectList: projectListReducer,
    projectDetails: projectDetailsReducer,


})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store