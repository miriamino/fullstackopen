import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_BLOG':
      return [...state, action.data]
    case 'REMOVE': {
      const id = action.data.id
      return state.filter(b => b.id !== id)
    }
    case 'LIKE': {
      const id = action.data.data.id
      const blogToChange = state.find(a => a.id === id)
      const changedBlog = {
        ...blogToChange,
        likes: blogToChange.likes + 1
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
      data: newBlog
    })
  }
}

export const removeBlog = (id) => {
  return async dispatch => {
    await blogService.remove(id)
    dispatch({
      type: 'REMOVE',
      data: { id }

    })
  }
}

export const like = (data) => {
  return async dispatch => {
    await blogService.update(data)
    dispatch({
      type: 'LIKE',
      data: { data }

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