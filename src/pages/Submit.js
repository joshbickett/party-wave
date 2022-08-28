import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import { useState } from "react";
import { submit } from "../apis/FlaskAPI";

const Submit = () => {
  const [activeTab, setActiveTab] = useState("app");
  const [record, setRecord] = useState({});

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
            padding: "100px 0",
          }}
        >
          <h1>Submit your creation</h1>
          <p>
            You can post your AI content such as apps or small side projects.
          </p>
          <div style={{ marginTop: "100px" }}>
            {/* <h3 style={{ padding: "10px" }}>Type of submission</h3> */}
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
            border: "4px solid black",
            padding: "20px",
          }}
        >
          {tabs.map((tab) => {
            if (tab.name === activeTab) {
              return (
                <div>
                  <h1
                    style={{
                      textAlign: "left",
                      margin: "15px 0",
                    }}
                  >
                    Share more about the project
                  </h1>
                  <p style={{ textAlign: "left" }}>
                    Add information for users to discover your creation
                  </p>
                  <form>
                    <div>
                      <label for="">Name of the {tab.long}</label>
                      <input
                        type="text"
                        aria-describedby="name"
                        placeholder="Enter the name here"
                        onChange={(e) => {
                          setRecord({ ...record, name: e.target.value });
                        }}
                        value={record.name}
                        required
                      />
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid gray",
                        margin: "35px 0",
                      }}
                    ></div>
                    <h3 style={{ textAlign: "left", marginBottom: "15px" }}>
                      Description
                    </h3>
                    <div>
                      <label for="category">
                        One sentence description (short)
                      </label>
                      <input
                        type="text"
                        maxlength="50"
                        aria-describedby="category"
                        placeholder="Something simple and to the point"
                        onChange={(e) => {
                          setRecord({ ...record, short: e.target.value });
                        }}
                        value={record.short}
                        required
                      />
                    </div>
                    <div>
                      <label for="category">Category</label>
                      <input
                        type="text"
                        aria-describedby="category"
                        placeholder="Let us know what category you think fits best"
                        onChange={(e) => {
                          setRecord({
                            ...record,
                            category: e.target.value,
                          });
                        }}
                        value={record.category}
                        required
                      />
                    </div>
                    <div>
                      <label for="description">Detailed description</label>
                      <textarea
                        placeholder="Share more detail about the project here"
                        rows="3"
                        required
                        onChange={(e) => {
                          setRecord({
                            ...record,
                            description: e.target.value,
                          });
                        }}
                        value={record.description}
                      ></textarea>
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid gray",
                        margin: "35px 0",
                      }}
                    ></div>
                    <h3 style={{ textAlign: "left", marginBottom: "15px" }}>
                      Let user's try it
                    </h3>
                    <div>
                      <label for="category">Link to the {tab.long}</label>
                      <input
                        type="text"
                        aria-describedby="category"
                        placeholder="https://example.com"
                        onChange={(e) => {
                          setRecord({ ...record, url: e.target.value });
                        }}
                        value={record.url}
                        required
                      />
                    </div>
                    <div>
                      <label for="website">
                        Twitter account for the product (optional)
                      </label>
                      <input
                        type="text"
                        aria-describedby="website"
                        placeholder="@example"
                        onChange={(e) => {
                          setRecord({
                            ...record,
                            twitterCompany: e.target.value,
                          });
                        }}
                        value={record.twitterCompany}
                      />
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid gray",
                        margin: "35px 0",
                      }}
                    ></div>
                    <h3 style={{ textAlign: "left", marginBottom: "15px" }}>
                      Preview Images
                    </h3>
                    <p style={{ textAlign: "left" }}>
                      The previews will help users get an idea of what the{" "}
                      {tab.long} is like.
                    </p>
                    <div>
                      <input type="file" id="validatedCustomFile" required />
                      <label for="validatedCustomFile">Choose file...</label>
                      <div>Example invalid custom file feedback</div>
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid gray",
                        margin: "35px 0",
                      }}
                    ></div>
                    <h3 style={{ textAlign: "left", marginBottom: "15px" }}>
                      About the team or person that created the {tab.long}
                    </h3>
                    <p style={{ textAlign: "left" }}>
                      Share more the motivation behind the project. Are you
                      looking for collaborators? Is it just for fun? Now is your
                      chance to expand upon the foundation of the project.
                    </p>
                    <div>
                      <textarea
                        placeholder="Share more detail about the app or project here"
                        rows="3"
                        onChange={(e) => {
                          setRecord({
                            ...record,
                            team: e.target.value,
                          });
                        }}
                        value={record.team}
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label for="category">Twitter account (optional)</label>
                      <input
                        type="text"
                        aria-describedby="category"
                        onChange={(e) => {
                          setRecord({
                            ...record,
                            twitter: e.target.value,
                          });
                        }}
                        value={record.twitter}
                        placeholder="@me"
                      />
                    </div>

                    <button
                      type="submit"
                      style={{ width: "50%", marginTop: "25px" }}
                      onClick={() => {
                        submitProject();
                      }}
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
              );
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Submit;
