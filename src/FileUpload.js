import React, { useState } from "react";
import "./FileUpload.css";
import { Link } from "react-router-dom";
import FlatfileImporter from "flatfile-csv-importer";
import { Button } from "react-bootstrap";
import db from "./firebase";

const licenseKey = "e291b3fd-3b17-4c34-afb2-dedecabe8bff";

function FileUpload() {
  const [out, setOut] = useState([]);
  const [customerName, setCustomerName] = useState([]);
  const [customerPassword, setCustomerPassword] = useState([]);

  FlatfileImporter.setVersion(2);

  const flatfileConfig = {
    type: "Contracts",
    fields: [
      { key: "name", label: "Full Name" },
      { key: "email", label: "Email Address" },
      { key: "phone", label: "Phone Number" },
    ],
  };

  const importer = new FlatfileImporter(licenseKey, flatfileConfig);

  importer.setCustomer({
    userId: "12345",
  });

  const submit = (e) => {
    e.preventDefault();
    db.collection("csvData").add({
      name: customerName,
      password: customerPassword,
    });

    setCustomerName("");
    setCustomerPassword("");
  };

  const launchFlatfile = () => {
    importer.requestDataFromUser().then((results) => {
      importer.displayLoader();
      setTimeout(() => {
        importer.displaySuccess("Success message!");
        setOut(results.data);
      }, 1500);
    });
  };

  if (out.length > 1) {
    out.forEach(() => setCustomerName(out.name));
  }

  console.log(out, "data");

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
        {/* <div className="field">
          <label for="name">Import CSV</label>
          <input type="text" name="name" id="name" className="name-input" />
        </div> */}
        <div>
          <Button
            variant="outline-warning"
            className="csvbutton"
            onClick={launchFlatfile}
          >
            {" "}
            Click here to import CSV
          </Button>
        </div>

        <div className="App__form">
          <input
            type="text"
            placeholder="Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={customerPassword}
            onChange={(e) => setCustomerPassword(e.target.value)}
          />
          <button onClick={submit}>Submit</button>
        </div>

        <div className="image">
          <img src="../public/assets/g10.png" alt="" srcset="" />
        </div>
      </div>
    </section>
  );
}

export default FileUpload;
