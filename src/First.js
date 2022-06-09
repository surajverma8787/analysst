import React from "react";
import "./First.css";
import { Link } from "react-router-dom";

function First() {
  return (
    <section className="hero">
      <div className="col40">
        <div className="heading">
          <h2>
            Let’s get started by giving your <span>CAMPAIGN</span> a name
          </h2>
        </div>
        <div className="text-para">
          <p>You can easily change your campaign here</p>
        </div>
        <div className="icon-text">
          <i className="fa-star"></i>
          <p>Test</p>
        </div>
        <div class="hero-footer">
          <div class="nav-button">
            <a href="#">Previous</a>
          </div>
          <div className="text-para-footer">
            <p>Step 1 of 3</p>
          </div>
          <div class="nav-button">
            <Link to="second">Next</Link>
          </div>
        </div>
      </div>
      <div className="col60">
        <div className="field">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" className="name-input" />
        </div>
        <div className="image">
          <img src="../public/assets/g10.png" alt="" srcset="" />
        </div>
      </div>
    </section>
  );
}

export default First;
