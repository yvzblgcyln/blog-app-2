import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [err, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    try {
      await login(user);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>

        <input type="text" placeholder="username" name="username" onChange={handleChange} />
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        {err && <div className="error">{err}</div>}
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <div className="bottom">
          <span>Don't you have account?</span>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
