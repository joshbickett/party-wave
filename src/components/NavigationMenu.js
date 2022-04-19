import styled from "@emotion/styled";
import icon from "../assets/icon.png";

const NavigationMenu = ({ currentPage }) => {
  const pages = [
    { name: "Discover", url: "/" },
    { name: "Build", url: "/build" },
    { name: "Learn", url: "/learn" },
  ];

  const onNavClick = (url) => {
    console.log("window.location: ", window.location);
    window.location.href = window.location.origin + url;
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">
        apz.ai
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {pages.map((page) => {
            if (currentPage === page.name) {
              return (
                <li class="nav-item">
                  <a class="nav-link active">
                    <NavItem onClick={() => onNavClick(page.url)}>
                      {page.name}
                    </NavItem>
                  </a>
                </li>
              );
            } else {
              return (
                <li class="nav-item">
                  <a class="nav-link">
                    <NavItem onClick={() => onNavClick(page.url)}>
                      {page.name}
                    </NavItem>
                  </a>
                </li>
              );
            }
          })}
        </ul>
        <form class="form-inline my-2 my-lg-0 ">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search 🔍
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavigationMenu;

const NavItem = styled.div`
  padding: 5px;
  cursor: pointer;
`;
