import React from "react"
import Link from "gatsby-link"
import Footer from '../Footer/Footer'
import Particles from "react-particles-js";

// import fontawesome from "@fortawesome/fontawesome"; import FontAwesomeIcon
// from "@fortawesome/react-fontawesome"; import Header from "../Header/Header"
const Home = () => (
  <div className="home">
    <Particles
      params={{
        particles: {
          number: {
            value: 2,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#289EF2"
          },
          shape: {
            type: "polygon",
            stroke: {
              width: 0,
              color: "#289EF2"
            },
            polygon: {
              nb_sides: 6
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
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
            value: 35.51220436089867,
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
            speed: 1.5783201938177185,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "grab"
            },
            onclick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 251.73215698496793,
              size: 0,
              duration: 1.2786395275426943,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
      style={{
        zIndex: -1000
      }}
    >
    </Particles>
    <section className="main-section">
      <div className="profile-picture">
        <button className="button">
          <img
            src="https://image.ibb.co/ceo396/profile_picture.jpg"
            alt="profile_picture"
          />
        </button>
      </div>

      <div>
        <h1 className="name">
          <span>
            <span>H</span>
          </span>
          <span>
            <span>a</span>
          </span>
          <span>
            <span>r</span>
          </span>
          <span>
            <span>m</span>
          </span>
          <span>
            <span>a</span>
          </span>
          <span>
            <span>n</span>
          </span>
          <span>
            <span>P</span>
          </span>
          <span>
            <span>a</span>
          </span>
          <span>
            <span>n</span>
          </span>
          <span>
            <span>n</span>
          </span>
          <span>
            <span>u</span>
          </span>
        </h1>
        <h4>Front End Web Developer</h4>
      </div>
    </section>

    <Footer />
  </div>
);

// const Header = () => (   <div     style={{       background: 'rebeccapurple',
//       marginBottom: '1.45rem',     }}   >     <div       style={{ margin: '0
// auto',         maxWidth: 960,         padding: '1.45rem 1.0875rem',       }}
//  >       <h1 style={{ margin: 0 }}>         <Link       to="/" style={{
//  color: 'white', textDecoration: 'none',           }}     > Harman </Link>
//    </h1>     </div>   </div> )

export default Home;
