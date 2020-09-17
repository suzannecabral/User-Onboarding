import React, { useState } from 'react';
import './App.css';
import Form from './Form'

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
  
  //////////////// EVENT HANDLERS ////////////////
  const appInputChange = (name, value) => {
    // send to formValues state
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
    console.log('Axios will post this:', newUserData)
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
