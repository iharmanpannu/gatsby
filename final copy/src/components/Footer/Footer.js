import React from "react";
import Link from "gatsby-link";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import Header from "../Header/Header"
const Footer = () => (
  <div>
    <footer className="footer">
      <ul>
        <li>
          <a href="https://github.com/iharmanpannu">
            <FontAwesomeIcon icon={["fab", "github"]} className="tooltip" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/iharmanpannu">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/iharmanpannu/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/iharmanpannu/#">
            <FontAwesomeIcon icon={["fab", "codepen"]} />
          </a>
        </li>
        <li>
          <a href="mailto:iharmanpannu@gmail.com?Subject=Hire Me :)">
            <FontAwesomeIcon icon={["fab", "google"]} />
          </a>
        </li>
      </ul>
    </footer>
  </div>
);

export default Footer;
