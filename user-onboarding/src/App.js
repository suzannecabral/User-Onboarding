import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'
import schema from './formSchema'
import * as yup from 'yup'
import axios from 'axios'

//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  password: '',
  ///// CHECKBOXES /////
  tos: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password:'',
  tos: '',
}
const initialDisabled = true
const initialUserList = []

function App() {
  //////////////// STATES ////////////////
  const [formValues, setFormValues] = useState(initialFormValues)  // object
  const [formErrors, setFormErrors] = useState(initialFormErrors)   // object
  const [disabled, setDisabled ] = useState(initialDisabled) //boolean
  const [userList, setUserList] = useState(initialUserList) //array of objects
  
  //////////////// HELPERS ////////////////
  const postNewUser = newUser => {

    axios.post('https://reqres.in/api/users',newUser)
      .then(res => {
        console.log(res.data)
        // setUserList([...userList, res.data])
        
      })
      .catch(err => {
        debugger
        console.log(err)
      })
      .finally(()=>{
        setFormValues(initialFormValues)
        document.getElementById("userForm").reset()
      })


  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({...formErrors, [name]: ""})
      })
      .catch(err => {
        // debugger
        setFormErrors({...formErrors,[name]: err.errors[0]})
        // console.log(err)
      })
  }
 
  //////////////// EVENT HANDLERS ////////////////
  const appInputChange = (name, value) => {
    // send to formValues state
    validate(name, value)
    setFormValues({...formValues, [name]:value})
  
    // console.log( "appInputChange fired" )
  }

  const appFormSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    }
    //Next step: post to server
    const newUserJson = JSON.stringify(newUser)
    setUserList([...userList,newUser])

    console.log('User submitted the form:', newUser)
    
    postNewUser(newUser)


  }
  
  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])



  return (
    <div className="App">
      <header>
        <h1>User Onboarding</h1>
      </header>
      <Form 
        change={appInputChange}
        submit={appFormSubmit}
        errors={formErrors}
        disabled={disabled}
        users={userList}
      />
    </div>
  );
}

export default App;
