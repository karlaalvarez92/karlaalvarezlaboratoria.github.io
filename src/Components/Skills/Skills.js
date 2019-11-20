import React from 'react';
import './Skills.css'

export default function Skills({ title, softSkills, technicallSkills, id }) {
  
  return (
    <div className={"skills-section"} id={id}>
       <div className="skills-tec" id={id}>
       <h1 className = "tec-title">Tools</h1>
        <ul className = "tecList">
          {technicallSkills && technicallSkills.map(el => 
            <li className= "list-tec" key={el}>{el}</li>)}
        </ul>
      </div>

      <div className= "skills-soft">
        <h1 className = "soft-title">Soft skills</h1> 
        <ul className = "softList">
          {softSkills && softSkills.map(el => 
            <li className = "list-soft" key={el}>{el}</li>)}
        </ul>
      </div>

     
     </div>
  );
}
