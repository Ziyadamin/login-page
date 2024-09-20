import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ValidationTextFields({ setUsername, setPassword }) {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "90%" } }} 
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-username"
          label="Username"
          defaultValue=""
          required
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)} // Update username state
        />
        <TextField
          id="outlined-password"
          label="Password"
          type="password"
          defaultValue=""
          required
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
      </div>
    </Box>
  );
}
