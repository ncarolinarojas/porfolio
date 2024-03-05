import { SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaRegFilePdf } from "react-icons/fa6";
import styles from './contact.module.css';
import { Link } from 'react-router-dom';

function Contact() {
  const gmailEmail = 'nataliarojasco22@gmail.com';
  const subject = encodeURIComponent('Deseo contactarte!');
  const gmailLink = `mailto:${gmailEmail}?subject=${subject}`;
  const pdfLink = '../../../assets/CVNataliaRojas.pdf';

  return (
    <section className={styles.contactContainer} id='contact'>
      <div className={styles.sidebar}>
        <a href={gmailLink} target="_blank" rel="noopener noreferrer">
          <SiGmail />
        </a>
        <Link to="https://www.linkedin.com/in/natalia-rojas-388418232/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </Link>
        <a href="https://github.com/ncarolinarojas" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={pdfLink} download="CVNataliaRojas.pdf" target="_blank" rel="noopener noreferrer">
          <FaRegFilePdf />
        </a>
      </div>
    </section>
  );
}

export default Contact;
