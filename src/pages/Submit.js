import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import { useState } from "react";

const Submit = () => {
  const [activeTab, setActiveTab] = useState("app");

  const tabs = [
    {
      name: "app",
      description: "Software project or app 👾",
      short: "App",
    },
    {
      name: "digital content",
      description: "Digital content and art 🎨",
      short: "Digital content",
    },
    {
      name: "model",
      description: "AI model 🤖",
      short: "Model",
    },
  ];

  return (
    <div className="App">
      <NavigationMenu currentPage={"Submit"} />
      <div class="container-fluid">
        <div class="row text-white" style={{ backgroundColor: "#6610f2" }}>
          <div class="col-md-12" style={{ margin: "200px 0 0 0" }}>
            <h1 class="text-light">Submit your creation</h1>
            <p class="text-light">
              You can post your AI content such as apps, small side projects,
              pieces of art, or AI model.
            </p>
            <div style={{ marginTop: "100px" }}>
              <h5 style={{ padding: "10px" }}>Select type of submission</h5>
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
        <div class="row bg-white" style={{ height: "25px" }}></div>
        <div class="row">
          <div class="col-md-2"></div>
          <div
            class="col-md-8"
            style={{ borderRadius: "5px", backgroundColor: "#e2e6ea" }}
          >
            <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-10">
                <h1 style={{ textAlign: "left", margin: "15px 0" }}>
                  {tabs.map((tab) => {
                    if (tab.name === activeTab) {
                      return tab.short;
                    }
                  })}
                </h1>
                <form>
                  <div class="form-group">
                    <label for="" style={{ float: "left" }}>
                      Name
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="#"
                      aria-describedby="emailHelp"
                      placeholder="Cool AI App"
                    />
                    {/* <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small> */}
                  </div>
                  <div class="form-group">
                    <label for="" style={{ float: "left" }}>
                      Website
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="#"
                      aria-describedby=""
                      placeholder="CoolAIapp.com"
                    />
                  </div>
                  <button type="submit" class="btn btn-dark mb-3">
                    Submit
                  </button>
                </form>
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
