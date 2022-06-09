import React from "react";
import { Link } from "react-router-dom";
import "./Third.css";

function Second() {
  return (
    <div className="App">
      <section className="hero">
        <div className="col40">
          <div className="heading">
            <h2>Lorem ipsum dolor consectetur elit ut aliquam</h2>
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
          <div className="hero-footer">
            <div className="nav-button">
              <Link to="/second">Previous</Link>
            </div>
            <div className="text-para-footer">
              <p>Step 3 of 3</p>
            </div>
            <div className="nav-button">
              <a href="#">Next</a>
            </div>
          </div>
        </div>
        <div className="col60">
          <div className="col60top">
            <h1>Schedule</h1>
          </div>
          <div className="sch">
            <div className="row">
              <div className="schedules">
                <h2>Schedule</h2>
              </div>
            </div>

            <div className="row">
              <div className="schedules">
                <h2>Time Frame</h2>
              </div>
            </div>
            <div className="row">
              <div className="schedules">
                <h2>Time Zone</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Second;
