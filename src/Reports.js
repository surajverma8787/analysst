import React from "react";
import Navbar from "./Nav";

import "./Leads.css";
function Report() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="col400">
          <div className="heading">
            <img
              src="https://image.shutterstock.com/image-vector/passport-photo-young-handsome-man-260nw-1056927035.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div className="text-para">
            <p>John Doe</p>
          </div>
        </div>
        <div className="col600">
          <div className="field">
            <label for="name">Activity Timeline</label>
            <input type="text" name="name" id="name" className="name-input1" />
          </div>

          <div className="field">
            <label for="name">Reports</label>
            <input type="text" name="name" id="name" className="name-input" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Report;
