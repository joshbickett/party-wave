import styled from "@emotion/styled";
import icon from "../assets/icon.png";

const Footer = () => {
  const onNavClick = (url) => {
    console.log("window.location: ", window.location);
    window.location.href = window.location.origin + url;
  };

  return (
    <div class="container" style={{ marginTop: "50px" }}>
      <div class="row">
        <div class="col-sm-3 col-md">
          {/* <small class="d-block mb-3 text-muted">some company © 2022</small> */}
        </div>
        <div class="col-md-3 col-md">
          <h5>Pages</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="/explore">
                Explore
              </a>
            </li>
            {/* <li>
              <a class="text-muted" href="/build">
                Build
              </a>
            </li> */}
            {/* <li>
              <a class="text-muted" href="/learn">
                Learn
              </a>
            </li> */}
          </ul>
        </div>
        <div class="col-md-3 col-md">
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <p class="text-muted">A place for ML and AI projects</p>
            {/* <li>
              <a class="text-muted" href="#">
                Team
              </a>
            </li> */}
            {/* <li>
              <a class="text-muted" href="#">
                Privacy
              </a>
            </li> */}
            {/* <li>
              <a class="text-muted" href="#">
                Terms
              </a>
            </li> */}
          </ul>
        </div>
        <div class="col-md-3 col-md">
          {/* <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="#">
                More cool stuff
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
