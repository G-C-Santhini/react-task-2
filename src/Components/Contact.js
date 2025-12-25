import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from "react-icons/fa";
import {motion} from "framer-motion";
import Resume from "./assets/Resume.pdf";
export default function Contact() {
  return (
    <section className="contact-section">
           <motion.h1
             initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
      <span>Contact Me</span>
      </motion.h1>
      <form className="contact-form">
        <input placeholder="Your Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
            <div className="contact-links">
        <a href="https://www.linkedin.com/in/santhini-priya-b42977283" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/G-C-Santhini" target="_blank"   rel="noopener noreferrer"><FaGithub /></a>
        <a href="mailto:santhinipriya2004@gmail.com"  rel="noopener noreferrer"><FaEnvelope /></a>
        <a href={Resume} download><FaFileDownload /></a>
      </div>
    </section>
  );
}
