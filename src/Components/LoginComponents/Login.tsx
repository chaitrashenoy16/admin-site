import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  let [username, setUname] = useState("");
  let [password, setPwd] = useState("");
  const doLogin = () => {
    if (username === "" || password === "") {
      alert("Username or password can't be blank");
      return;
    }
    axios
      .post("http://localhost:5024/api/login", {
        username,
        password,
      })
      .then((res) => {
        if (res.data) {
          localStorage.setItem("uName", res.data.userName);
          localStorage.setItem("Isauth", "true");
          navigate("/dashboard/");
        } else {
          alert("Username or password invalid");
        }
      });
  };
  const handleReset = () => {
    setUname("");
    setPwd("");
  };

  return (
    <div>
      <div className="mb-3">
        <label for="usernameText" className="form-label">
          User name
        </label>
        <input
          type="text"
          className="form-control"
          id="usernameText"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUname(e.target.value)}
        ></input>
      </div>

      <div className="mb-3">
        <label for="passwordText" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordText"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPwd(e.target.value)}
        ></input>
      </div>

      <br></br>
      <div className="mb-3">
        <button type="button" className="btn btn-primary" onClick={doLogin}>
          Login
        </button>
        &nbsp; &nbsp; &nbsp;
        <button type="button" className="btn btn-primary" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Login;
