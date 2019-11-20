import React from 'react';
import "./Projects.css";

export default function Projects({ title, subtitle, projects, id }) {
  return (
    
      <div className="section-projects" id={id}>
        <h1 className="title-projects">{title}</h1>
        <div className="content-projects">
        {projects && projects.map(element =>
           <div className= 'projects' key={element.titleProject}>
             
             

             <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                  <img className= "image" alt="" src={element.image[0]}/> 
                  </div>
                  <div class="flip-card-back">
                  <img className= "image" alt="" src={element.image[1]}/>  
                  </div>
                </div>
              </div>
             <div className= "text-project">
             <h3 className ="subtitle-project">{element.titleProject}</h3>
             <p className= "description">{element.description}</p>
             <ul className= "ul-tec">
               {element.technologies.map(el =>
                <li className= "technologies-project" key={el}>{el}</li>)}
             </ul>
             <p ><a id="link-project" target="_blank" rel= "noopener noreferrer" href={element.repo}>Ver repositorio</a></p>
             <p ><a id="link-project" target="_blank" rel= "noopener noreferrer" href={element.link}>Ir a página web</a></p>
             </div>
           </div>    
          )}
        </div>
      </div>
      
    
  );
}