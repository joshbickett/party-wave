import logo from "../logo.svg";
import "../App.css";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import { useState } from "react";

const Build = () => {
  const [activeTab, setActiveTab] = useState("submit");

  const tabs = [
    {
      name: "submit",
      description: "Submit a project 👾",
      short: "Submit",
    },
    { name: "community", description: "The Community 👥", short: "Community" },
  ];

  return (
    <div className="App">
      <NavigationMenu currentPage={"Build"} />
      <div class="container-fluid">
        <div class="row text-white" style={{ backgroundColor: "#57606a" }}>
          <div class="col-md-12" style={{ margin: "200px 0 0 0" }}>
            <h1 class="text-light">Share your creations with the world</h1>
            <p class="text-light">
              We are looking for great apps and content to share with users
            </p>
            <div style={{ marginTop: "100px" }}>
              <ul class="nav justify-content-center nav-tabs">
                {tabs.map((tab) => {
                  if (tab.name === activeTab) {
                    return (
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          href="#"
                          onClick={() => setActiveTab(tab.name)}
                        >
                          {tab.description}
                        </a>
                      </li>
                    );
                  } else {
                    return (
                      <li class="nav-item">
                        <a
                          class="nav-link text-white"
                          href="#"
                          onClick={() => setActiveTab(tab.name)}
                        >
                          {tab.description}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Build;
