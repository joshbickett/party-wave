import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import { useState } from "react";

const Submit = () => {
  const [activeTab, setActiveTab] = useState("app");

  const tabs = [
    {
      name: "app",
      description: "Software project or app 👾",
    },
    {
      name: "digital content",
      description: "Digital content and art 🎨",
    },
    {
      name: "model",
      description: "AI model 🤖",
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
      </div>
      <Footer />
    </div>
  );
};

export default Submit;
