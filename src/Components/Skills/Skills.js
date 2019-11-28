import React from 'react';
import './Skills.css'

export default function Skills({ title, softSkills, technicallSkills, id }) {
  
  return (
    <div className="skills-container" id={id}>
       <section className="tech" id={id}>
       <h1 className = "tools">Tools</h1>
        <ul>
          {technicallSkills && technicallSkills.map(el => 
            <li key={el}>{el}</li>)}
        </ul>
      </section>

      {/* <img src="https://i.ibb.co/31WggTW/onda-correcta.png" alt=""/> */}

      <section className= "soft">
        <h1 className = "softSkills">Soft skills</h1> 
        <ul>
          {softSkills && softSkills.map(el => 
            <li key={el}>{el}</li>)}
        </ul>
      </section>
     </div>
  );
}
