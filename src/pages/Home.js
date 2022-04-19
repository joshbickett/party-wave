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
        <div class="row" style={{ marginTop: "30px" }}>
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
                <h5 style={{ textAlign: "left" }}>Top apps this week 🎉</h5>
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
            <button
              type="button"
              class="btn btn-primary"
              style={{ marginTop: "15px" }}
            >
              See more
            </button>
          </div>

          <div class="col-sm-2"></div>
        </div>
        <div class="row mt-2">
          <div class="col-sm-1"></div>
          <div
            class="col-sm-6 bg-light"
            style={{ marginTop: "5px", borderRadius: "5px" }}
          >
            <div class="row ml-2">
              <h5 class="mt-3">New by</h5>
              <div class="dropdown ml-2 mt-0 mt-2">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Category
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
          <div
            class="col-sm-4 bg-light"
            style={{ marginTop: "5px", borderRadius: "5px" }}
          >
            <div class="row mt-3">
              <h5>Submit an app</h5>
            </div>
            <div class="row">
              <p style={{ textAlign: "left" }}>
                Did you build something and want to share it with the world? You
                can submit it <a href="#">here</a>
              </p>
            </div>
          </div>
          <div class="col-sm-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const AppContainer = styled.div`
  padding: 5px;
`;
