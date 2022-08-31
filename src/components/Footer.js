import styled from "@emotion/styled";
import icon from "../assets/icon.png";

const Footer = () => {
  const onNavClick = (url) => {
    console.log("window.location: ", window.location);
    window.location.href = window.location.origin + url;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <a
          href="https://twitter.com/partywave?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-show-count="false"
        >
          Follow @partywave
        </a>
      </div>
    </div>
  );
};

export default Footer;
