import {motion} from "framer-motion";
const projects = [
  {
    title: "Login & Signup",
    tech: "HTML, CSS, JS",
    live:"https://g-c-santhini.github.io/Login-Signup/",
    github:"https://g-c-santhini.github.io/Login-Signup/"
  },
  {
    title: "Vegetables, Fruits, Chocolates and Freshjuices",
    tech: "HTML, CSS, JS",
    live:"https://g-c-santhini.github.io/Vegetable-Shop/",
    github:"https://g-c-santhini.github.io/Vegetable-Shop/"
  },
  {
    title: "Cake Menu",
    tech: "Html, CSS, JS",
    live:"https://g-c-santhini.github.io/Cake_Menu/",
    github:"https://g-c-santhini.github.io/Cake_Menu/"
  },
];

export default function Projects() {
  return (
    <section className="section">
           <motion.h1
             initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
      <span>Projects</span>
      </motion.h1>
      <div className="projects">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.tech}</p>
            <div className="links">
                 <a href={p.live} target="_blank" rel="noreferrer">
              <button>Live</button></a>
                <a href={p.github} target="_blank" rel="noreferrer">
              <button className="outline">GitHub</button></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
