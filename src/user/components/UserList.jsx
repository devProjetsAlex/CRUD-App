import React from 'react';

import Card from '../../shared/components/Cards/Card'
import './UsersList.css'
import UserItem from '../components/UserItem'

const UsersList = props => {
if (props.items.length === 0) {
    return (<div className='center'>
        <Card>
            <h2> No Users found</h2>
        </Card>
             </div>)
}

return(
    <ul className="users-list">
        {props.items.map(user => (
            <UserItem
             key={user.id} 
             id={user.id} 
             image={user.image} 
             name={user.name} 
             placeCount={user.places}/>
        ))}
    </ul>
)
}
export default UsersList