import logo from './logo.svg';
import './App.css';
import ProjectBox from "./ProjectBox"
import ExperienceBox from "./ExperienceBox"
import ContactSection from "./ContactSection"


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
        <ProjectBox
            title={"Custom Title"}
            tech_tags={["Python", "Java"]}
            img_url={"https://picsum.photos/200/300"}
        />
      </section>

      <section id="experiences">
          <h2>Experiences</h2>
          <ExperienceBox
              employer={"Apple Inc."}
              position={"Back-end Developer"}
              time_period={"June 1, 2022 - June 1, 2023"}
              description="Some random description, ........"
              tech_tags={["Python", "Ruby"]}
              link={"https://www.apple.com/"}
          />
      </section>

      <section id="resume">
        <h2>Resume</h2>
      </section>

      <section id="contact">
        <ContactSection/>
      </section>

      <footer>
        <p>&copy; 2023 Dimitrios Chlympatsos. All rights reserved.</p>
      </footer>

      <script src="script.js"></script>
    </div>
  );
}

export default App;
