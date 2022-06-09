import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import FileUpload from "./FileUpload";
import SavedUpload from "./SavedUpload";
import ManualUpload from "./ManualUpload";

import { Routes, Route, Switch } from "react-router-dom";
import Navbar from "./Nav";
import Leads from "./Leads";
import Sequence from "./Sequence";
import Review from "./Review";
import Logs from "./Logs";
import Reports from "./Reports";

function App() {
  const [data, setData] = useState([]);

  // Dummy API Call ///////////////////////
  const fetchUrl =
    "https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setData(request.data.items);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function handleClick() {
    console.log(data);
  }
  ///////////////////////////////////////////

  //sms API
  useEffect(() => {
    var URL =
      "http://2factor.in/API/V1/3adf9525-efb4-11eb-8089-0200cd936042/ADDON_SERVICES/SEND/TSMS";
    var phone_number = "9109793057337";
    var headers = {
      From: "ERSSTD",
      To: phone_number,
      TemplateName: "OTPVerification3",
      Var1: "ee",
    };
    axios
      .post(URL, { headers })
      .then((response) => console.log(response, "res"));
  }, []);
  /////////////////////////////////////////////////

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fileUpload" element={<FileUpload />} />
        <Route path="/manualUpload" element={<ManualUpload />} />
        <Route path="/savedUpload" element={<SavedUpload />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/sequence" element={<Sequence />} />
        <Route path="/review" element={<Review />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
      ;
    </div>
  );
}

export default App;
