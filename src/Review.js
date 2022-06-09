import React from "react";
import Navbar from "./Nav";

import "./Leads.css";
function Review() {
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
            <label for="name">Reviews</label>
            <input type="text" name="name" id="name" className="name-input" />
          </div>
          <div className="image">
            <img src="../public/assets/g10.png" alt="" srcset="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
