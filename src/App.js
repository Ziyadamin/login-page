import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import ValidationTextFields from "./Textinput";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hard-coded credentials
  const validUsername = "exampleUser";
  const validPassword = "examplePass";

  const handleLogin = (event) => {
    event.preventDefault();

    // Validation check
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    // Check against hard-coded credentials
    if (username !== validUsername || password !== validPassword) {
      setError("Incorrect username or password.");
      return;
    }

    // If validation passes, show alert
    alert(`Username: ${username}\nPassword: ${password}`);
    setError(""); // Clear error if successful
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="login-container">
          <h2 className="form-title">Login</h2>
          <form onSubmit={handleLogin}>
            <ValidationTextFields
              setUsername={setUsername}
              setPassword={setPassword}
            />
            {error && (
              <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
            )}
            <Button primary type="submit" style={{ marginTop: "30px" }}>
              Log In
            </Button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
