import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useField } from '../hooks/index'
import { createBlog } from '../reducers/blogReducer'


const BlogForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.loggedInUser)
  const newTitle = useField('text', 'newTitle', 'newtitle')
  const newAuthor = useField('text', 'newAuthor', 'newauthor')
  const newUrl = useField('text', 'newUrl', 'newurl')

  const addBlog = (event) => {
    event.preventDefault()
    dispatch(createBlog({
      title: newTitle.value,
      author: newAuthor.value,
      url: newUrl.value,
      user: user.id,
    }))
    newTitle.reset()
    newAuthor.reset()
    newUrl.reset()
  }


  return (
    <div> { user !== null
      ? < form onSubmit={addBlog}>
        <div>
          <h2>create new</h2>
      title:<input {...newTitle.formElements} /><br />
      author:<input {...newAuthor.formElements} /><br />
      url:<input {...newUrl.formElements} /><br />
          <button id='create' type='submit'>create</button>
        </div>
      </form>
      : null}
    </div >
  )
}

export default BlogForm