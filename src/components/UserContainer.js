import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';


const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers()
  }, [])

  return ( userData.loading ? (
          <h2>loading</h2>
        ): userData.error ? (
          <h3>{userData.error}</h3>
        ): (
          <div>
            <h2>user list </h2>
            <ul>
              {
                userData && 
                userData.users && 
                userData.users.map(user => <li>{user.name} &rarr; {user.email}</li>)
              }
            </ul>
          </div>
        )
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers(dispatch))
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(UserContainer);