import logo from "../logo.svg";
import "../App.css";
import NavigationMenu from "../components/NavigationMenu";

const Learn = () => {
  return (
    <div className="App">
      <NavigationMenu currentPage={"Learn"} />
      <div class="container">Come learn</div>
    </div>
  );
};

export default Learn;
