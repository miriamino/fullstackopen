import React, { useEffect } from 'react'
// import BlogList from './components/BlogList'
// import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { initializeBlogs } from './reducers/blogReducer'
import { useDispatch } from 'react-redux'
import { getUser } from './reducers/userReducer'
import LoginForm from './components/LoginForm'
import Logout from './components/Logout'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  // const [blogs, setBlogs] = useState([])
  // const [notificationMessage, setNotificationMessage] = useState(null)
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [user, setUser] = useState(null)

  // const [className, setClassName] = useState('')

  // const blogFormRef = useRef()

  // useEffect(() => {
  //   blogService.getAll().then(blogs =>
  //     setBlogs(blogs.sort((a, b) => b.likes - a.likes))
  //   )
  // }, [])

  // useEffect(() => {
  //   const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
  //   if (loggedUserJSON) {
  //     const user = JSON.parse(loggedUserJSON)
  //     setUser(user)
  //     blogService.setToken(user.token)
  //   }
  // }, [])

  // const handleLogin = async (event) => {
  //   event.preventDefault()
  //   try {
  //     const user = await loginService.login({
  //       username,
  //       password,
  //     })
  //     window.localStorage.setItem(
  //       'loggedBlogappUser', JSON.stringify(user)
  //     )
  //     blogService.setToken(user.token)
  //     setUser(user)
  //     setUsername('')
  //     setPassword('')
  //   } catch (exception) {
  //     setNotificationMessage('Wrong credentials')
  //     setClassName('error')
  //     setTimeout(() => {
  //       setNotificationMessage(null)
  //     }, 5000)
  //   }
  // }

  // const handleLogout = (event) => {
  //   event.preventDefault()
  //   window.localStorage.removeItem('loggedBlogappUser')
  //   setUser(null)
  // }

  // const addBlog = (blogObject) => {
  //   blogFormRef.current.toggleVisibility()
  //   blogService
  //     .create(blogObject)
  //     .then(returnedBlog => {
  //       setBlogs(blogs.concat(returnedBlog))
  //       setNotificationMessage(`a new blog ${returnedBlog.title} by ${returnedBlog.author} added`)
  //       setClassName('notification')
  //       setTimeout(() => {
  //         setNotificationMessage(null)
  //       }, 5000)
  //     })
  //     .catch(error => {
  //       setNotificationMessage(error.response.data.error)
  //       setClassName('error')
  //       setTimeout(() => {
  //         setNotificationMessage(null)
  //       }, 5000)
  //     })
  // }


  // const blogForm = () => (
  //   <Togglable buttonLabel="new blog" ref={blogFormRef}>
  //     <BlogForm createBlog={addBlog} user={user} />
  //   </Togglable>
  // )

  // const likeBlog = id => {
  //   const blog = blogs.find(n => n.id === id)
  //   const updatedBlog = {
  //     user: blog.user.id,
  //     likes: blog.likes + 1,
  //     author: blog.author,
  //     title: blog.title,
  //     url: blog.url,
  //   }
  //   blogService
  //     .update(id, updatedBlog)
  //     .then(returnedBlog => {
  //       setBlogs(blogs.map(blog => blog.id !== id ? blog : { ...blog, likes: returnedBlog.likes }).sort((a, b) => b.likes - a.likes))
  //     })
  //     .catch(error => {
  //       setNotificationMessage(error.response.data.error)
  //       setClassName('error')
  //       setTimeout(() => {
  //         setNotificationMessage(null)
  //       }, 5000)
  //     })
  // }
  // const removeBlog = id => {
  //   const blog = blogs.find(n => n.id === id)
  //   const title = blog.title
  //   const author = blog.author
  //   blogService
  //     .remove(id)
  //   window.confirm(`Remove blog ${title} by ${author}`)
  //   setBlogs(blogs.filter(b => b.title !== title))
  // }

  return (
    <div>
      {/* <Notification /> */}
      <LoginForm />
      <Logout />
      <Notification />
      <Togglable buttonLabel='new blog'>
        <BlogForm />
      </Togglable>
      <BlogList />

      {/* <BlogList /> */}
    </div>
  )
}

export default App