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
            I am Frontend Web Developer I love building Static Websites(Html,
            CSS, JS) and seeking to Learn and Grow under Mentorship of
            Proficient Developers. Passionate about learning new technologies
            and solving problems. I code every day and when I am not coding I
            read books, watch programming tutorials online, listen to podcasts,
            learn new technologies and workout
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

            <h4> Experience </h4>

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
            </ul>
          </div>
        </div>

    </section>

    <Footer />
  </div>
)
export default AboutPage;
