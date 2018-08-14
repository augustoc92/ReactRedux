import { combineReducers } from 'redux'
import posts from './posts/reducer'
import { reducer as form } from 'redux-form';


const reducers = {
  posts,
  form,
 }

export default combineReducers(reducers)