import React from "react"
import Link from "gatsby-link"
import Footer from '../Footer/Footer'
import Particles from "react-particles-js";
import ProfilePic from '../../asset/profile.png'

// import fontawesome from "@fortawesome/fontawesome"; import FontAwesomeIcon
// from "@fortawesome/react-fontawesome"; import Header from "../Header/Header"
const Home = () => (
  <div className="home">
    <div className="lines lines--active">
            <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
              }}
            />

    </div>
    <section className="main-section">
      <div className="profile-picture">
        <button className="button">
          <img
            src={ProfilePic}
            alt="profile_picture"/>
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

    <Footer/>
  </div>
);



export default Home;
