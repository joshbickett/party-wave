import logo from "../logo.svg";
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
    // { name: "community", description: "The Community 👥", short: "Community" },
  ];

  return (
    <div>
      <NavigationMenu currentPage={"Build"} />
      <div class="container-fluid">
        <div class="row text-white" style={{ backgroundColor: "#57606a" }}>
          <div class="col-md-12" style={{ margin: "200px 0 0 0" }}>
            <h1 class="text-light">Share your creation</h1>
            <p class="text-light">
              Post apps and content for it to get discovered
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
        <div class="row bg-light">
          <div
            class="col-md-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <div class="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-md-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <div class="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-md-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <div class="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Build;
