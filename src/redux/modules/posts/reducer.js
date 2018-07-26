// Initial State
import initialState from './initialState'

import { GET_DEFAULT_LIST_FULFILLED, UPDATE_ITEM_FROM_LIST_REJECTED, GET_DEFAULT_LIST_PENDING, GET_DEFAULT_LIST_REJECTED } from './const'
import { REMOVE_ITEM_FROM_LIST, UPDATE_ITEM_FROM_LIST, UPDATING_ITEM_FROM_LIST } from './const'
import { ADD_NEW_ITEM_TO_LIST, ADDING_NEW_ITEM_TO_LIST, ADD_NEW_ITEM_TO_LIST_REJECTED } from './const'

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEFAULT_LIST_PENDING: {
      return {
        ...state,
        isFetching: true
      }
    }
    case GET_DEFAULT_LIST_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        defaultList: action.payload
      }
    }
    case GET_DEFAULT_LIST_REJECTED: {
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload.errorMsg
      }
    }
    case REMOVE_ITEM_FROM_LIST: {
      return {
        ...state,
        defaultList : state.defaultList.filter(x => x.id !== action.payload.id)
      }
    }
    case UPDATING_ITEM_FROM_LIST:{
      return { 
        ...state,
        isFetching: true
      }
    }
    case UPDATE_ITEM_FROM_LIST: {
      let index = state.defaultList.findIndex(x => x.id === action.updatedItem.id)
      let newList = state.defaultList
      newList[index] = action.updatedItem
      return {
        ...state,
        isFetching: false,
        defaultList : newList
      }
    }
    case UPDATE_ITEM_FROM_LIST_REJECTED: {
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload.errorMsg
      }
    }
    case ADD_NEW_ITEM_TO_LIST: {
      let newList = state.defaultList
      action.payload.item.id = state.defaultList.length + 1
      newList.push(action.payload.item)
      return {
        ...state,
        defaultList: newList,
        isFetching: false
      }
    }
    case ADDING_NEW_ITEM_TO_LIST: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case ADD_NEW_ITEM_TO_LIST_REJECTED: {
      return {
        ...state,
        errorMsg : action.payload.errorMsg,
        isFetching : false
      }
    }
    default:
      return state
  }
}

