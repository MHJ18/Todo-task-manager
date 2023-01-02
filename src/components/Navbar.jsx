import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    location("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TODO LIST
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"></li>
          </ul>
          {localStorage.getItem("token") ? (
            <button type="button" className="btn btn-success" onClick={logout}>
              {" "}
              Logout
            </button>
          ) : (
            <form className="d-flex">
              <Link
                className="btn btn-info rounded mx-2"
                to="/login"
                role="button"
              >
                Login
              </Link>
              <Link
                className="btn btn-info rounded mx-1"
                to="/signup"
                role="button"
              >
                Get Started
              </Link>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
