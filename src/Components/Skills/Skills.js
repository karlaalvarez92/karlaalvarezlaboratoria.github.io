import React from 'react';
import './Skills.css';
import onda from "./onda-correcta.png";

export default function Skills({ techIcons, softSkills, technicallSkills, id }) {
  
  return (
    <div className="skills-container" id={id}>
      <section className= "soft">
        <h1 className = "softSkills">Soft skills</h1> 
        <ul>
          {softSkills && softSkills.map(el => 
            <li key={el}>{el}</li>)}
        </ul>
      </section>

      <img src= {onda} /*"https://i.ibb.co/31WggTW/onda-correcta.png"*/ alt=""/>

      <section className="tech" id={id}>
       <h1 className = "tools">Tools</h1>
        <div>
          {techIcons && techIcons.map(el =>
            <img alt=" " src={el}></img>)}
        </div>
        <ul>
          {technicallSkills && technicallSkills.map(el => 
            <li key={el}>{el}</li>)}
        </ul>
      </section>
      
     </div>
  );
}
