// import const
import {
  GET_DEFAULT_LIST_FULFILLED,
  GET_DEFAULT_LIST_PENDING,
  GET_DEFAULT_LIST_REJECTED,
  UPDATE_ITEM_FROM_LIST,
  UPDATING_ITEM_FROM_LIST,
  UPDATE_ITEM_FROM_LIST_REJECTED,
  REMOVE_ITEM_FROM_LIST,
  ADD_NEW_ITEM_TO_LIST,
  ADDING_NEW_ITEM_TO_LIST,
  ADD_NEW_ITEM_TO_LIST_REJECTED,
  SET_UPDATING_ITEM
}
  from "./const";

// Action GO

export const addItemToList = () =>
  (dispatch) => {
    dispatch({
      type: ADDING_NEW_ITEM_TO_LIST,
    })
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'Hola aquilito',
        body: 'Finish him',
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        return (
          dispatch({
            type: ADD_NEW_ITEM_TO_LIST,
            payload: {
              item: json
            }
          })
        )
      }
      )
      .catch(err => {
        dispatch({
          type: ADD_NEW_ITEM_TO_LIST_REJECTED,
          payload: {
            errorMsg: 'Failed adding new data'
          }
        })
      })
  }

export const getDefaultList
  = () => (dispatch) => {
    dispatch({
      type: GET_DEFAULT_LIST_PENDING,
    })
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        dispatch({
          type: GET_DEFAULT_LIST_FULFILLED,
          payload: json,
        })
      })
      .catch(err => {
        dispatch({
          type: GET_DEFAULT_LIST_REJECTED,
          payload: {
            errorMsg: 'Failed trying to fetch posts'
          }
        })
      })
  }

export const updateItemFromList
  = (item) => (dispatch) => {
    dispatch({
      type: UPDATING_ITEM_FROM_LIST,
    })
    fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...item
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: UPDATE_ITEM_FROM_LIST,
          updatedItem: json
        })
      })
      .catch(err => {
        dispatch({
          type: UPDATE_ITEM_FROM_LIST_REJECTED,
          payload: {
            errorMsg: 'Failed trying to update item'
          }
        })
      })
  }

export const removeFromList
  = (id) => (dispatch) => {
    dispatch({
      type: REMOVE_ITEM_FROM_LIST,
      payload: {
        id
      }
    })
  }

export const setUpdatingItem = item => ({
  type: SET_UPDATING_ITEM,
  payload: item
})
