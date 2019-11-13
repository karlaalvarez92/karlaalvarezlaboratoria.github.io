import React from 'react';
import "./Projects.css"
import neko1 from "./nekoffe1.png"

export default function Projects({ title, subtitle, projects, id }) {
  return (
    
      <div className="section-projects" id={id}>
        <h1>{title}</h1>
        {projects && projects.map(element =>
           <div className= 'projects' key={element.titleProject}>
             
             <h3>{element.titleProject}</h3>
             {console.log(element.image[0])}
             <img alt="" src={element.image[0]}/> 
             <p>{element.description}</p>
             <ul>
               {element.technologies.map(el =>
                <li key={el}>{el}</li>)}
             </ul>
           </div>    
          )}
      </div>
    
  );
}