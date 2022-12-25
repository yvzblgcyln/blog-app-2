import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();
  const [err, setError] = useState(null);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    try {
      await axios.post("http://localhost:8800/api/auth/register", user);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="register">
      <div className="container">
        <h1>Register</h1>
        <input type="email" placeholder="email" name="email" onChange={handleChange} />
        <input type="text" placeholder="username" name="username" onChange={handleChange} />
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        {err && <div className="error">{err}</div>}
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>

        <div className="bottom">
          <span>Do you have account?</span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
