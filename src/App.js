import logo from './logo.svg';
import './App.css';

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

      <section id="home">
        <h1>Welcome to My Personal Website</h1>
        <p>I'm Mimis, a dedicated and passionate developer...</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
      </section>

      <section id="resume">
        <h2>Resume</h2>
      </section>

      <section id="contact">
        <h2>Contact</h2>
      </section>

      <footer>
        <p>&copy; 2023 Dimitrios Chlympatsos. All rights reserved.</p>
      </footer>

      <script src="script.js"></script>
    </div>
  );
}

export default App;
