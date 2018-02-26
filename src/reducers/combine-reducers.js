import { combineReducers } from 'redux'

import featureReducer from './feature-reducer';
import galleryReducer from './gallery-reducer'

const cateogy = combineReducers({
    projects: featureReducer,
    pictures: galleryReducer
})

export default cateogy;