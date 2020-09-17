import React from 'react'

export default function Form(props){
    const {
        values,
        errors,
        change,
        submit,
    } = props


    const formChange = evt => {
        // console.log("formChange fired")
        const { name, value, type, checked } = evt.target
        change (name, value)
    }


    return(
        <div>
            <form>
                <h2>This is the form</h2>
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
                <button>submit</button>
            </form>
        </div>
    )
}