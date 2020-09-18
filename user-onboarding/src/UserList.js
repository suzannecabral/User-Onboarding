import React from 'react'
import UserCard from './UserCard'


export default function UserList(props){
    const { users } = props
    return (
        <div className="userList">
             <h2>Users:</h2>

                {
                    users.map(user=>{
                        return(
                            <UserCard
                                user={user}
                            />
                        )
                    })
                }

        </div>
    )
}