
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { like } from '../reducers/blogReducer'
import Blog from './Blog'
// import { newNotification } from '../reducers/notificationReducer'

const BlogList = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blog)
  console.log(blogs)
  return (
    <div className='blogList'>
      {blogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          handleClick={() => {
            dispatch(like(blog.id, blogs.find(a => a.id === blog.id)))
            // newNotification(`you liked '${blog.content}'`, 10, timerID)
          }
          }
        />
      )}
    </div>
  )
}

export default BlogList
