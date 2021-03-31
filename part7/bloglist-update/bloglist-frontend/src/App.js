import React, { useEffect } from 'react'
import { batch, useDispatch, useSelector } from 'react-redux'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { initializeBlogs } from './reducers/blogReducer'
import { getUser } from './reducers/loginReducer'
import { getAllUsers } from './reducers/userReducer'
import LoginForm from './components/LoginForm'
import Logout from './components/Logout'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import UserStats from './components/UserStats'
import UserDetail from './components/UserDetail'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <Togglable buttonLabel='new blog'>
        <BlogForm />
      </Togglable>
      <BlogList />
    </div>
  )
}

const App = () => {

  console.log('hi')
  const dispatch = useDispatch()
  const user = useSelector(state => state.loggedInUser)
  const allUsers = useSelector(state => state.allUsers)

  useEffect(() => {
    batch(() => {
      dispatch(getAllUsers())
      dispatch(initializeBlogs())
      dispatch(getUser())
    })
  }, [dispatch])

  const match = useRouteMatch('/users/:id')
  const thisUser = match
    ? allUsers.find(user => user.id === match.params.id)
    : null

  return (
    <div>
      <LoginForm />
      <Logout />
      <Notification />

      <div>
        {user !== null
          ?
          <Switch>
            <Route path='/users/:id'>
              <UserDetail user={thisUser} />
            </Route>
            <Route path='/users'>
              <UserStats />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
          : null}
      </div >
    </div >
  )
}

export default App