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

  const [activeTab, setActiveTab] = useState("apps");

  const tabs = [
    { name: "apps", description: "Apps and projects 💻", short: "Apps" },
    { name: "gallery", description: "Gallery 🖼", short: "Creations" },
    // { name: "models", description: "AI Models 🤖", short: "Models" },
  ];

  const callToAction = [
    {
      name: "apps",
      subject: "Submit an app",
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
          <div class="col-sm-12" style={{ margin: "200px 0 0 0" }}>
            <div class="row">
              <div class="col-sm-12">
                <h1 class="text-light">
                  Explore AI tools, projects, and creations
                </h1>
                <p class="text-light">There's lot's of cool stuff here!</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <form class="form-inline" style={{ justifyContent: "center" }}>
                  <input
                    class="form-control"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                </form>
              </div>
            </div>

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

        <div class="row bg-white mt-5">
          <div class="col-md-3">
            <h3
              class="p-3 border-bottom"
              style={{
                width: "90%",
                marginLeft: "10px",
                marginBottom: "10px",
              }}
            >
              Explore by
            </h3>
            <div
              class="row ml-2"
              style={{
                marginBottom: "25px",
                margin: "5px auto",
              }}
            >
              <div class="col-md-12 pl-5 pr-5">
                <h5
                  class="mt-3"
                  style={{ width: "50%", display: "inline-block" }}
                >
                  Timeline
                </h5>
                <div
                  class="dropdown"
                  style={{ width: "50%", display: "inline-block" }}
                >
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
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
                    <a class="dropdown-item" href="#">
                      Year
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row ml-2"
              style={{
                marginBottom: "25px",
                margin: "5px auto",
              }}
            >
              <div class="col-md-12 pl-5 pr-5 mt-3">
                <h5 style={{ width: "50%", display: "inline-block" }}>
                  Category
                </h5>
                <div
                  class="dropdown"
                  style={{ width: "50%", display: "inline-block" }}
                >
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
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
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
            </div>
          </div>
          <div class="col-md-6 border-left">
            <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-12" style={{ padding: "0px" }}>
                {content.map((record) => {
                  return (
                    <AppCard
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 5fr 2fr 2fr",
                        gridGap: "5px",
                        border: "1px solid black",
                      }}
                    >
                      <div style={{ border: "1px solid black" }}>
                        <img
                          src={icon}
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "5px",
                            margin: "0 10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        />
                      </div>

                      <div
                        style={{ border: "1px solid black", textAlign: "left" }}
                      >
                        <p
                          style={{
                            fontSize: "15px",
                            margin: "0px",
                            fontWeight: "bold",
                          }}
                        >
                          {record[1]}
                        </p>
                        <p
                          class="text-secondary"
                          style={{
                            fontSize: "15px",
                            color: "#383838",
                          }}
                        >
                          {record[2]}
                        </p>
                      </div>
                      <div
                        style={{
                          border: "1px solid black",
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
                          border: "1px solid black",
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
                          {record[5]}🧠
                        </span>
                      </div>
                    </AppCard>
                  );
                })}
                {/* {contents.map((content, i) => {
                  if (content.name === activeTab) {
                    return content.records.map((record) => {
                      return (
                        <div
                          class="row"
                          style={{
                            borderRadius: "5px",
                            margin: "20px 0",
                          }}
                        >
                          <div class="col-md-2">
                            <img
                              src={icon}
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "5px",
                              }}
                            />
                          </div>
                          <div
                            class="col-md-6"
                            style={{ textAlign: "left", padding: "0px" }}
                          >
                            <div
                              style={{
                                width: "100%",
                              }}
                            >
                              <p
                                style={{
                                  fontSize: "15px",
                                  margin: "0px",
                                  fontWeight: "bold",
                                }}
                              >
                                {record.name}
                              </p>
                              <p
                                class="text-secondary"
                                style={{
                                  fontSize: "15px",
                                  color: "#383838",
                                }}
                              >
                                {record.description}
                              </p>
                            </div>
                          </div>
                          <div class="col-md-2">
                            {record.tags.map((tag) => {
                              return (
                                <span
                                  class="badge badge-secondary"
                                  style={{ margin: "1px" }}
                                >
                                  {tag}
                                </span>
                              );
                            })}
                          </div>
                          <div class="col-md-2">
                            <span
                              class="badge badge-light"
                              style={{
                                paddingTop: "15px",
                                height: "50px",
                                fontSize: "20px",
                              }}
                            >
                              {record.votes}{" "}
                              {content.name === "apps" && <>🧠</>}
                              {content.name === "gallery" && <>🖼</>}
                              {content.name === "models" && <>🤖</>}
                            </span>
                          </div>
                        </div>
                      );
                    });
                  }
                })} */}
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
`;
