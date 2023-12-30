import logo from './logo.svg';
import './App.css';
import ProjectBox from "./ProjectBox"
import ExperienceBox from "./ExperienceBox"
import ContactSection from "./ContactSection"

// data
import contact_json from './data/contact.json'
import projects_json from './data/projects.json'
import experiences_json from './data/experiences.json'



function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

        <div className="social-sidebar">
            <a href="https://github.com/yourusername" target="_blank">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/yourusername" target="_blank">
                <i className="fab fa-instagram"></i>
            </a>
        </div>

      <section id="home">
        <h1>Welcome to My Personal Website</h1>
        <p>I'm Mimis, a dedicated and passionate developer...</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>

          {projects_json.map((proj) =>
              <ProjectBox
                  title={proj.title}
                  tech_tags={proj.tech_tags}
                  description={proj.description}
                  img_url={proj.img_url}
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
  );
}

export default App;
