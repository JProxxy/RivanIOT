import React, { useState } from "react"; // Import useState
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ForgotPass() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    console.log("Requesting password reset for:", email);
  };

  return (
    <div className="whiteBG">
      <div className="gridContainer">
        <div className="logInContainer">
          <Typography className="loginTitle">FORGOT PASSWORD</Typography>
          <Box className="box" sx={{ position: "relative", marginBottom: "20px" }}>
            <TextField
              id="input-email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: "20px", width: "70%" }}
            />
            <Button
              variant="contained"
              onClick={handleForgotPassword}
              sx={{ marginBottom: "20px" }}
            >
              Reset Password
            </Button>

            <Typography
              variant="body2"
              sx={{ cursor: "pointer", color: "#0000EE" }}
              onClick={() => window.history.back()}
            >
              Back to Login
            </Typography>
          </Box>
        </div>
        <div className="frontImg"></div>
      </div>
    </div>
  );
}

export default ForgotPass;
