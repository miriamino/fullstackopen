import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../reducers/userReducer'
import { useField } from '../hooks/index'

const LoginForm = () => {

  const dispatch = useDispatch()
  const username = useField('text', 'Username', 'username')
  const password = useField('password', 'Password', 'password')
  const user = useSelector(state => state.user)

  const loginUser = async (event) => {
    event.preventDefault()
    dispatch(login(username, password))
    username.reset()
    password.reset()
  }

  return (
    <div> { user === null
      ? <div>
        <h2>log in to application</h2>
        <form onSubmit={loginUser}>
          <div>
            username
            <input {...username.formElements} />
          </div>
          <div>
            password
            <input {...password.formElements}
            />
          </div>
          <button type="submit" id="log-in">login</button>
        </form>
      </div >
      : null}
    </div>
  )
}

export default LoginForm