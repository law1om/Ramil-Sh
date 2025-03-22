import './App.css';
import Navbar from "./components/Navbar.jsx";
import { motion } from "framer-motion";

export default function Introduce() {
    const sectionVariants = (delay) => ({
        initial: { opacity: 0, y: -20, filter: "blur(10px)"},
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.3, delay }
    });

    return (
        <div className="container" id="Content">
            <motion.div {...sectionVariants(0)}>
                <div className="intro">
                    <div className="introduce">
                        <div className="text">
                            <h1>Hi, I am Ramil</h1>
                            <h3 className="subtitle">A 17-year-old software developer, specializing in building web applications</h3>
                        </div>
                    </div>
                    <img src="/ava.jpg" alt="Ramil's avatar" className="avatar" />
                </div>
            </motion.div>

            <motion.div {...sectionVariants(0.1)}>
                <div className="about">
                    <h2 className="about-title">My journey</h2>
                    <p>
                        I started with a curiosity for how websites work and soon dived into web development.
                        I love bringing designs to life with React. Along the way, I picked up backend skills
                        with Django and PostgreSQL.
                    </p>
                </div>
            </motion.div>

            <motion.div {...sectionVariants(0.3)}>
                <div className="education">
                    <h2 className="education-title">Education</h2>
                    <div className="education-item">
                        <img src="/ауыауфыауцауф.jpeg" alt="" className="education-logo " />
                        <div className="education-info">
                            <div className="education-details">
                                <h3 className="education-heading">Oraz Jandosov's International Linguistic Gymnasium</h3>
                                <p className="education-dates">2014 - 2023</p>
                            </div>
                            <p className="education-subtext">High School Diploma</p>
                        </div>
                    </div>
                    <div className="education-item">
                        <img src="/aii.jpg" alt="" className="education-logo" />
                        <div className="education-info">
                            <div className="education-details">
                                <h3 className="education-heading">Astana IT College</h3>
                                <p className="education-dates">2023 - 2026</p>
                            </div>
                            <p className="education-subtext">Diploma of secondary vocational education</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div {...sectionVariants(0.5)}>
                <div className="experience-with">
                    <h2 className="experience-text">Experience with</h2>
                    <div className="experience-item">
                        <img src="/html.svg" alt="" className="experience-logo dark-mode-icon" />
                        <img src="/css.svg" alt="" className="experience-logo dark-mode-icon" />
                        <img src="/js.svg" alt="" className="experience-logo dark-mode-icon" />
                        <img src="/react.svg" alt="" className="experience-logo dark-mode-icon" />
                        <img src="/python.svg" alt="" className="experience-logo dark-mode-icon" />
                        <img src="/postgre.svg" alt="" className="experience-logo dark-mode-icon" />
                    </div>
                </div>
            </motion.div>

            <motion.div {...sectionVariants(0.6)}>
                <div className="contact-container">
                    <span className="contact-badge">Contact</span>
                    <h1 className="contact-title">Find me here</h1>
                    <p className="contact-text">
                        Text me on <a href="https://t.me/muimuimchsya" className="contact-link">Telegram</a> with whatever
                        you have and I'll respond whenever I can.
                    </p>
                </div>
            </motion.div>

            <Navbar />
        </div>
    );
}
