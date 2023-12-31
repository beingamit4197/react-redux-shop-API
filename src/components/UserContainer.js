import React, { useEffect } from 'react'
import { fetchUsers } from './redux/user/userAction'
import { connect } from 'react-redux'

function UsersContainer ({ userData, fetchUsers }) {
    useEffect(() => {
      fetchUsers()
    },)
    return userData.loading ? (
      <h2>Loading</h2>
    ) : userData.error ? (
      <h2>{userData.error}</h2>
    ) : (
      <div>
        <h2>Users List</h2>
        <div>
          {userData &&
            userData.users &&
            userData.users.map(user => <p>{user.id} - {user.name} - {user.email}</p>)}
        </div>
      </div>
    )
  }

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)