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
    <div className="App">
      <NavigationMenu currentPage={"Submit"} />
      <div class="container-fluid">
        <div class="row text-white" style={{ backgroundColor: "#6610f2" }}>
          <div class="col-md-12" style={{ margin: "170px 0 0 0" }}>
            <h1 class="text-light">Submit your creation</h1>
            <p class="text-light">
              You can post your AI content such as apps or small side projects.
            </p>
            <div style={{ marginTop: "100px" }}>
              {/* <h5 style={{ padding: "10px" }}>Type of submission</h5> */}
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
        <div class="row bg-white" style={{ height: "25px" }}></div>
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8" style={{ borderRadius: "5px" }}>
            <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-10" style={{ fontSize: "14px" }}>
                {tabs.map((tab) => {
                  if (tab.name === activeTab) {
                    return (
                      <div>
                        <h1 style={{ textAlign: "left", margin: "15px 0" }}>
                          Share more about the project
                        </h1>
                        <p style={{ textAlign: "left" }} class="text-secondary">
                          Add information for users to discover your creation
                        </p>
                        <form>
                          <div class="form-group">
                            <label for="" style={{ float: "left" }}>
                              Name of the {tab.long}
                            </label>
                            <input
                              type="text"
                              class="form-control"
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
                            class="row border-bottom border-secondary"
                            style={{
                              borderBottom: "1px solid gray",
                              margin: "35px 0",
                            }}
                          ></div>
                          <h5
                            style={{ textAlign: "left", marginBottom: "15px" }}
                          >
                            Description
                          </h5>
                          <div class="form-group">
                            <label for="category" style={{ float: "left" }}>
                              One sentence description (short)
                            </label>
                            <input
                              type="text"
                              class="form-control"
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
                          <div class="form-group">
                            <label for="category" style={{ float: "left" }}>
                              Category
                            </label>
                            <input
                              type="text"
                              class="form-control"
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
                          <div class="form-group">
                            <label for="description" style={{ float: "left" }}>
                              Detailed description
                            </label>
                            <textarea
                              class="form-control"
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
                            class="row border-bottom border-secondary"
                            style={{
                              borderBottom: "1px solid gray",
                              margin: "35px 0",
                            }}
                          ></div>
                          <h5
                            style={{ textAlign: "left", marginBottom: "15px" }}
                          >
                            Let user's try it
                          </h5>
                          <div class="form-group">
                            <label for="category" style={{ float: "left" }}>
                              Link to the {tab.long}
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              aria-describedby="category"
                              placeholder="https://example.com"
                              onChange={(e) => {
                                setRecord({ ...record, url: e.target.value });
                              }}
                              value={record.url}
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label for="website" style={{ float: "left" }}>
                              Twitter account for the product (optional)
                            </label>
                            <input
                              type="text"
                              class="form-control"
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
                            class="row border-bottom border-secondary"
                            style={{
                              borderBottom: "1px solid gray",
                              margin: "35px 0",
                            }}
                          ></div>
                          <h5
                            style={{ textAlign: "left", marginBottom: "15px" }}
                          >
                            Preview Images
                          </h5>
                          <p
                            style={{ textAlign: "left" }}
                            class="text-secondary"
                          >
                            The previews will help users get an idea of what the{" "}
                            {tab.long} is like.
                          </p>
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="validatedCustomFile"
                              required
                            />
                            <label
                              class="custom-file-label"
                              for="validatedCustomFile"
                            >
                              Choose file...
                            </label>
                            <div class="invalid-feedback">
                              Example invalid custom file feedback
                            </div>
                          </div>
                          <div
                            class="row border-bottom border-secondary"
                            style={{
                              borderBottom: "1px solid gray",
                              margin: "35px 0",
                            }}
                          ></div>
                          <h5
                            style={{ textAlign: "left", marginBottom: "15px" }}
                          >
                            About the team or person that created the {tab.long}
                          </h5>
                          <p
                            style={{ textAlign: "left" }}
                            class="text-secondary"
                          >
                            Share more the motivation behind the project. Are
                            you looking for collaborators? Is it just for fun?
                            Now is your chance to expand upon the foundation of
                            the project.
                          </p>
                          <div class="form-group">
                            <textarea
                              class="form-control"
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
                          <div class="form-group">
                            <label for="category" style={{ float: "left" }}>
                              Twitter account (optional)
                            </label>
                            <input
                              type="text"
                              class="form-control"
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
                            class="btn btn-dark mb-3"
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
              <div class="col-md-1"></div>
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Submit;
