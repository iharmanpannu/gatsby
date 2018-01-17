import React from "react";
import Footer from "../Footer/Footer";

const projects = [
  {
    title: "Jamming",
    link: "http://jamwithme.surge.sh/",
    desc:
      "Spotify Track search and Save Playlist Web App : <br /> Build using Spotify API's and React JS"
  },
  {
    title: "Ravenous",
    link: "https://iharmanpannu.github.io/ravenous",
    desc:
      "A restaurant search Web App created using Yelp API : Built With: React JS, Yelp API's, fetch"
  },
  {
    title: "Gif Search",
    link: "http://gifs-search.surge.sh",
    desc: "Giphy Search Web App created using Giphy.com API's and React JS"
  },
  {
    title: "Simple Portfolio",
    link: "http://project-one-td.surge.sh",
    desc:
      "Frontend Tech Degree Project 1 : <br/> Built with: HTML, CSS Flexbox layout system and CSS Transitions "
  },
  {
    title: "Responsive Portfolio",
    link: "http://td-project-2.surge.sh/",
    desc:
      "Frontend Tech Degree Project 2 : <br/> Built with: HTML, CSS Grid and Flexbox layout system. Also used CSS Animations."
  },
  {
    title: "Find an Agent",
    link: "http://findagent.surge.sh ",
    desc:
      "Static real estate agent company website <br />Built With: HTML, SASS and Transitions"
  },
  {
    title: "URL Shorten Web App",
    link: "https://iharmanpannu.github.io/shorten-url-jquery/",
    desc: "URL Shorten or Expand Web App <br />Built With: ES6, Google API"
  },
  {
    title: "URL Shorten Web App",
    link: "https://iharmanpannu.github.io/shorten-url-jquery/",
    desc: "URL Shorten or Expand Web App <br />Built With: ES6, Google API"
  }
];


const Project = () => (
  <div>
    <section className="projects">
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li>
            <h3 className="project-title">
              <a target="_blank" href={project.link}>
                {project.title}
              </a>
            </h3>
            <p dangerouslySetInnerHTML={{ __html: project.desc }} />
          </li>
        ))}
      </ul>
      <Footer />
    </section>
  </div>
);


export default Project


