import React from "react";
import Link from "gatsby-link";
import Particles from 'react-particles-js';

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
            <Particles 
params = {{
  particles: {
    number: {
      value: 9,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#1b1e34"
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color : "#F16D7E"
      },
      polygon: {
        nb_sides: 9
      },
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 71.02440872179734,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 40,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ffffff",
      opacity: 1,
      width: 2
    },
    move: {
      enable: true,
      speed: 8,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
}

              style={{
                width: '100vw',
                height: '100vh',
              }}
            />
      <span className="line1 line"/>
      <span className="line2 line"/>
      <span className="line3 line"/>
    </div>
  </header>
);

export default Nav
