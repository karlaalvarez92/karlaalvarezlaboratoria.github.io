import React from 'react';
import './Skills.css'

export default function Skills({ title, softSkills, technicallSkills, id }) {
  
  return (
    <div className={"skills-section"} id={id}>
      <h1>{title}</h1>

      <div className="soft">
        <h3>Soft skills</h3> 
        <ul className = "softLis">
          {softSkills && softSkills.map(el => 
            <li key={el}>{el}</li>)}
        </ul>
      </div>

      <div className= "technicall">
        <h3>Technicall kills</h3>
        <ul className = "technicallList">
          {technicallSkills && technicallSkills.map(el => 
            <li key={el}>{el}</li>)}
        </ul>
      </div>
    </div>
  );
}
