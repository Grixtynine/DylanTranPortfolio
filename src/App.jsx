import './App.css';
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <div className="overlay"></div>

      <div className="content">
        <h1>My Projects</h1>
        <div className="projects">
          <ProjectCard title="Calculator" />
          <ProjectCard title="Todo App" />
          <ProjectCard title="Weather App" />
        </div>
      </div>
    </>
  );
}

export default App;