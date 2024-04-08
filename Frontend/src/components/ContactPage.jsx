import React from "react";
import "./ContactPage.css";
import ContactCard from "./ContactCard";

export default function ContactPage() {
  return (
    <div className="contact-us-page">
      <div className="contact-us-hero">
        <div className="contact-us-back"></div>
        <h2 className="contact-us-heading">Contact Us</h2>
        <ContactCard />
      </div>
      <div className="contact-us-section-info">
        <div className="contact-us-1">
          <a href="" className="contact-us-left">
            <img src="./call.png" alt="" /> Call Us&emsp;
          </a>
          :-
          <a href="" className="contact-us-right">
            &emsp;+91 9373124725
          </a>
        </div>
        <div className="contact-us-2">
          <a href="" className="contact-us-left">
            <img src="./email.png" alt="" /> Email&emsp;
          </a>
          :-
          <a href="" className="contact-us-right">
            {" "}
            &emsp;kshaminnovation@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
