import React from "react";
import "./ManualUpload.css";
import { Link } from "react-router-dom";

function First() {
  return (
    <section className="hero">
      <div className="col40">
        <div className="heading">
          <h2>
            How do you want to <span>Import</span> your leads
          </h2>
        </div>
        <div className="text-para">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus sed
            purus vitae turpis ornare pretium dui mauris at. Turpi
          </p>
        </div>
        <div className="icon-text">
          <i className="fa-star"></i>
        </div>
        <div class="hero-footer">
          <div class="nav-button">
            <a href="#">Previous</a>
          </div>
          <div className="text-para-footer">
            <p>Step 2 of 3</p>
          </div>
          <div class="nav-button">
            <Link to="second">Next</Link>
          </div>
        </div>
      </div>
      <div className="col60">
        <div className="field">
          <label for="name">Enter Manually</label>
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
