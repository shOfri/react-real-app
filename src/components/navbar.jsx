import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ user, loggedUser }) => {
  return (
    <nav
      className="navbar navbar-expand navbar-dark bg-dark"
      aria-label="Second navbar example"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          Real <i className="bi bi-layers-half"></i> App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample02"
          aria-controls="navbarsExample02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            {user?.biz && (
              <li className="nav-item">
                <NavLink className="nav-link" to="my-cards">
                  My Cards
                </NavLink>
              </li>
            )}
          </ul>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav ms-auto">
              {user ? (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="nav-link dropdown-toggle"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {loggedUser.email}
                    </NavLink>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <NavLink
                          className="dropdown-item"
                          aria-current="page"
                          to="/sign-out"
                        >
                          Sign Out
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/sign-in"
                    >
                      Sign In
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sign-up">
                      Sign Up
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="biz-signup">
                      Business Sign Up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
