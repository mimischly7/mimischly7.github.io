// import './App.css';
// import './common.css';
import ProjectBox from "./ProjectBox"
import ExperienceBox from "./ExperienceBox"
import ContactSection from "./ContactSection"
import CodeFontStyler from "./CodeFontStyler"
import Navbar from "./Navbar.js"

// data
import contact_json from './data/contact.json'
import projects_json from './data/projects.json'
import experiences_json from './data/experiences.json'
import welcome_json from './data/welcome.json'

function About() {
    return (
        <div className="App">
            <header>
                <Navbar/>
            </header>

           <div className="social-sidebar">
                <a href="https://github.com/mimischly7" target="_blank" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/mimischly" target="_blank" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="mailto:mimis.chlympatsos@mail.utoronto.ca" target="_blank" aria-label="Email">
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </div>

            <section id="home">

                <div className="profile-picture">
                    <img src="/images/portrait2.jpg" alt="Mimis Chlympatsos" style={{width: "250px"}}></img>
                </div>
                <div className="welcome-text">
                    <h1>{welcome_json.title}</h1>
                    {welcome_json.paragraphs.map((par) => <CodeFontStyler text={par}/>)}
                </div>
            </section>

            <section id="projects">
                <h2>Projects</h2>

                {projects_json.map((proj) =>
                    <ProjectBox
                        title={proj.title}
                        tech_tags={proj.tech_tags}
                        description={proj.description}
                        img_path={proj.img_path}
                        link={proj.link}
                    />
                )}
            </section>

            <section id="experiences">
                <h2>Experiences</h2>

                {experiences_json.map((exp) =>
                    <ExperienceBox
                        employer={exp.employer}
                        position={exp.position}
                        time_period={exp.time_period}
                        description={exp.description}
                        tech_tags={exp.tech_tags}
                        link={exp.link}
                    />
                )}
            </section>

            <section id="resume">
                <h2>Resume</h2>

                <div className="resume-container">
                    <a href="/data/resume_final.pdf" target="_blank" className="download-resume">View</a>

                    <a
                        href="/data/resume_final.pdf"
                        download="mimis-resume"
                        className="download-resume">
                        Download
                    </a>
                </div>


            </section>

            <section id="contact">
                <ContactSection
                    email={contact_json.email}
                    phone_number={contact_json.phone_number}
                    github_link={contact_json.github_link}
                    linked_in_link={contact_json.linked_in_link}
                    address={contact_json.address}
                />
            </section>

            <footer>
                <p>&copy; 2023 Dimitrios Chlympatsos. All rights reserved.</p>
            </footer>

        </div>
    )
}



export default About;
