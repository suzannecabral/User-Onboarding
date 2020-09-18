import React from 'react'

export default function Form(props){
    const {
        change,
        submit,
        errors,
        disabled,
        users,
    } = props


    const formChange = evt => {
        // console.log("formChange fired")
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        // change(name, valueToUse)
        change (name, valueToUse)
    }

    const formSubmit = evt => {
        evt.preventDefault()
        submit()
    }
 

    return(
        <div>
            <form onSubmit={formSubmit}>
                <h2>Sign up:</h2>
                <div className="errorBox errorStrings">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </div>
                <label>Name&nbsp;
                    <input
                        name='name'
                        type='text'
                        onChange={formChange}
                    />
                </label>
                <label>Email&nbsp;
                    <input
                        name='email'
                        type='text'
                        onChange={formChange}
                    />
                </label>
                <label>Password&nbsp;
                    <input
                        name='password'
                        type='text'
                        onChange={formChange}
                    />
                </label>
                <label>Terms of Service&nbsp;
                    <input
                        name='tos'
                        type='checkbox'
                        onChange={formChange}
                    />
                </label>
                <button disabled={disabled}>submit</button>

                {/* <h2>Users:</h2>
                <div>{users}</div> */}
            </form>
        </div>
    )
}