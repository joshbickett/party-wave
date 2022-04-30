import icon from "../assets/icon.png";
import "../App.css";
import styled from "@emotion/styled";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import { useState } from "react";
import { tab } from "@testing-library/user-event/dist/tab";

const Explore = () => {
  const allContent = [
    {
      name: "apps",
      records: [
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
      ],
    },
    {
      name: "gallery",
      records: [
        {
          icon: "here",
          name: "Elephants drinking tea",
          description: "AI Generated by Dalle2",
          tags: ["gpt-3", "python"],
        },
        {
          icon: "here",
          name: "Coffee at the end of the universe",
          description: "AI Generated by Dalle2",
          tags: ["gpt-3", "funny"],
        },
        {
          icon: "here",
          name: "Tiger holding a globe",
          description: "AI Generated by Dalle2",
          tags: ["gpt-3", "funny"],
        },
      ],
    },
    {
      name: "models",
      records: [
        {
          icon: "here",
          name: "OpenAI GPT-3",
          description: "Text generation model",
          tags: ["gpt-3", "python"],
        },
        {
          icon: "here",
          name: "BERT",
          description: "Text generation model",
          tags: ["gpt-3", "funny"],
        },
        {
          icon: "here",
          name: "DALLE2",
          description: "Make cool images",
          tags: ["gpt-3", "funny"],
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("apps");

  const tabs = [
    { name: "apps", description: "Apps 💻", short: "Apps" },
    { name: "gallery", description: "Gallery 🖼", short: "Creations" },
    { name: "models", description: "AI Models 🤖", short: "Models" },
  ];

  const callToAction = [
    {
      name: "apps",
      subject: "Submit an app",
      description:
        "Did you build something and want to share it with the world? You can submit it ",
      linkText: "here",
      url: "",
    },
    {
      name: "gallery",
      subject: "Enjoy creating art?",
      description: "Submit you creations for others to see ",
      linkText: "here",
      url: "",
    },
    {
      name: "models",
      subject: "Learn about AI",
      description:
        "Curious about how the machine learning and AI which powers these products. Explore more about it ",
      linkText: "here",
      url: "",
    },
  ];

  return (
    <div className="App">
      <NavigationMenu currentPage={"Explore"} />
      <div class="container-fluid">
        <div class="row text-white" style={{ backgroundColor: "#0062cc" }}>
          <div class="col-md-12" style={{ margin: "200px 0 0 0" }}>
            <h1 class="text-light">
              Explore AI tools, projects, and creations
            </h1>
            <p class="text-light">There's lot's of cool stuff here!</p>
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
        {/* <div
          class="row bg-light text-dark"
          style={{ backgroundColor: "#00008B", color: "white" }}
        >
          <div class="col-md-12">
            <h1 style={{ marginTop: "25px" }}>
              {tabs.map((tab) => {
                if (tab.name === activeTab) return tab.description;
              })}
            </h1>
          </div>
        </div> */}

        <div class="row bg-light" style={{ padding: "30px 0" }}>
          <div class="col-md-2"></div>
          <div
            class="col-md-8"
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
            <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-12">
                {allContent.map((content, i) => {
                  if (content.name === activeTab) {
                    return content.records.map((record) => {
                      return (
                        <div
                          class="row"
                          style={{
                            borderRadius: "5px",
                            padding: "5px",
                          }}
                        >
                          <img
                            src={icon}
                            style={{
                              width: "50px",
                              height: "50px",
                            }}
                          />
                          <div
                            style={{
                              width: "55%",
                              textAlign: "left",
                              marginLeft: "15px",
                            }}
                          >
                            <h6>{record.name}</h6>
                            <p
                              style={{
                                marginLeft: "5px",
                                fontSize: "12px",
                                color: "#383838",
                              }}
                            >
                              {record.description}
                            </p>
                          </div>

                          {record.tags.map((tag) => {
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
                      );
                    });
                  }
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
          <div class="col-md-2"></div>
        </div>
        <div class="row bg-white text-dark" style={{ padding: "30px 0" }}>
          <div
            class="col-md-2"
            style={{ margin: "10px 0", borderRight: "1px solid gray" }}
          >
            <h5>
              Top{" "}
              {tabs.map((tab) => {
                if (tab.name === activeTab) return tab.short;
              })}{" "}
              🎉
            </h5>
          </div>
          <div class="col-md-6" style={{ margin: "10px" }}>
            {allContent.map((content, i) => {
              if (content.name === activeTab) {
                {
                  return content.records.map((record) => {
                    console.log("record: ", record);
                    return (
                      <div
                        class="row"
                        style={{
                          borderRadius: "5px",
                          padding: "5px",
                        }}
                      >
                        <img
                          src={icon}
                          style={{
                            width: "50px",
                            height: "50px",
                          }}
                        />
                        <div
                          style={{
                            width: "55%",
                            textAlign: "left",
                            marginLeft: "15px",
                          }}
                        >
                          <h6>{record.name}</h6>
                          <p
                            style={{
                              marginLeft: "5px",
                              fontSize: "12px",
                              color: "#383838",
                            }}
                          >
                            {record.description}
                          </p>
                        </div>

                        {record.tags.map((tag) => {
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
                    );
                  });
                }
              }
            })}
          </div>
          <div class="col-md-3">
            {callToAction.map((call) => {
              if (call.name === activeTab) {
                return (
                  <div
                    class="bg-light"
                    style={{
                      marginTop: "5px",
                      borderRadius: "5px",
                      padding: "20px",
                    }}
                  >
                    <h5>{call.subject}</h5>
                    <p style={{ textAlign: "left" }}>
                      {call.description}
                      <a href="#">{call.linkText}</a>.
                    </p>
                  </div>
                );
              }
            })}

            {/* <div
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
            </div> */}
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
