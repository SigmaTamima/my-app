import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import Navbar from "./Navbar";






function App() {
  const [currentForm, setCurrentForm] = useState('Login');
  

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }


  return (
    <div className="App">
      {  
      
       currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} /> 
      }
    </div>
  );
}

export default App;