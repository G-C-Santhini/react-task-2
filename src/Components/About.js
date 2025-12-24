import profile from "./assets/profile.jpg"
import aboutbgvideo from "./assets/aboutbgvideo.mp4"
import {motion} from "framer-motion";
function About(){
    return (
        <section className='section about about-video'>
             <video
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={aboutbgvideo} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
            <div className="about-img">
            <img src={profile} alt="profile" className="profile-img"/></div>

            <div className="about-content">

                <motion.h1
             initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
       >
            About <span> Me</span>
             </motion.h1>
            <p>I am a passionate and dedicated software developer with strong hands-on experience gained through internships and structured training programs.
             I have worked on multiple real-time projects that helped me build a solid foundation in front-end and full-stack web development.
             I am skilled in ReactJS, HTML, CSS, and JavaScript, and I enjoy creating responsive, user-friendly, and visually appealing web applications.
             Through my projects, I have learned how to convert ideas and designs into functional applications, handle component-based architecture, manage state,
             and write clean, maintainable code.I am a quick learner who is always eager to explore and implement new technologies.
             My goal is to grow as a software developer by working with a dynamic company where I can contribute my skills, learn from experienced professionals,
              and build impactful applications that deliver real value to users.</p>
            </div>
        </section>
    )
}

export default About;