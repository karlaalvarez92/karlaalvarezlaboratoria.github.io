import React from 'react';
import './Home.css'

export default function Home({ title, subtitle, dark, id }) {
  return (
    <div className="homeBackground">
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}