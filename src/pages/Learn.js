import logo from "../logo.svg";
import "../App.css";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";

const Learn = () => {
  return (
    <div className="App">
      <NavigationMenu currentPage={"Learn"} />
      <div class="container">Come learn</div>
      <Footer />
    </div>
  );
};

export default Learn;
