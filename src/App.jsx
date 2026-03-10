import './App.css';
import ProjectCard from "./components/ProjectCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Example project pages
function Calculator() {
  return <h2>Calculator Page</h2>;
}
function TodoApp() {
  return <h2>Todo App Page</h2>;
}
function WeatherApp() {
  return <h2>Weather App Page</h2>;
}

function Home() {
  return (
    <>
      <div className="overlay"></div>

      <div className="content">
        <h1>My Projects</h1>
        <div className="projects">
          <ProjectCard title="Calculator" link="/calculator" />
          <ProjectCard title="Todo App" link="/todo" />
          <ProjectCard title="Weather App" link="/weather" />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </Router>
  );
}

export default App;