import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import { useState } from "react";
import { submit } from "../apis/FlaskAPI";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const Submit = () => {
  const [activeTab, setActiveTab] = useState("app");
  const [record, setRecord] = useState({});
  const [completed, setCompleted] = useState(false);

  const tabs = [
    {
      name: "app",
      description: "Software project 👾",
      long: "project",
    },
    // {
    //   name: "digital content",
    //   description: "Digital content and art 🎨",
    //   short: "Digital content",
    // },
    // {
    //   name: "model",
    //   description: "AI model 🤖",
    //   short: "Model",
    // },
  ];

  const appCategories = [
    "Assistant",
    "Writing",
    "Robotics",
    "Vision",
    "Auto",
    "Cybersecurity",
    "Business Intelligence & Analytics",
    "Ad, Aales, or CRM",
    "Text generation",
    "Commerce",
  ];

  const submitProject = () => {
    console.log("record:", record);
    if (
      record.name &&
      record.description &&
      record.category &&
      record.url &&
      record.short &&
      record.team
    ) {
      console.log("submitted!");
      submit(record);
    }
  };

  return (
    <div>
      <NavigationMenu
        currentPage={"Submit"}
        backgroundColor={"#7646c6"}
        buttonBackgroundColor={"#6a3fb2"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundColor: "#9357f5",
            color: "white",
            padding: "50px 0",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Submit your creation</h1>
          <p style={{ textAlign: "center" }}>
            You can post your AI content such as apps or small side projects.
          </p>
          <div>
            {/* <h2 style={{ padding: "10px" }}>Type of submission</h2> */}
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "35px",
          }}
        >
          {tabs.map((tab) => {
            if (tab.name === activeTab) {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h1>Share more about the project</h1>
                  <SecondaryText>
                    Add information for users to discover your creation
                  </SecondaryText>

                  <TextField
                    id="outlined-basic"
                    label="project name"
                    maxlength="150"
                    variant="outlined"
                    onChange={(e) => {
                      setRecord({ ...record, name: e.target.value });
                    }}
                    value={record.name}
                    style={{ width: "300px", margin: "10px 0" }}
                    required
                  />
                  <SecondaryText>
                    Share your email so that we can reach out to you after
                    reviewing your submission.
                  </SecondaryText>

                  <TextField
                    id="outlined-basic"
                    label="creators email"
                    maxlength="150"
                    variant="outlined"
                    onChange={(e) => {
                      setRecord({ ...record, email: e.target.value });
                    }}
                    value={record.email}
                    style={{ width: "300px", margin: "10px 0" }}
                    required
                  />

                  <div
                    style={{
                      borderBottom: "1px solid gray",
                      margin: "35px 0",
                    }}
                  ></div>
                  <h2 style={{ textAlign: "left", marginBottom: "15px" }}>
                    Description
                  </h2>
                  <SecondaryText>
                    Share more about your AI web project
                  </SecondaryText>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="one line description"
                      maxlength="150"
                      variant="outlined"
                      onChange={(e) => {
                        setRecord({ ...record, short: e.target.value });
                      }}
                      value={record.short}
                      style={{ width: "300px", margin: "10px 0" }}
                      required
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="project category"
                      maxlength="150"
                      variant="outlined"
                      onChange={(e) => {
                        setRecord({
                          ...record,
                          category: e.target.value,
                        });
                      }}
                      value={record.category}
                      style={{ width: "300px", margin: "10px 0" }}
                      required
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-multiline-static"
                      label="detailed description"
                      multiline
                      rows={4}
                      maxRows={4}
                      onChange={(e) => {
                        setRecord({
                          ...record,
                          description: e.target.value,
                        });
                      }}
                      value={record.description}
                      style={{ width: "400px", margin: "10px 0" }}
                      required
                    />
                  </div>
                  <div
                    style={{
                      borderBottom: "1px solid gray",
                      margin: "35px 0",
                    }}
                  ></div>
                  <h2>Let user's try it</h2>
                  <SecondaryText>
                    Provide the project URL so the user can try it out
                  </SecondaryText>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="project url"
                      maxlength="150"
                      variant="outlined"
                      onChange={(e) => {
                        setRecord({ ...record, url: e.target.value });
                      }}
                      value={record.url}
                      style={{ width: "300px", margin: "10px 0" }}
                      required
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="twitter url (optional)"
                      maxlength="150"
                      variant="outlined"
                      onChange={(e) => {
                        setRecord({
                          ...record,
                          twitterCompany: e.target.value,
                        });
                      }}
                      value={record.twitterCompany}
                      style={{ width: "300px", margin: "10px 0" }}
                    />
                  </div>
                  <div
                    style={{
                      borderBottom: "1px solid gray",
                      margin: "35px 0",
                    }}
                  ></div>
                  <h2 style={{ textAlign: "left", marginBottom: "15px" }}>
                    Preview Images
                  </h2>
                  <SecondaryText>
                    Nothing is needed right now. We will ask for preview image
                    by email after the review process.{" "}
                  </SecondaryText>
                  <div
                    style={{
                      borderBottom: "1px solid gray",
                      margin: "35px 0",
                    }}
                  ></div>
                  <h2>About the team or person that created the {tab.long}</h2>
                  <SecondaryText>
                    Share more the motivation behind the project. It may help to
                    answer such questions such as. Are you looking for
                    collaborators? Is it just for fun? Now is your chance to
                    expand upon the foundation of the project.
                  </SecondaryText>
                  <div>
                    <TextField
                      id="outlined-multiline-static"
                      label="more about the team"
                      multiline
                      rows={4}
                      maxRows={4}
                      onChange={(e) => {
                        setRecord({
                          ...record,
                          team: e.target.value,
                        });
                      }}
                      value={record.team}
                      style={{ width: "400px", margin: "10px 0" }}
                      required
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="team twitter url (optional)"
                      maxlength="150"
                      variant="outlined"
                      onChange={(e) => {
                        setRecord({
                          ...record,
                          twitter: e.target.value,
                        });
                      }}
                      value={record.twitter}
                      style={{ width: "300px", margin: "10px 0" }}
                    />
                  </div>
                  {!completed && (
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={() => {
                        submitProject();
                        setCompleted(true);
                      }}
                      style={{
                        margin: "20px 0",
                        width: "300px",
                      }}
                    >
                      Submit a project
                    </Button>
                  )}
                  {completed && (
                    <div
                      style={{
                        background: "#7546C6",
                        color: "white",
                        width: "300px",
                        padding: "5px",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      SUBMISSION COMPLETE!
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Submit;

const SecondaryText = styled.p`
  font-size: 16px;
  color: #8e8e8e;
`;
