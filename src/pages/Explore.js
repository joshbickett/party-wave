import icon from "../assets/icon.png";
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
        <div class="row text-white" style={{ backgroundColor: "#0062cc" }}>
          <div class="col-sm-12" style={{ margin: "135px 0 0 0" }}>
            <div class="row">
              <div class="col-sm-12">
                <h1 class="text-light">Explore ML and AI projects</h1>
                <p class="text-light">There's lot's of cool stuff here!</p>
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

        <div class="row mt-5">
          <div class="col-md-1"></div>
          <div class="col-md-2">
            <div
              class="border-bottom"
              style={{
                textAlign: "left",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Explore By
            </div>
            <div
              style={{
                textAlign: "left",
                fontSize: "20px",
                margin: "10px 0",
                cursor: "pointer",
              }}
              onClick={() => setViewBy("new")}
            >
              What's new
            </div>
            <div
              style={{
                textAlign: "left",
                fontSize: "20px",
                margin: "10px 0",
                cursor: "pointer",
              }}
              onClick={() => setViewBy("popular")}
            >
              Popular
            </div>
          </div>

          <div class="col-md-6 border-left">
            <div class="row">
              <div class="col-md-12" style={{ padding: "0 20px" }}>
                {viewBy === "new" && (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        margin: "0 10px",
                        fontSize: "25px",
                      }}
                    >
                      What's new this
                    </div>
                    <div class="dropdown" style={{ margin: "0 10px" }}>
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{ fontSize: "20px" }}
                      >
                        Week
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">
                          Week
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                          Month
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {viewBy === "popular" && (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        margin: "0 10px",
                        fontSize: "25px",
                      }}
                    >
                      Popular by category
                    </div>
                    <div class="dropdown" style={{ margin: "0 10px" }}>
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{ fontSize: "20px" }}
                      >
                        All
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">
                          GPT-3
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                          DALLE2
                        </a>
                      </div>
                    </div>
                  </div>
                )}

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
              <div class="col-md-1"></div>
            </div>

            <button
              type="button"
              class="btn btn-dark"
              style={{ width: "20%", marginTop: "10px" }}
            >
              See more
            </button>
          </div>
          <div class="col-md-3">
            {callToAction.map((call) => {
              if (call.name === activeTab) {
                return (
                  <div
                    style={{
                      borderRadius: "5px",
                      padding: "20px",
                      width: "90%",
                      margin: "5px auto",
                      backgroundColor: "#dae0e5",
                    }}
                  >
                    <h5>{call.subject}</h5>
                    <p style={{ textAlign: "left" }}>
                      {call.description}
                      <a href={call.url}>{call.urlText}</a>.
                    </p>
                  </div>
                );
              }
            })}
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
