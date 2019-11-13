import React from 'react';
import './Contact.css';


export default function Contact({ title, subtitle, contact, id }) {
  return (
    //<div id="contactBackground" className={"section" + (dark ? " section-dark" : "")}>
    <div className= "contactBackground">
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        {contact && contact.map( el =>  
          <div key={el.id} className="contact">
            <div className="icon">{el.image}</div>
            <a href={el.link}>{el.text}</a>
          </div>
        )}
        {console.log()}
        
      </div>
    </div>
  );
}
