
import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

  if (props.notification === '') {
    return null
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      {props.notification.notification}
    </div>
  )
}


const mapStateToProps = (state) => {

  return {
      notification: state.notification
  }

}


export default connect(
  mapStateToProps,
  null
)(Notification)