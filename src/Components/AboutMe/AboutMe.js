import React from 'react';
import './AboutMe.css'

export default function About({ title, id, aboutMe }) {
  
  return (
    <div className="aboutMeBackground">
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        {aboutMe && aboutMe.map((element, index) => <p key={index}>{element}</p>)}   
      </div>
    </div>
  );
}