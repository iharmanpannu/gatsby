import React from "react";
import Link from "gatsby-link";

const Nav = () => (
  <header>
    <nav>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/projects/">Projects</Link>
        </li>
      </ul>
    </nav>
  </header>
);


export default Nav
