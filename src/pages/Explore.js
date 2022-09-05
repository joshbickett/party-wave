import icon from "../assets/icon.png";
import Robots from "../assets/robots.png";
import Writing from "../assets/writing.png";
import AIImage from "../assets/image.png";
import Launch from "../assets/launch.png";
import Automation from "../assets/automation.png";
import "../App.css";
import styled from "@emotion/styled";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Discovery from "../components/Discovery";
import ProjectView from "../components/ProjectView";

import { getContent } from "../apis/FlaskAPI";
const Explore = () => {
  useEffect(() => {
    getContent().then((result) => {
      console.log("result: ", result.records);
      setProjects(result.records);
    });
  }, []);
  const [projects, setProjects] = useState([]);

  const [viewBy, setViewBy] = useState("new");
  const [currentProjectID, setCurrentProjectID] = useState(-1);
  // const [currentProject, setCurrentProject] = useState({});

  useEffect(() => {
    // content[activeProject]
    // console.log("activeProjectID", activeProjectID);
    // console.log("projects", projects);
    // const project = projects[activeProjectID];
    // console.log("project", project);
  }, [currentProjectID]);

  const [activeTab, setActiveTab] = useState("apps");

  const tabs = [
    { name: "apps", description: "Apps and projects 💻", short: "Apps" },
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

  const filters = [
    { name: "All", img: Robots },
    { name: "Language", img: Writing },
    { name: "Image", img: AIImage },
    { name: "Automation", img: Automation },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const appCardClicked = (e, index) => {
    if (e.target.id === "vote-button") return;
    console.log("clicked", index);
    setCurrentProjectID(index);
  };

  return (
    <div>
      <NavigationMenu
        currentPage={"Explore"}
        backgroundColor={"#0d9291"}
        buttonBackgroundColor={"#096362"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundColor: "#11B7B6",
            color: "white",
            padding: "50px 0",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Explore AI-first web projects</h1>
          <p style={{ textAlign: "center" }}>See what's going on</p>

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
        </div>
        {currentProjectID === -1 && (
          <Discovery
            filters={filters}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            projects={projects}
            appCardClicked={appCardClicked}
          />
        )}
        {currentProjectID !== -1 && (
          <ProjectView project={""} setActiveProject={setCurrentProjectID} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Explore;

const AppContainer = styled.div`
  padding: 5px;
`;
