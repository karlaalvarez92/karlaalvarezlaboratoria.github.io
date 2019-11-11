import React from 'react';

export default function About({ title, subtitle, dark, id }) {
  return (
    <div className="aboutMeBackground">
    {/* <div className={"section" + (dark ? " section-dark" : "")}> */}
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>Mi nombre es Karla Alvarez y soy Front-End developer autodidacta. 
          Recién egresada de Laboratoria donde aprendí en 6 meses de forma 
          intensiva a diseñar WebApps a trabajar con metodologías ágiles y a 
          organizarme para cumplir deadlines. 
          Quiero seguir desarrollando mis habilidades como programadora y llegar 
          a ser Fullstack, además me encantaría certificarme como Scrum Master.</p>
        
        <p>Después de aprender mi más grande pasión es la danza,  antes de ser 
          programadora me ganaba la vida dando clases de ballet y como vendedora, 
          con estas dos actividades descubrí y desarrollé  la mayoría de mis 
          habilidades blandas. Tengo gusto y facilidad para aprender por mi cuenta 
          o con guía, para comunicar mis ideas, para trabajar en equipo, hablar en 
          público y enseñar. Disfruto mucho crear conexión con las personas y aprender 
          de todo lo que me rodea.  </p>





      </div>
    </div>
  );
}