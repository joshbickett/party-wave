import logo from "./logo.svg";
import "./App.css";
import NavigationMenu from "./components/NavigationMenu";

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <div class="container">
        <div class="row" style={{ margin: "80px" }}>
          <div class="col-sm"></div>
          <div class="col-sm">
            <h1>It is time to build</h1>
          </div>
          <div class="col-sm"></div>
        </div>
        <div class="row" style={{ margin: "30px" }}>
          <div class="col-sm">to try</div>
          <div class="col-sm"></div>
          <div class="col-sm"></div>
        </div>
        <div class="row" style={{ margin: "30px" }}>
          <div class="col-sm"></div>
          <div class="col-sm"></div>
          <div class="col-sm">and learn</div>
        </div>
      </div>
      <div
        class="container-fluid"
        style={{
          marginTop: "100px",
          backgroundColor: "black",
          padding: "10px",
        }}
      >
        <div class="row text-light">
          <div class="col-sm">
            <h3>Post your project to be discovered.</h3>
          </div>
        </div>
        <div class="row text-light">
          <div class="col-sm">
            <h3>Collaborate with others.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
