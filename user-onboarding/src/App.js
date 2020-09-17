import React, { useState } from 'react';
import './App.css';
import Form from './Form'
import schema from './formSchema'
import * as yup from 'yup'

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



function App() {
  //////////////// STATES ////////////////
  const [formValues, setFormValues] = useState(initialFormValues)  // object
  const [formErrors, setFormErrors] = useState(initialFormErrors)   // object
  
  //////////////// HELPERS ////////////////
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
  }
 
 
  //////////////// EVENT HANDLERS ////////////////
  const appInputChange = (name, value) => {
    // send to formValues state
    validate(name, value)
    setFormValues({...formValues, [name]:value})
  
    // console.log( "appInputChange fired" )
  }

  const appFormSubmit = () => {
    const newUserData = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    }
    //Next step: post to server
    console.log('User submitted the form:', newUserData)
  }
  
  return (
    <div className="App">
      <header>
        <h1>App goes here</h1>
      </header>
      <Form 
        values={formValues}
        errors={formErrors}
        change={appInputChange}
        submit={appFormSubmit}
      />
    </div>
  );
}

export default App;
