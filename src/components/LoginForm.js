import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CircleIcon from "@mui/icons-material/Circle";
import Button from "@mui/material/Button";
import "../css/LogInForm.css";

function LoginForm() {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleToggleShowPassword = (event) => {
    setShowPassword(event.target.checked);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost/rivan_iot/login.php", {
        username,
        password,
      });

      if (response.data.success) {
        console.log("Login successful:", response.data);

        // Check the user role and navigate accordingly
        if (response.data.role === "Global Admin") {
          navigate("/mainpage"); // Redirect to the main page for Global Admin
        } else if (response.data.role === "Admin") {
          navigate("/admin-dashboard"); // Redirect to the admin dashboard
        } else {
          // Handle other roles if necessary
        }
      } else {
        console.log("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("There was an error logging in:", error);
    }
  };

  const handleCreateAccount = () => {
    navigate("/SignUp"); 
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password"); 
  };

  return (
    <div className="whiteBG">
      <div className="gridContainer">
        <div className="logInContainer">
          <Typography className="loginTitle">USER LOGIN</Typography>
          <Box
            className="box"
            sx={{ position: "relative", marginBottom: "20px" }}
          >
            <TextField
              id="input-username"
              className="username"
              placeholder="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle className="inputIcon" />
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "50px",
                  backgroundColor: "#39B09E",
                },
              }}
              sx={{
                marginBottom: "20px",
                width: "70%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                },
              }}
            />
            <TextField
              id="input-password"
              className="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon className="inputIcon" />
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "50px",
                  backgroundColor: "#39B09E",
                },
              }}
              sx={{
                width: "70%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={showPassword}
                  onChange={handleToggleShowPassword}
                  icon={<RadioButtonUncheckedIcon sx={{ color: "#ff0000" }} />}
                  checkedIcon={<CircleIcon sx={{ color: "#00ff00" }} />}
                  className="showPasswordCheckbox"
                />
              }
              label="Show Password"
              className="showPasswordLabel"
            />
            <Button
              className="loginButton"
              variant="contained"
              onClick={handleLogin} // Call handleLogin on button click
            >
              Login
            </Button>

            <Typography
              variant="body2"
              sx={{ cursor: "pointer", color: "#2D8B96", marginTop: "10px" }}
              onClick={handleCreateAccount}
              className="createAcc"
            >
              Create Account
            </Typography>
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", color: "#2D8B96", marginTop: "10px" }}
              onClick={handleForgotPassword}
              className="forgotPass"
            >
              Forgot Password?
            </Typography>
          </Box>
        </div>
        <div className="frontImg"></div>
      </div>
    </div>
  );
}

export default LoginForm;
