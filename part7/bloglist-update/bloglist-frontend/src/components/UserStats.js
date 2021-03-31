import React from 'react'
import { useSelector } from 'react-redux'

const User = (user) => {
  const blogCount = user.user.blogs.length
  return (
    <tr>
      <td>{user.user.name}</td>
      <td>{blogCount}</td>
    </tr>

  )
}

const UserStats = () => {
  const users = useSelector(state => state.allUsers)
  console.log(users)

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <User
              key={user.id}
              user={user}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserStats