import icon from "../assets/icon.png";
import "../App.css";
import styled from "@emotion/styled";
import NavigationMenu from "../components/NavigationMenu";

const Home = () => {
  const apps = [
    {
      icon: "here",
      name: "makememe.ai",
      description: "Make memes in under 5 seconds using ai",
      tags: ["gpt-3", "python"],
    },
    {
      icon: "here",
      name: "makememe.ai",
      description: "Make memes in under 5 seconds using ai",
      tags: ["gpt-3", "funny"],
    },
  ];

  return (
    <div className="App">
      <NavigationMenu currentPage={"Discover"} />
      <div class="container">
        <div class="row" style={{ marginTop: "40px" }}>
          <div class="col-sm-1"></div>
          <div
            class="col-sm-3"
            style={{ margin: "10px 0", borderRight: "1px solid gray" }}
          >
            Discover AI apps and projects
          </div>
          <div class="col-sm-6" style={{ margin: "10px" }}>
            <div
              class="row"
              style={{ marginBottom: "10px", marginLeft: "0px" }}
            >
              <div class="col-sm-7">
                <h5 style={{ textAlign: "left" }}>New projects 🤖</h5>
              </div>
            </div>
            {apps.map((app) => {
              return (
                <div
                  class="row"
                  style={{
                    borderRadius: "5px",
                  }}
                >
                  <div class="col-sm-2" style={{ padding: "10px" }}>
                    <img src={icon} style={{ width: "50px", height: "50px" }} />
                  </div>
                  <div class="col-sm-6" style={{ padding: "5px" }}>
                    <div
                      class="row"
                      style={{
                        height: "20px",
                      }}
                    >
                      <h6>{app.name}</h6>
                    </div>
                    <div class="row">
                      <div
                        style={{
                          padding: "5px",
                          fontSize: "12px",
                          color: "#383838",
                        }}
                      >
                        {app.description}
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-sm-4"
                    style={{
                      padding: "5px",
                    }}
                  >
                    {app.tags.map((tag) => {
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
                </div>
              );
            })}
          </div>

          <div class="col-sm-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const AppContainer = styled.div`
  padding: 5px;
`;
