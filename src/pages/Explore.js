import icon from "../assets/icon.png";
import Robots from "../assets/robots.png";
import "../App.css";
import styled from "@emotion/styled";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { tab } from "@testing-library/user-event/dist/tab";

import { getContent } from "../apis/FlaskAPI";
const Explore = () => {
  useEffect(() => {
    getContent().then((result) => {
      setContent(result);
    });
  }, []);
  const [content, setContent] = useState([]);
  const [viewBy, setViewBy] = useState("new");

  const [activeTab, setActiveTab] = useState("apps");

  const tabs = [
    { name: "apps", description: "Apps and projects 💻", short: "Apps" },
    // { name: "gallery", description: "Gallery 🖼", short: "Creations" },
    // { name: "models", description: "AI Models 🤖", short: "Models" },
  ];

  const callToAction = [
    {
      name: "apps",
      subject: "Submit a project",
      description:
        "Did you build something and want to share it with the world? You can submit it ",
      urlText: "here",
      url: "/submit",
    },
    {
      name: "gallery",
      subject: "Enjoy creating art?",
      description: "Submit you creations for others to see ",
      urlText: "here",
      url: "/submit",
    },
    {
      name: "models",
      subject: "Learn about AI",
      description:
        "Curious about how the machine learning and AI which powers these products. Explore more about it ",
      urlText: "here",
      url: "https://www.coursera.org/specializations/deep-learning",
    },
  ];

  return (
    <div className="App">
      <NavigationMenu currentPage={"Explore"} />
      <div class="container-fluid">
        <div class="row text-white" style={{ backgroundColor: "#11B7B6" }}>
          <div class="col-sm-12" style={{ margin: "135px 0 0 0" }}>
            <div class="row">
              <div class="col-sm-12">
                <h1 class="text-light">Explore ML and AI projects</h1>
                <p class="text-light">See what people are working on</p>
              </div>
            </div>
            {/* <div class="row">
              <div class="col-sm-12">
                <form class="form-inline" style={{ justifyContent: "center" }}>
                  <input
                    class="form-control"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                    style={{ fontSize: "20px" }}
                  />
                </form>
              </div>
            </div> */}

            <div style={{ marginTop: "100px" }}>
              {/* <ul class="nav justify-content-center nav-tabs">
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
              </ul> */}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>View by</h3>
            <div style={{ display: "flex", alignContent: "center" }}>
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "10px",
                  margin: "5px",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0px 0px 1px #000000",
                }}
              >
                <img
                  src={Robots}
                  style={{
                    width: "75px",
                    margin: "10px",
                    borderRadius: "10px",
                  }}
                />
                <div>All</div>
              </div>
            </div>
          </div>

          <div style={{ border: "1px solid black" }}>
            <div style={{ padding: "0 20px" }}>
              {content.map((record) => {
                return (
                  <AppCard
                    style={{
                      display: "grid",
                      gridTemplateColumns: "2fr 6fr 3fr 2fr 1fr",
                      gridGap: "5px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={icon}
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "5px",
                          margin: "0 15px",
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontSize: "20px",
                          margin: "0px",
                          fontWeight: "bold",
                        }}
                      >
                        {record[1]}
                      </p>
                      <p
                        class="text-secondary"
                        style={{
                          fontSize: "20px",
                          color: "#383838",
                        }}
                      >
                        {record[2]}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        class="badge badge-secondary"
                        style={{ margin: "1px" }}
                      >
                        {record[4]}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        class="badge badge-light"
                        style={{
                          paddingTop: "15px",
                          height: "50px",
                          fontSize: "20px",
                        }}
                      >
                        {record[5]} 🧠
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <VoteButton>⬆️</VoteButton>
                    </div>
                  </AppCard>
                );
              })}
            </div>

            <button
              type="button"
              class="btn btn-dark"
              style={{ marginTop: "10px" }}
            >
              See more
            </button>
          </div>
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

const AppCard = styled.div`
  border-radius: 5px;
  margin: 15px 5px;
  box-shadow: 1px 3px 5px #dbdbdb;
  padding: 5px 0;
  &:hover {
    box-shadow: 1px 3px 10px #dbdbdb;
  }
`;

const VoteButton = styled.div`
  font-size: 20px;
  &:hover {
    font-size: 30px;
  }
  &:active {
    font-size: 50px;
  }
`;
