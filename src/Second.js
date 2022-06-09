import React from "react";
import { Link } from "react-router-dom";
import "./Second.css";

function Second() {
  return (
    <div className="App">
      <section className="hero">
        <div className="col40">
          <div className="heading">
            <h2>
              How do you want to <span>IMPORT</span> your leads.
            </h2>
          </div>
          <div className="text-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              sed purus vitae turpis ornare pretium dui mauris at. Turpis{" "}
            </p>
          </div>
          <div className="icon-text">
            <i className="fa-star"></i>
          </div>
          <div class="hero-footer">
            <div class="nav-button">
              <Link to="/">Previous</Link>
            </div>
            <div className="text-para-footer">
              <p>Step 2 of 3</p>
            </div>
            <div class="nav-button">
              <Link to="/third">Next</Link>
            </div>
          </div>
        </div>
        <div className="col60">
          <div className="csv">
            <div className="row1">
              <div className="column">
                <Link
                  to="/fileUpload"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h3>Upload CSV</h3>
                  <p>lorem uuoshu hfsdio fdiso shadh hoa ds</p>
                </Link>
              </div>

              <div className="column">
                <Link
                  to="/manualUpload"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h3>Enter Manually</h3>
                  <p>lorem uuoshu hfsdio fdiso shadh hoa ds</p>
                </Link>
              </div>
            </div>
            <div className="row1">
              <div className="column">
                <Link
                  to="/savedUpload"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h3>Import from saved list</h3>
                  <p>lorem uuoshu hfsdio fdiso shadh hoa ds</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Second;
