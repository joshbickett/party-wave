import icon from "../assets/icon.png";
import "../App.css";
import styled from "@emotion/styled";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import { useState } from "react";

const Explore = () => {
  const topApps = [
    {
      icon: "here",
      name: "makememe.ai",
      description: "Make memes in under 5 seconds using ai",
      tags: ["gpt-3", "python"],
    },
    {
      icon: "here",
      name: "Cool stuff",
      description: "This is cool AI Stuff",
      tags: ["gpt-3", "funny"],
    },
    {
      icon: "here",
      name: "More cool stuff",
      description: "It never end!",
      tags: ["gpt-3", "funny"],
    },
  ];

  const newApps = [
    {
      icon: "here",
      name: "makesong.ai",
      description: "Make a song in under 5 seconds using ai",
      tags: ["gpt-3", "python"],
    },
    {
      icon: "here",
      name: "Cool stuff",
      description: "This is cool AI Stuff",
      tags: ["gpt-3", "funny"],
    },
    {
      icon: "here",
      name: "More cool stuff",
      description: "It never end!",
      tags: ["gpt-3", "funny"],
    },
    {
      icon: "here",
      name: "makesong.ai",
      description: "Make a song in under 5 seconds using ai",
      tags: ["gpt-3", "python"],
    },
    {
      icon: "here",
      name: "Cool stuff",
      description: "This is cool AI Stuff",
      tags: ["gpt-3", "funny"],
    },
    {
      icon: "here",
      name: "More cool stuff",
      description: "It never end!",
      tags: ["gpt-3", "funny"],
    },
  ];

  const [view, setView] = useState("Creations");

  return (
    <div className="App">
      <NavigationMenu currentPage={"Explore"} />
      <div class="container-fluid">
        <div class="row bg-dark text-white">
          <div class="col-md-12" style={{ margin: "200px 0 0 0" }}>
            <h1 class="text-light">
              Explore AI tools, projects, and creations
            </h1>
            <p class="text-light">There's lot's of cool stuff here!</p>
            <div style={{ marginTop: "100px" }}>
              {view === "Projects" && (
                <ul class="nav justify-content-center nav-tabs">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="#"
                      onClick={() => setView("Projects")}
                    >
                      Projects
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link text-white"
                      href="#"
                      onClick={() => setView("Creations")}
                    >
                      Creations
                    </a>
                  </li>
                </ul>
              )}
              {view === "Creations" && (
                <ul class="nav justify-content-center nav-tabs">
                  <li class="nav-item">
                    <a
                      class="nav-link text-white"
                      href="#"
                      onClick={() => setView("Projects")}
                    >
                      Projects
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="#"
                      onClick={() => setView("Projects")}
                    >
                      Creations
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div
          class="row bg-light text-dark"
          style={{ backgroundColor: "#00008B", color: "white" }}
        >
          <div class="col-md-12">
            <h1 style={{ marginTop: "25px" }}>{view}</h1>
          </div>
        </div>
        <div class="row bg-light text-dark" style={{ padding: "30px 0" }}>
          <div class="col-md-1"></div>
          <div
            class="col-md-3"
            style={{ margin: "10px 0", borderRight: "1px solid gray" }}
          >
            <h5>Top apps this month 🎉</h5>
          </div>
          <div class="col-md-6" style={{ margin: "10px" }}>
            {topApps.map((app) => {
              return (
                <div
                  class="row"
                  style={{
                    borderRadius: "5px",
                  }}
                >
                  <div class="col-md-2" style={{ padding: "10px" }}>
                    <img src={icon} style={{ width: "50px", height: "50px" }} />
                  </div>
                  <div class="col-md-6" style={{ padding: "5px" }}>
                    <div
                      class="row"
                      style={{
                        height: "20px",
                      }}
                    >
                      <h6>{app.name}</h6>
                    </div>
                    <div class="row">
                      <div
                        style={{
                          padding: "5px",
                          fontSize: "12px",
                          color: "#383838",
                        }}
                      >
                        {app.description}
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-4"
                    style={{
                      padding: "5px",
                    }}
                  >
                    {app.tags.map((tag) => {
                      return (
                        <span
                          class="badge badge-secondary"
                          style={{ margin: "5px" }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <button type="button" class="btn btn-dark" style={{ width: "20%" }}>
              See more
            </button>
          </div>
          <div class="col-md-2"></div>
        </div>
        <div class="row mt-2 bg-white" style={{ padding: "30px 0" }}>
          <div class="col-md-1"></div>
          <div
            class="col-md-7 "
            style={{ marginTop: "5px", borderRadius: "5px" }}
          >
            <div class="row ml-2" style={{ marginBottom: "25px" }}>
              <h5 class="mt-3">Top </h5>
              <div class="dropdown ml-2 mt-0 mt-2">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Today
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Today
                  </a>
                  <a class="dropdown-item" href="#">
                    This week
                  </a>
                  <a class="dropdown-item" href="#">
                    This month
                  </a>
                </div>
              </div>
              <h5 class="mt-3 ml-2 mr-1">by Category</h5>
              <div class="dropdown ml-2 mt-0 mt-2">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    All
                  </a>
                  <a class="dropdown-item" href="#">
                    NLP
                  </a>
                  <a class="dropdown-item" href="#">
                    Vision
                  </a>
                  <a class="dropdown-item" href="#">
                    Other
                  </a>
                </div>
              </div>
            </div>
            {newApps.map((app) => {
              return (
                <div
                  class="row"
                  style={{
                    borderRadius: "5px",
                  }}
                >
                  <div class="col-md-2" style={{ padding: "10px" }}>
                    <img src={icon} style={{ width: "50px", height: "50px" }} />
                  </div>
                  <div class="col-md-6" style={{ padding: "5px" }}>
                    <div
                      class="row"
                      style={{
                        height: "20px",
                      }}
                    >
                      <h6>{app.name}</h6>
                    </div>
                    <div class="row">
                      <div
                        style={{
                          padding: "5px",
                          fontSize: "12px",
                          color: "#383838",
                        }}
                      >
                        {app.description}
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-4"
                    style={{
                      padding: "5px",
                    }}
                  >
                    {app.tags.map((tag) => {
                      return (
                        <span
                          class="badge badge-secondary"
                          style={{ margin: "5px" }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <button
              type="button"
              class="btn btn-dark"
              style={{ width: "20%", marginTop: "10px" }}
            >
              See more
            </button>
          </div>
          <div class="col-md-3">
            <div
              class="bg-light"
              style={{ marginTop: "5px", borderRadius: "5px", padding: "20px" }}
            >
              <h5>Submit an app</h5>
              <p style={{ textAlign: "left" }}>
                Did you build something and want to share it with the world? You
                can submit it <a href="#">here</a>.
              </p>
            </div>
            <div
              class="bg-light"
              style={{
                marginTop: "25px",
                borderRadius: "5px",
                padding: "20px",
              }}
            >
              <h5>Learn about AI</h5>
              <p style={{ textAlign: "left" }}>
                Curious about how the machine learning and AI which powers these
                products. Explore more about it <a href="#">here</a>.
              </p>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;

const AppContainer = styled.div`
  padding: 5px;
`;
