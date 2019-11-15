import React from 'react';
import './Contact.css';


export default function Contact({ title, contact, id }) {
  return (
    
      <div className="contact-container" id={id}>
        <div className= "text-container" >
        <h1 className= "contact-title">{title}</h1>
        {contact && contact.map( el =>  
          <div key={el.id} className="contact">
            <a className="links" href={el.link}>{el.text}</a>
            <img alt ="" className="icon" src={el.icon}/>  
          </div>
        )}
        </div>

        <div className= "background trans"></div>
    </div>
  );
}
