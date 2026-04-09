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
      <div className="viewport-fade"/>
      
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

function GraphicDesign() {
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
      <div className="viewport-fade"/>
      
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


function SchoolProjects() {
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
      <div className="viewport-fade"/>
      
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
      <div className="viewport-fade"/>
      
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

function Contact() {
  return (
    <>
      <div className="overlay" />
      <div className="viewport-fade"/>
      <div className="page">
        <div className="layout">
          <Dock />

          <div className="gallery">
            <div className="con-card">
            <div className="contact-card">
              <div className="contact-content">
                <h1>About me</h1>
                <p>Hello! I am a graphic design and game development student. I'm working on an indie game, but I hope to find work in the meantime.</p>
                <p>Software proficiency:</p>
                <ul>
                  <li>Blender: Great at modelling, still learning UVs, texturing, and advanced rigging/animation</li>
                  <li>Adobe Illustrator: My strongest software, I have done hundreds of hours of work in Illustrator on different types of projects</li>
                  <li>Adobe InDesign: another program I have used extensively, I have made brochures, flyers, forms and more.</li>
                  <li>Adobe Photoshop: Very solid skills in image retouching, but I haven't used it for designs as much.</li>
                  <li>Microsoft and Google software suites: extremely proficient, I use these almost daily.</li>
                  <li>Other: Affinity Designer and GIMP, both of which I used until I had access to the Adobe counterparts.</li>
                </ul>

                <p>Programming Languages</p>
                <ul>
                  <li>HTML + CSS: this website was done by me (using react as well) and I have used them in other projects, but I would not claim to be an expert.</li>
                  <li>gdscript: the primary language I use for game development. Not the greatest at this but I am always learning.</li>
                  <li>Python: I used the simpler functions to program a robot for state and county robotics competitions.</li>
                </ul>
                
                <h1>Contact</h1>
                <p>Email: grixyirlaz7@gmail.com</p>
                <p>ArtStation: grix.artstation.com</p>
                <p>Availability: Part-time and Contract.</p>
                <br></br>
                
                <h1>Education</h1>
                <ul>
                <li>Tarrant County College - AAS - Graphic Communication, expected May 2027</li>
                <li>Tarrant County College - AAS - Game and Simulation Design, expected May 2027</li>
                </ul>
              </div>
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
          <Route path="/schoolprojects" element={<SchoolProjects />} />
          <Route path="/graphicdesign" element={<GraphicDesign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
