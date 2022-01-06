import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark py-3">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">User Management System</span>
          <div>
            <ul className="nav justify-content-end px-5">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <button className="btn btn-secondary btn-lg">
                    HOME PAGE
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link exact className="nav-link" to="/register">
                  <button className="btn btn-secondary btn-lg">
                    SAVE USER
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
