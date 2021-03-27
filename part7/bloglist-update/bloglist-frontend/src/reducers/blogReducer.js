import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_BLOG':
      return [...state, action.data]
    case 'REMOVE': {
      const blogToRemove = state.find(a => a.id === action.data.id)
      const indexToRemove = state.indexOf(blogToRemove)
      return state.splice(indexToRemove, 1)
    }
    case 'LIKE': {
      const id = action.data.id
      const blogToChange = state.find(a => a.id === id)
      const changedBlog = {
        ...blogToChange,
        votes: blogToChange.likes + 1
      }
      return state.map(blog =>
        blog.id !== id ? blog : changedBlog
      )
    }
    case 'INIT_BLOGS':
      return action.data
    default:
      return state
  }
}

export const createBlog = (data) => {
  return async dispatch => {
    const newBlog = await blogService.create(data)
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog,
    })
  }
}

export const remove = (id, object) => {
  return async dispatch => {
    await blogService.remove(id, object)
    dispatch({
      type: 'REMOVE',
      data: { id }

    })
  }
}

export const like = (id, object) => {
  return async dispatch => {
    await blogService.update(id, object)
    dispatch({
      type: 'LIKE',
      data: { id }

    })
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export default blogReducer