import {motion} from "framer-motion";
import Resume from "./assets/Resume.pdf";
 function Home(){
    return(
        <section className="home">
            <motion.h1
             initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
            Hi, I'm <span>Santhini</span>
        </motion.h1>
        <p>Frontend Developer</p>
    <p>I am a dedicated software developer with hands-on experience gained 
through internships and training programs. I have developed projects 
utilizing technologies such as ReactJS, HTML, CSS, and 
JavaScript, and I’m eager to implement and learn new technologies as I 
grow my career alongside a dynamic company</p>
        <div className="home-btns">
            <a href={Resume}download>
            <button>Download Resume</button>
            </a>

              <a href="/contact">
            <button className="outline">Contact Me</button>
              </a>
        </div>
        </section>
    );
}

export default Home;