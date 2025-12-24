
import {motion} from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
const skills = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "GitHub", icon: <FaGithub /> }
];


function Skills() {
  return (
    <section className="section">
      <motion.h1
          initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >

      <span>Skills</span></motion.h1>
      <div className="skills">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
      <span style={{ marginTop: "60px" }}>Education</span>
</motion.h1>
      <div className="education">
        <div className="edu-card">
          <h3>Bachelor of Engineering</h3>
          <p>Computer Science and Engineering</p>
          <p>Einstein College Of Engineering ,Tirunelveli</p>
          <span>2021 – 2025</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;