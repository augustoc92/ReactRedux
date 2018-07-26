import { combineReducers } from 'redux'
import posts from './posts/reducer'

const reducers = {
  posts
 }

export default combineReducers(reducers)