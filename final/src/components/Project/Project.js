import React from "react";

const projects = [
  {
    title: "Jamming",
    link: "http://jamwithme.surge.sh/",
    desc: "Build using Spotify API and React JS"
  },
  {
    title: "Ravenous",
    link: "https://iharmanpannu.github.io/ravenous",
    desc:
      "A restaurant search Web App created using Yelp API :<br /> Built With: React JS, Yelp API's, fetch"
  },
  {
    title: "Gif Search",
    link: "http://gifs-search.surge.sh",
    desc:
      "Giphy Search Web App created using Giphy.com API's and React JS"
  },
  {
    title: "URL Shorten Web App",
    link: "https://iharmanpannu.github.io/shorten-url-jquery/",
    desc: "URL Shorten or Expand Web App <br />Built With: ES6, Google API"
  }
];


const Project = () => (
  <section className="projects">
        <h1>Projects</h1>
        <p>
          I have worked on many projects. Here are some projects I've
          developed/created.
        </p>
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
  </section>
);


export default Project


