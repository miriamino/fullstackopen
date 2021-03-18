const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'NEW_NOTIFICATION': 
            return action.data.notification
        case 'REMOVE_NOTIFICATION': {
            return ''
        }
        default:
            return state
    }
}

export const newNotification = (notification) => {
    return {
        type: 'NEW_NOTIFICATION',
        data: {
            notification: notification
        }
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

export default notificationReducer