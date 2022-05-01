import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Build from "./pages/Build";
import Submit from "./pages/Submit";
import Learn from "./pages/Learn";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Explore />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/submit" element={<Submit />}></Route>
        <Route path="/build" element={<Build />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route
          path="*"
          element={
            <div style={{ padding: "150px", marginTop: "250px" }}>
              <p>There's nothing here!</p>
            </div>
          }
        />
      </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
