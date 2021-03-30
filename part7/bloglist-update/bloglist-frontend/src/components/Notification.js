import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const StyledNotification = styled.div`
.message {
  color: green;
  background: lightgrey;
  font-size: 20px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.error {
  color: red;
  background: lightgrey;
  font-size: 20px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
`

const Notification = () => {

  const notification = useSelector(state => state.notification)
  if (notification === null) {
    return null
  }

  return (
    <StyledNotification>
      <div className={notification.className}>
        {notification.message}
      </div>
    </StyledNotification>
  )
}

export default Notification