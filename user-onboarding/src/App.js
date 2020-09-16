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
  const inputChange = evt => {
    // send to formValues state
    const { name, value } = evt.target
  
    setFormValues({...formValues, [name]:value})
  
  }

  const formSubmit = evt => {

  }
  
  return (
    <div className="App">
      <header>
        <h1>App goes here</h1>
      </header>
      <Form 
        values={formValues}
        errors={formErrors}
        change={inputChange}
        submit={formSubmit}
      />
    </div>
  );
}

export default App;
