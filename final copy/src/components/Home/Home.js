import React from "react"
import Link from "gatsby-link"
import Footer from '../Footer/Footer'
import Particles from "react-particles-js";

// import fontawesome from "@fortawesome/fontawesome"; import FontAwesomeIcon
// from "@fortawesome/react-fontawesome"; import Header from "../Header/Header"
const Home = () => (
  <div className="home">

    <section className="main-section">
      <div className="profile-picture">
        <button className="button">
          <img
            src="https://image.ibb.co/ceo396/profile_picture.jpg"
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

// const Header = () => (   <div     style={{       background: 'rebeccapurple',
//       marginBottom: '1.45rem',     }}   >     <div       style={{ margin: '0
// auto',         maxWidth: 960,         padding: '1.45rem 1.0875rem',       }}
// >       <h1 style={{ margin: 0 }}>         <Link       to="/" style={{
// color: 'white', textDecoration: 'none',           }}     > Harman </Link>
// </h1>     </div>   </div> )

export default Home;
