import React from 'react';

export default function About({ title, id, aboutMe }) {
  return (
    <div className="aboutMeBackground">
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{aboutMe[0]}</p>
        <p>{aboutMe[1]}</p>    
      </div>
    </div>
  );
}