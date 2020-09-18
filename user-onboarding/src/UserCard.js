import React from 'react'

export default function UserList(props){
    // console.log("User card:")
    // console.log(props.user.name)
    // console.log(props)
    return(
        <div className="userCard">
            <h3>{props.user.name}</h3>
            <p>Email: {props.user.email}</p>
            <p>Password: {props.user.password}</p>
            <p>TOS: {props.user.tos ? "Accepted" : "Rejected"}</p>
        </div>
    )
}