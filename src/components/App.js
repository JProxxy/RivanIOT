import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Ensure HashRouter is imported
import LoginForm from "./LoginForm";
import SignUp from "./SignUp"; 
import ForgotPass from "./ForgotPass"; 
import "../css/App.css";

function App() {
  return (
    <HashRouter>
      <div className="login">
        <div className="backgroudndImg">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
