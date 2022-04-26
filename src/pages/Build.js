import logo from "../logo.svg";
import "../App.css";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";

const Build = () => {
  return (
    <div className="App">
      <NavigationMenu currentPage={"Build"} />
      <div class="container">
        <div class="row" style={{ marginTop: "100px" }}>
          <div class="col-md-2"></div>
          <div class="col-md-8">start building</div>
          <div class="col-md-2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Build;
