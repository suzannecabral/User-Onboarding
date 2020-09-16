import React from 'react'

export default function Form(props){
    const {
        test1,
        test2,
    } = props
    return(
        <div>
            <h2>Form props:</h2>
            <p>{test1}</p>
            <p>{test2}</p>
        </div>
    )
}