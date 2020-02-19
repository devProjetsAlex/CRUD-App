import React from 'react';
import UsersList from '../components/UserList'
import Leon from '../../Image/leon.jpg'


const Users = () => {
  const USERS = [{
    id:'u1',
    name:'Léon Côté',
    image:Leon,
    places:3
  }]
return (
  <UsersList items={USERS} />
  )
}

export default Users
