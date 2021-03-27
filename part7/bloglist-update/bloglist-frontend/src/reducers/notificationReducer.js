const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return action.data
    case 'REMOVE_NOTIFICATION': {
      return ''
    }
    default:
      return state
  }
}

export const removeNotification = (notification) => {
  return {
    type: 'REMOVE_NOTIFICATION',
    data: {
      notification: notification
    }
  }
}

export const newNotification = (message, className, time, oldID) => {
  return async dispatch => {
    if (oldID) {
      clearTimeout(oldID)
    }
    const timerID = setTimeout(() => dispatch(removeNotification()), time * 1000)
    dispatch({
      type: 'NEW_NOTIFICATION',
      data: {
        message: message,
        className: className,
        timerID: timerID
      }
    })
  }
}

export default notificationReducer