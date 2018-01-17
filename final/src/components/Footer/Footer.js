import React from "react";
import Link from "gatsby-link";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import Header from "../Header/Header"
const Footer = () => (
  <div >
    <footer className="footer">
      <ul>
        <li>
          <a href="">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={["fab", "codepen"]} />
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={["fab", "google"]} />
          </a>
        </li>
      </ul>
    </footer>
  </div>
);

export default Footer;
