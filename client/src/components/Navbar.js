import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <Link className="logo" to="/">
          YBC Blog
        </Link>
        <div className="right">
          <Link className="category" to="/?cat=art">
            <span>ART</span>
          </Link>
          <Link className="category" to="/?cat=science">
            <span>SCIENCE</span>
          </Link>
          <Link className="category" to="/?cat=technology">
            <span>TECHNOLOGY</span>
          </Link>
          <Link className="category" to="/?cat=cinema">
            <span>CINEMA</span>
          </Link>
          <Link className="category" to="/?cat=design">
            <span>DESIGN</span>
          </Link>
          <Link className="category" to="/?cat=food">
            <span>FOOD</span>
          </Link>
          <span className="user">{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout} className="user">
              Logout
            </span>
          ) : (
            <Link className="user" to="/login">
              Login
            </Link>
          )}

          <Link className="add" to="/add">
            <span>New Blog</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
