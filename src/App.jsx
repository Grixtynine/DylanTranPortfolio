import "./App.css";
import ProjectCard from "./components/ProjectCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from "@headlessui/react";
import { useState, useEffect } from "react";
import Dock from "./components/Dock";
import contactImg from "./assets/contact.png";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Virtual booths",
      imgurl: contactImg,
      imgalt: "Virtual booths",
      content: <p>Virtual booths project details.</p>
    },
    {
      title: "Access to dashboard",
      imgurl: contactImg,
      imgalt: "Access to dashboard",
      content: <p>Dashboard project details.</p>
    },
    {
      title: "Lead retrieval",
      imgurl: contactImg,
      imgalt: "Lead retrieval",
      content: <p>Lead retrieval project details.</p>
    },
    {
      title: "Lead scoring",
      imgurl: contactImg,
      imgalt: "Lead scoring",
      content: <p>Lead scoring project details.</p>
    },
    {
      title: "Sponsored sections",
      imgurl: contactImg,
      imgalt: "Sponsored sections",
      content: <p>Sponsored sections project details.</p>
    }
  ];

  const openDialog = (project) => {
    setActiveProject(project);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setActiveProject(null);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (isOpen) {
      root.style.overflow = "hidden";
    } else {
      root.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <div className="overlay" />

      <div className="page">
        <div className="layout">
          <Dock />

          <div
            className="gallery"
            style={{
              opacity: isOpen ? 0 : 1,
              pointerEvents: isOpen ? "none" : "auto"
            }}
          >
            {projects.map((p, i) => (
              <ProjectCard
                key={i}
                title={p.title}
                imgurl={p.imgurl}
                imgalt={p.imgalt}
                onClick={() => openDialog(p)}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onClose={closeDialog}>
        <DialogBackdrop className="dialog-backdrop" />

        <div className="dialog-container">
          <DialogPanel className="dialog-panel">
            {activeProject && (
              <>
                <DialogTitle className="dialog-title">
                  {activeProject.title}
                </DialogTitle>

                <Description>
                  {activeProject.title} details
                </Description>

                <div>{activeProject.content}</div>

                <button className="button-b" onClick={closeDialog}>
                  Close
                </button>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

function GameDev() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Blacksmith Tileset",
      content: <p>Asset pack.</p>
    },
    {
      title: "Procedural Map",
      content: <p>Generation system.</p>
    }
  ];

  const openDialog = (project) => {
    setActiveProject(project);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setActiveProject(null);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (isOpen) {
      root.style.overflow = "hidden";
    } else {
      root.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <div className="overlay" />

      <div className="page">
        <div className="layout">
          <Dock />

          <div
            className="gallery"
            style={{
              opacity: isOpen ? 0 : 1,
              pointerEvents: isOpen ? "none" : "auto"
            }}
          >
            {projects.map((p, i) => (
              <ProjectCard
                key={i}
                title={p.title}
                onClick={() => openDialog(p)}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onClose={closeDialog}>
        <DialogBackdrop className="dialog-backdrop" />

        <div className="dialog-container">
          <DialogPanel className="dialog-panel">
            {activeProject && (
              <>
                <DialogTitle className="dialog-title">
                  {activeProject.title}
                </DialogTitle>

                <Description>
                  {activeProject.title} details
                </Description>

                <div>{activeProject.content}</div>

                <button className="button-b" onClick={closeDialog}>
                  Close
                </button>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

function Contact() {
  return (
    <>
      <div className="overlay" />

      <div className="page">
        <div className="layout">
          <Dock />

          <div className="gallery">
            <div className="project-card contact-card">
              <div className="contact-content">
                <h1>Contact</h1>
                <p>Email: example@email.com</p>
                <p>Location: Texas</p>
                <p>Available for freelance and collaboration work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamedev" element={<GameDev />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;