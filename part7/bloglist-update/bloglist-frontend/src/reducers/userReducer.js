import userService from '../services/users'

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return action.data
    default:
      return state
  }
}

export const getAllUsers = () => {
  return async dispatch => {
    const allUsers = await userService.getAllUsers()
    dispatch({
      type: 'GET_ALL_USERS',
      data: allUsers
    })
  }
}

export default userReducer