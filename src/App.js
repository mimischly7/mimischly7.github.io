import './App.css';
import ProjectBox from "./ProjectBox"
import ExperienceBox from "./ExperienceBox"
import ContactSection from "./ContactSection"
import CodeFontStyler from "./CodeFontStyler"

// data
import contact_json from './data/contact.json'
import projects_json from './data/projects.json'
import experiences_json from './data/experiences.json'
import welcome_json from './data/welcome.json'
import {
    Routes,
    Route
} from "react-router-dom";

import PostCatalog from "./PostCatalog"



function App() {
  return (
      <div>
          <Routes>
              <Route
                  path="/"
                  element=<About />
              />

              <Route path="/posts" element=<PostCatalog/> />

              <Route path="posts/:id" element=<Hey/> />

          </Routes>
      </div>
  );
}

function About() {
    return (
        <div className="App">
            <header>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="/posts">Blog</a></li>
                    </ul>
                </nav>
            </header>

            <div className="social-sidebar">
                <a href="https://github.com/mimischly7" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/mimischly" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                {/*<a href="https://www.instagram.com/yourusername" target="_blank">*/}
                {/*    <i className="fab fa-instagram"></i>*/}
                {/*</a>*/}
                <a href="mailto:mimis.chlympatsos@mail.utoronto.ca" target="_blank">
                    <i className="fa-solid fa-envelope"></i>
                </a>


            </div>

            <section id="home">

                <div className="profile-picture">
                    <img src="/images/portrait2.jpg" alt="Mimis Chlympatsos" style={{width: "300px"}}></img>
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
                    <a href="/resume_final.pdf" target="_blank" className="download-resume">View</a>

                    <a
                        href="/resume_final.pdf"
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

            {/*<script src="script.js"></script>*/}
        </div>
    )
}

function Hey() {
  return (
      <h1> Hey Brother </h1>
  )
}

function You() {
    return (
        <h1> Hey You </h1>
    )
}
export default App;
