import React from 'react'
import UserCard from './UserCard'


export default function UserList(props){
    const { users } = props
    return (
        <div className="userList">
             <h2>Users:</h2>

                {
                    users.map(user =>{
                        console.log('user id: ', user.id)
                        return(
                            <UserCard
                                user={user}
                                key={user.id}
                            
                            />
                        )
                    })
                }

        </div>
    )
}