import React from "react";
import "./Projects.css";

export default function Projects({ title, subtitle, projects, id }) {
  return (
    <div className="projects-container" id={id}>
      <div>
      <h1>{title}</h1>

      <main>
        {projects &&
          projects.map(element => (

            <section key={element.titleProject}>
              {/* <div className= "image-container"> */}
              <div className="flip-card">
                {/* <div className="flip-card-inner">
                  <div className="flip-card-front"> */}
                    {/* <img id="project-img" alt="" src={element.image[0]} /> */}
                  {/*</div>
                  <div className="flip-card-back">
                    <img alt="" src={element.image[1]} />
                  </div>
                </div> */}
              </div>
              {/* </div> */}

              <article>
                <h3>{element.titleProject}</h3>
                <p>{element.description}</p>
                <ul>
                  {element.technologies.map(el => (
                    <li key={el}>
                      {el}
                    </li>
                  ))}
                </ul>
                <p>
                  <a
                    id="link-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={element.repo}
                  >
                    Go to repository
                  </a>
                </p>
                <p>
                  <a
                    id="link-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={element.link}
                  >
                    Go to web site
                  </a>
                </p>
              </article>
            </section>
          ))}
      </main>
      </div>
    </div>
  );
}
