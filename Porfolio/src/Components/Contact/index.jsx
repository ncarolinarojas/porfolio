// import React from 'react';
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
  const gmailEmail = 'nataliarojasco22@gmail.com';
  const subject = encodeURIComponent('Deseo contactarte!');

  const gmailLink = `mailto:${gmailEmail}?subject=${subject}`;

  return (
    <div>
      <h3>Contact</h3>
      <div>
        <a href={gmailLink} target="_blank" rel="noopener noreferrer">
          <SiGmail /> 
        </a>
        <a href="https://www.linkedin.com/in/natalia-rojas-388418232/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> 
        </a>
        <a href="https://github.com/ncarolinarojas" target="_blank" rel="noopener noreferrer">
          <FaGithub /> 
        </a>
      </div>
    </div>
  );
}

export default Contact;