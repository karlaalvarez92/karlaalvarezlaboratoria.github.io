import React from "react";
import "./Home.css";

export default function Home({ title, subtitle,id }) {
  return (
    <div id={id} className="home-container">
      <div className="text-home">
        <h1 className= "title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>  
      <div className="background trans"></div>
    </div>
  );
}
