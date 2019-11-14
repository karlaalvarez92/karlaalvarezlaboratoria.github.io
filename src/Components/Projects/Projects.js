import React from 'react';
import "./Projects.css";
//import keac from "./nekoffe1.png";

export default function Projects({ title, subtitle, projects, id }) {
  //let algo = './nekoffe.1png'
  return (
    
      <div className="section-projects" id={id}>
        <h1>{title}</h1>
        {projects && projects.map(element =>
           <div className= 'projects' key={element.titleProject}>
             
             <h3>{element.titleProject}</h3>

             {/* <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                  <img className= "image" alt="" src={element.image[0]}/> 
                  </div>
                  <div class="flip-card-back">
                  <img className= "image" alt="" src={element.image[1]}/>  
                  </div>
                </div>
              </div> */}
             
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