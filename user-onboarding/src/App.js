import React from 'react';
import './App.css';
import Form from './Form'

function App() {
  return (
    <div className="App">
      <header>
        <h1>App goes here</h1>
      </header>
      <Form 
        test1='Test value 1'
        test2='Test value 2' 
      />
    </div>
  );
}

export default App;
