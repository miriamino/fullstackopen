import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeBlog, like } from '../reducers/blogReducer'
import { newNotification } from '../reducers/notificationReducer'

const Blog = ({ blog, index }) => {

  const user = useSelector(state => state.user)
  const timerID = useSelector(state => state.notification.timerID)
  const dispatch = useDispatch()

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const [detailVisible, setDetailVisible] = useState(false)
  const [buttonText, setButtonText] = useState('view')

  const showWhenVisible = { display: detailVisible ? '' : 'none' }

  const toggleButton = () => {
    setDetailVisible(!detailVisible)
    setButtonText(detailVisible ? 'view' : 'hide')
  }


  return (
    <div style={blogStyle} className='Blog' id={`blog${index + 1}`}>
      {blog.title} {blog.author}
      <span>
        <button onClick={toggleButton}>{buttonText}</button>
      </span>
      <div style={showWhenVisible} className='detail'>

        {blog.url}        <br />
          likes <span id='likes'>{blog.likes}</span> <button id='likeBtn' onClick={() => {
          dispatch(like(blog))
          dispatch(newNotification(`you liked '${blog.title}'`, 'message', 10, timerID))
        }
        }>like</button> <br />
        {blog.user.name} <br />
        {user.username === blog.user.username &&
          <button onClick={() => {
            dispatch(removeBlog(blog.id))
            dispatch(newNotification(`you removed '${blog.title}'`, 'message', 10, timerID))
          }}>remove</button>
        }
      </div>
    </div>
  )
}

export default Blog
