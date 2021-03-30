// import { useState } from 'react'
import loginService from '../services/login'
import blogService from '../services/blogs'

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return null
    case 'GET_USER':
      return action.data
    default:
      return state
  }
}

export const login = (username, password) => {
  return async dispatch => {
    const user = await loginService.login({ username: username.value, password: password.value })
    window.localStorage.setItem(
      'loggedBlogappUser', JSON.stringify(user)
    )
    blogService.setToken(user.token)
    dispatch({
      type: 'LOGIN',
      data: user,
    })
  }
}

export const logout = (data) => {
  return dispatch => {
    window.localStorage.removeItem('loggedBlogappUser')
    dispatch({
      type: 'LOGOUT',
      data: data
    })
  }
}

export const getUser = () => {
  return async dispatch => {
    const user = await JSON.parse(window.localStorage.getItem('loggedBlogappUser'))
    {
      user !== null
        ? blogService.setToken(user.token)
        : blogService.setToken(null)
    }
    dispatch({
      type: 'GET_USER',
      data: user
    })
  }
}


export default userReducer