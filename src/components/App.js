import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed HashRouter import
import LoginForm from "./LoginForm";
import SignUp from "./SignUp"; 
import ForgotPass from "./ForgotPass"; 
import "../css/App.css";

function App() {
  return (
    <div className="login">
      <div className="backgroudndImg">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
