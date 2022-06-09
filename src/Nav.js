import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <a className="navbar-brand" href="#">
        Leadzen
      </a> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/leads" className="nav-link" href="#">
              Leads <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sequence" className="nav-link" href="#">
              Sequence
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/review" className="nav-link" href="#">
              Review
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logs" className="nav-link" href="#">
              Logs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reports" className="nav-link" href="#">
              Report
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
