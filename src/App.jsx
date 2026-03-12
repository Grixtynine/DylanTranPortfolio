import './App.css';
import ProjectCard from "./components/ProjectCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import Dock from "./components/Dock";

function TodoApp() {
  return <h2>Todo App Page</h2>;
}

function WeatherApp() {
  return <h2>Weather App Page</h2>;
}

function GameDev() {
  return <h2>Game Development</h2>;
}

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "About",
      width: "420px",
      height: "300px",
      content: (
        <div>
          <h2>About Me</h2>
          <p>
            Welcome to my portfolio! Here you can learn more about me, my skills,
            and the projects I’ve built. I’m passionate about creating modern web applications
            with clean design and smooth user experience.
          </p>
        </div>
      ),
    },
    { title: "Todo App", width: "300px", height: "220px", content: <p>This is the Todo App project content.</p> },
    { title: "Weather App", width: "300px", height: "220px", content: <p>This is the Weather App project content.</p> },
    { title: "Game Dev", width: "10px", height: "260px", content: <p>This is the Game Dev project content.</p> },
  ];

  const openDialog = (project) => {
    setActiveProject(project);
    setIsOpen(true);
  };

  return (
    <>
      <div className="overlay"></div>

      {/* Everything here is hidden when the modal is open */}
      {!isOpen && (
        <>
          <div className="content">
            <h1>My Projects</h1>
            <div className="projects">
              {projects.map((p, i) => (
                <div key={i} onClick={() => openDialog(p)}>
                  <ProjectCard title={p.title} width={p.width} height={p.height} />
                </div>
              ))}
            </div>
          </div>

          <Dock /> {/* hidden when modal opens */}
        </>
      )}

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="dialog-root">
        <DialogBackdrop className="dialog-backdrop" />
        <div className="dialog-container">
          <DialogPanel className="dialog-panel">
            {activeProject && (
              <>
                <DialogTitle className="dialog-title">{activeProject.title}</DialogTitle>
                <Description className="dialog-desc">{activeProject.title} details</Description>
                <div className="dialog-content">{activeProject.content}</div>
                <button className="button-b" onClick={() => setIsOpen(false)}>Close</button>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamedev" element={<GameDev />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </Router>
  );
}

export default App;