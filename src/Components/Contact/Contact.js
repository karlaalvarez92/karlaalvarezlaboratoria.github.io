import React from "react";
import "./Contact.css";

export default function Contact({ title, contact, id }) {
  return (
    <div className="contact-container" id={id}>
      <section>
        <h1>{title}</h1>
        {contact &&
          contact.map(el => (
            <div key={el.id}>
              <a href={el.link} target="_blank" rel="noopener noreferrer">
                <img alt="" src={el.icon} />
              </a>
            </div>
          ))}
        {/* <div className="contact-trans"></div> */}
      </section>
    </div>
  );
}
