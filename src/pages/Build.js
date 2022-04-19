import logo from "../logo.svg";
import "../App.css";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";

const Build = () => {
  return (
    <div className="App">
      <NavigationMenu currentPage={"Build"} />
      <div class="container">Come Build</div>
      <Footer />
    </div>
  );
};

export default Build;
