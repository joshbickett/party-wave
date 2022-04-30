import logo from "../logo.svg";
import "../App.css";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";

const Build = () => {
  return (
    <div className="App">
      <NavigationMenu currentPage={"Build"} />
      <div class="container-fluid">
        <div class="row text-white" style={{ backgroundColor: "#57606a" }}>
          <div class="col-md-12" style={{ margin: "200px 0 0 0" }}>
            <h1 class="text-light">Share your creations with the world</h1>
            <p class="text-light">
              We are looking for great apps and content to share with users
            </p>
            <div style={{ marginTop: "100px" }}>test</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Build;
<div class="row" style={{ marginTop: "100px" }}>
  <div class="col-md-1"></div>
  <div class="col-md-5" style={{ borderRight: "1px solid gray" }}>
    <h1>It is time to build</h1>
    <button class="btn btn-dark mt-1" type="submit">
      Submit Project
    </button>
  </div>
  <div class="col-md-5">
    <h3>🤖 Share your work</h3>
    <h3>💻 Find collaborates</h3>
    <h3>💰 Gain users</h3>
    <h3>📚 Learn how to improve</h3>
  </div>
  <div class="col-md-1"></div>
</div>;
