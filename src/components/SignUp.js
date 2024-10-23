import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleSignUp = () => {
    console.log("Creating account with:", { username, email, phone, password });
  };

  return (
    <div className="whiteBG">
      <div className="gridContainer">
        <div className="logInContainer">
          <Typography className="loginTitle">CREATE ACCOUNT</Typography>
          <Box
            className="box"
            sx={{ position: "relative", marginBottom: "20px" }}
          >
            <TextField
              id="input-username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ marginBottom: "20px", width: "70%" }}
            />
            <TextField
              id="input-email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: "20px", width: "70%" }}
            />
            <TextField
              id="input-phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{ marginBottom: "20px", width: "70%" }}
            />
            <TextField
              id="input-password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: "20px", width: "70%" }}
            />
            <TextField
              id="input-retype-password"
              placeholder="Retype Password"
              type="password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              sx={{ marginBottom: "20px", width: "70%" }}
            />
            <Button
              variant="contained"
              onClick={handleSignUp}
              sx={{ marginBottom: "20px" }}
            >
              Sign Up
            </Button>

            <Typography
              variant="body2"
              sx={{ cursor: "pointer", color: "#0000EE" }}
              onClick={() => window.history.back()}
            >
              Log In Account
            </Typography>
          </Box>
        </div>
        <div className="frontImg"></div>
      </div>
    </div>
  );
}

export default SignUp;
