import React from "react";
import Link from "gatsby-link";

const Nav = () => (
  <header>
    <nav>
      <ul className="navigation">
        <li>
          <Link id="home-link" to="/">Home</Link>
        </li>
        <li>
          <Link id="about-link" to="/about/">About</Link>
        </li>
        <li>
          <Link id="projects-link" to="/projects/">Projects</Link>
        </li>
      </ul>
    </nav>
  </header>
);


export default Nav
