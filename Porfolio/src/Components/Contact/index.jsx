// Contact.jsx
import { SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import styles from './contact.module.css';

function Contact() {
  const gmailEmail = 'nataliarojasco22@gmail.com';
  const subject = encodeURIComponent('Deseo contactarte!');
  const gmailLink = `mailto:${gmailEmail}?subject=${subject}`;

  return (
    <div className={styles.contactContainer}>
     
        <div className={styles.sidebar}>
          <a href={gmailLink} target="_blank" rel="noopener noreferrer">
            <SiGmail activeClassName={styles.activeLink} />
          </a>
          <a
            href="https://www.linkedin.com/in/natalia-rojas-388418232/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin activeClassName={styles.activeLink} />
          </a>
          <a href="https://github.com/ncarolinarojas" target="_blank" rel="noopener noreferrer">
            <FaGithub activeClassName={styles.activeLink} />
          </a>
        </div>
    </div>
  );
}

export default Contact;