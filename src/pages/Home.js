import icon from "../assets/icon.png";
import "../App.css";
import styled from "@emotion/styled";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";

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
      <NavigationMenu currentPage={"Home"} />
      <div class="container-fluid">
        <div class="row" style={{ backgroundColor: "black" }}>
          <div class="col-md-12" style={{ margin: "200px 0" }}>
            <h1 class="text-light">
              Discover AI tools, projects, and creations
            </h1>
            <p class="text-light">There's a lot of stuff here!</p>
          </div>
        </div>
        <div class="row" style={{ marginTop: "30px" }}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

const AppContainer = styled.div`
  padding: 5px;
`;
