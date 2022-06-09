import React from "react";
import Navbar from "./Nav";

import "./Sequence.css";
import { Link } from "react-router-dom";
function Sequence() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="user">
          <div className="heading">
            <div className="image">
              <img
                src="https://image.shutterstock.com/image-vector/passport-photo-young-handsome-man-260nw-1056927035.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="text-para">
            <p>Random Users</p>
          </div>
        </div>

        <div className="seq">
          <div className="r">
            <h3>mail</h3>
          </div>
          <div className="r">
            <h3>call</h3>
          </div>
          <div className="r">
            <h3>linkedin</h3>
          </div>
          <div className="r">
            <h3>whatsapp</h3>
          </div>
        </div>

        <div className="col600">
          <div className="csv">
            <div className="row1">
              <div className="column">
                <Link
                  to="/fileUpload"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h3 className="block">WhatsApp</h3>
                  <p>lorem uuoshu hfsdio fdiso shadh hoa ds</p>
                </Link>
              </div>

              <div className="column">
                <Link
                  to="/manualUpload"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h3 className="block">Email</h3>
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
                  <h3 className="block">Call</h3>
                  <p>lorem uuoshu hfsdio fdiso shadh hoa ds</p>
                </Link>
              </div>

              <div className="column">
                <Link
                  to="/manualUpload"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h3 className="block">LinkedIn</h3>
                  <p>lorem uuoshu hfsdio fdiso shadh hoa ds</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sequence;
