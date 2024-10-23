import "../css/App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Use HashRouter
import LoginForm from "./LoginForm";
import SignUp from "./SignUp"; // Import SignUp component
import ForgotPass from "./ForgotPass"; // Import ForgotPass component

function App() {
  return (
    <Router> {/* Wrap everything in Router for routing */}
      <div className="login">

          <Routes>
            <Route path="/" element={<LoginForm />} /> {/* Default route to LoginForm */}
            <Route path="/signup" element={<SignUp />} /> {/* Route for SignUp */}
            <Route path="/forgot-password" element={<ForgotPass />} /> {/* Route for ForgotPass */}
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
