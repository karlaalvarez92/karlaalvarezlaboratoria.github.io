import React from 'react';
import './AboutMe.css'

export default function About({ title, id, aboutMe }) {
  
  return (
    <main>
      <div id={id}>
        <h1 className= "about-title">{title}</h1>
        {aboutMe && aboutMe.map((element, index) => <p key={index}>{element}</p>)}   
      </div>
    </main>
  );
}