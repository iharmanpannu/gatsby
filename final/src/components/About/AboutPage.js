import React from "react";
import Link from "gatsby-link";
import Footer from "../Footer/Footer";

// import fontawesome from "@fortawesome/fontawesome"; import FontAwesomeIcon
// from "@fortawesome/react-fontawesome"; import Header from "../Header/Header"
const AboutPage = () => (
  <div>
    <section className="about" color="#16a085">
      <h1>About</h1>
      <div>
        <p>Hi, I'm Harman Pannu.</p>
        <p>
          Experienced in Building Frontend Web Applications(React JS) and Static
          Websites(Html, CSS, JS) and seeking to Learn and Grow under Mentorship
          of Proficient Developers. Passionate about learning new technologies
          and solving problems. " There are no secrets to success. It is the
          result of preparation, hard work, and learning from failure. " I code
          every day and when I am not coding I read books, watch programming
          tutorials online, listen to podcasts, learn new technologies and
          workout. Check out my project on -{" "}
          <a href="https://github.com/iharmanpannu">Github </a>
          I look forward to applying my coding experience to a career in tech.
        </p>
      </div>

      <div>
        <div className="resume-inside">
          <h3>Resume</h3>
          <h4>SUMMARY OF QUALIFICATIONS </h4>
          <ul>
            <li>
              Received a Bachelors degree in Computer Applications from KSO
              University.
            </li>
            <li>
              Excellent organization, self-motivation, and problem-solving
              skills.
            </li>
            <li>Creative, strong communication skills.</li>
            <li>Passionate about web development and new technologies.</li>
          </ul>

          <h4>EDUCATION </h4>
          <ul>
            <li>
              Karnataka State Open University - Bachelors of Computer
              Applications 2016
            </li>
            <li>
              Codeacademy - Nov 2017 - Jan 2018- Build front-end Web
              Applications from scratch -
            </li>
            <li>
              TeamTreeHouse - Jan 2018 - Present - Tech Degree - Full Stack
              JavaScript
            </li>
              <h4>Technologies I am currently Learning at Treehouse </h4>
              <ul className="list">
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Node.js</li>
                <li>Angular</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  </div>
);
export default AboutPage;
