import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, TextField, Button } from "@material-ui/core";
import "./Login.css";

const Login = () => {
  let [uid, setuid] = useState("");

  let onhandlechangeqes = (e) => {
    uid = e.target.value;
    setuid(uid);
  };

  let onlogsubmit = (e) => {};

  return (
    <div id="log">
      <Card className="login" color="secondary">
        <h2>LOG IN</h2>
        <TextField
          id="log-input"
          placeholder="Enter UID"
          onChange={onhandlechangeqes}
          variant="outlined"
        />

        <Link to="/home">
          <Button onClick={onlogsubmit} variant="contained" color="primary">
            Submit
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default Login;
