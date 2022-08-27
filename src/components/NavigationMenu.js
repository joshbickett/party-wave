import styled from "@emotion/styled";
import icon from "../assets/icon.png";
import Robots from "../assets/robots.png";

const NavigationMenu = ({ currentPage }) => {
  const pages = [
    { name: "Explore", url: "/explore" },
    // { name: "Build", url: "/build" },
    // { name: "Learn", url: "/learn" },
  ];

  const onNavClick = (url) => {
    console.log("window.location: ", window.location);
    window.location.href = window.location.origin + url;
  };

  if (currentPage === "Explore") {
    var style = {
      backgroundColor: "#0d9291",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    };
  } else if (currentPage === "Build") {
    var style = {
      backgroundColor: "#343a40",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    };
  } else {
    var style = {
      backgroundColor: "#3d0a91",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    };
  }

  return (
    <nav style={style}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "center",
        }}
      >
        <img
          src={Robots}
          style={{ width: "75px", margin: "5px", borderRadius: "10px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <a
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "24px",
            }}
            href="/explore"
          >
            Party Wave
          </a>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* <ul class="navbar-nav mr-auto">
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
        </ul> */}

        <button
          class="btn bg-light"
          type="submit"
          onClick={() => {
            window.location.href = "/submit";
          }}
          style={{ margin: "10px" }}
        >
          Submit a project
        </button>
      </div>
    </nav>
  );
};

export default NavigationMenu;

const NavItem = styled.div`
  padding: 5px;
  cursor: pointer;
`;
