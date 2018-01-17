import React from "react";
import Link from "gatsby-link";
import Particles from "react-particles-js";

const Nav = () => (
  <header>
    <nav>
      <ul className="navigation">
        <li>
          <Link id="home-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link id="about-link" to="/about/">
            About
          </Link>
        </li>
        <li>
          <Link id="projects-link" to="/projects/">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
    <div className="lines lines--active">
      <span className="line1 line" />
      <span className="line2 line" />
      <span className="line3 line" />
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#000",
                blur: 1
              }
            }
          }
        }}
        style={{
          zIndex: "-1"
        }}
      />
    </div>
  </header>
);

export default Nav
