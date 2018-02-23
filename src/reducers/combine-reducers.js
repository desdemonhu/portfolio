import { combineReducers } from 'redux'

import featureReducer from './feature-reducer.js';

const cateogy = combineReducers({
    projects: featureReducer,
})

export default cateogy;