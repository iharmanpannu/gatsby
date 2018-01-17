import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { Title, MainWrapper } from '../components/Headings';
import { Resume, FakeButtons } from '../components/AboutStyles';

export default class About extends React.Component {
  render() {
    return <MainWrapper color="#16a085">
        <Title>About</Title>
        <div>
          <p>Hi, I'm Harman Pannu.</p>
          <p>
            I am Frontend Web Developer I love building Static Websites(Html, CSS, JS) and seeking to Learn and Grow under Mentorship of Proficient Developers. 
            Passionate about learning new technologies and solving problems. 
            I code every day and when I am not coding I read books, watch programming tutorials online, listen to podcasts, learn new technologies and workout
          </p>
          <p>
            Please <Link to="/contact">contact me</Link> to discuss a project, job or just to chat.
          </p>
        </div>

        <Resume>
          <FakeButtons />
          <div className="resume-inside">
            <h3>&#047;&#042; --Resume-- &#042;&#047;</h3>
            <h4>&#047;&#042; SUMMARY OF QUALIFICATIONS &#042;&#047;</h4>
            <ul>
              <li>
                Received a Bachelors degree in Computer Applications from
                KSO University.
              </li>
              <li>
                Excellent organization, self-motivation, and problem-solving
                skills.
              </li>
              <li>Creative, strong communication skills.</li>
              <li>
                Passionate about web development and new technologies.
              </li>
            </ul>

            <h4>&#047;&#042; Experience &#042;&#047;</h4>

            <h4>&#047;&#042; EDUCATION &#042;&#047;</h4>
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
                TeamTreeHouse - Jan 2018 - Present - Tech Degree - Full Stack JavaScript
              </li>
            </ul>
          </div>
        </Resume>
      </MainWrapper>;
  }
}
