import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLogin } from "../context/LoginContext";

function Navbar() {
  //declaring object
  const { Login, handleLogout } = useLogin();
  //  cosnt [Login,setLogin] = useState();

  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink className="navbar-brand nav-item" to="/">
            Navbar
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to="/signup">
                  SignUp
                </Link>
              </li>

              <li class="nav-item">
                <Link className="nav-link" to="/learn">
                  Learn
                </Link>
              </li>

              {Login ? (
                <li class="nav-item" onClick={handleLogout}>
                  <div className="nav-link" to="/signin">
                    Logout
                  </div>
                </li>
              ) : (
                <li class="nav-item">
                  <Link className="nav-link" to="/signin">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
