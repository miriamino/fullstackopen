import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/loginReducer'


const Logout = () => {
  const user = useSelector(state => state.loggedInUser)
  const dispatch = useDispatch()

  const logOut = (event) => {
    event.preventDefault()
    dispatch(logout())
  }
  return (
    <div>
      { user !== null
        ? <div>
          <h2>blog</h2>
          {user.name} is logged in <button onClick={logOut}>logout</button>
        </div>
        : null
      }
    </div>
  )
}

export default Logout