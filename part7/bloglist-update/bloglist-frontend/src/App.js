import React, { useEffect } from 'react'
// import BlogList from './components/BlogList'
// import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { initializeBlogs } from './reducers/blogReducer'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './reducers/userReducer'
import LoginForm from './components/LoginForm'
import Logout from './components/Logout'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'


const App = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  return (
    <div>
      <LoginForm />
      <Logout />
      <Notification />
      <div>
        {user !== null
          ? <div><Togglable buttonLabel='new blog'>
            <BlogForm />
          </Togglable>
          <BlogList />
          </div>
          : null}
      </div>
    </div>
  )
}

export default App