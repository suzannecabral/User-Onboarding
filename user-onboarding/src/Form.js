import React from 'react'

export default function Form(props){
    const {
        values,
        errors,
        change,
        submit,
    } = props


    return(
        <div>
            <form>
                <h2>This is the form</h2>
                <label>Name&nbsp;
                    <input
                        name='name'
                        type='text'
                        onChange={change}
                    />
                </label>
                <label>Email&nbsp;
                    <input
                        name='email'
                        type='text'
                        onChange={change}
                    />
                </label>
                <label>Password&nbsp;
                    <input
                        name='password'
                        type='text'
                        onChange={change}
                    />
                </label>
                <label>Terms of Service&nbsp;
                    <input
                        name='tos'
                        type='checkbox'
                        onChange={change}
                    />
                </label>
                <button>submit</button>
            </form>
        </div>
    )
}