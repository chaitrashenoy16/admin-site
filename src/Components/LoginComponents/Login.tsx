import { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

const Login = () => {
  const navigate = useNavigate();
  let [uname, setUname] = useState("");
  let [pwd, setPwd] = useState("");
  const doLogin = () => {
    if (uname === "" || pwd === "") {
      alert("Username or password can't be blank");
      return;
    }
    if (uname === "admin" && pwd === "admin") {
      localStorage.setItem("uname", uname);
      localStorage.setItem("Isauth", "true");
      navigate("/dashboard/");
    } else {
      ReactDOM.render(
        <Alert>Login is not successful please try again...</Alert>,
        document.getElementById("root")
      );
    }
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
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        ></input>
      </div>

      <div className="mb-3">
        <label for="passwordText" className="form-label">
          Password
        </label>
        <input
          type="text"
          className="form-control"
          id="passwordText"
          placeholder="Enter password"
          value={pwd}
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
