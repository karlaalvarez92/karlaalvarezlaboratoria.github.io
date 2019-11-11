import React from 'react';
import './Home.css'

export default function Home({ title, subtitle, dark, id }) {
  return (
    <div className="homeBackground">
    {/* <div className={"section" + (dark ? " section-dark" : "")}> */}
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {/* <p>quiero</p>
        <p>que</p>
        <p>se</p>
        <p>vea</p>
        <p>toda</p>
        <p>la</p>
        <p>imagen</p> */}
      </div>
    </div>
  );
}