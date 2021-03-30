
import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog'
// import { newNotification } from '../reducers/notificationReducer'

const BlogList = () => {
  const blogs = useSelector(state => state.blog)
  const user = useSelector(state => state.user)

  return (
    <div>
      { user !== null
        ?
        <div className='blogList'>
          {blogs.map(blog =>
            <Blog
              key={blog.id}
              blog={blog}
            />
          )}
        </div>
        : null
      }
    </div>
  )
}

export default BlogList
