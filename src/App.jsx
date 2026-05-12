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

import gilaImg from "./assets/gilaMonster.png";
import soldierImg from "./assets/fallensoldier.png";
import butterflyImg1 from "./assets/ButterflyBroch1.png";
import butterflyImg2 from "./assets/ButterflyBroch2.png";
import butterflyImg3 from "./assets/ButterflyBroch3.png";
import butterflyImg4 from "./assets/ButterflyBroch4.png";
import butterflyImg5 from "./assets/ButterflyBroch5.png";
import butterflyImg6 from "./assets/ButterflyBroch6.png";
import libraryBannerImg from "./assets/LibraryBanner.svg";
import summerReadingImg from "./assets/BannerSummer.svg";
import ldplLogoVariationsImg from "./assets/logovar.png";
import trashBeforeImg from "./assets/TrashRemovalBefore.jpg";
import trashAfterImg from "./assets/TrashRemoval.png";
import BWmanBeforeImg from "./assets/BWphotoretouchbefore.jpg";
import BWmanAfterImg from "./assets/BWphotoretouchafter.png";
import BWmanBothImg from "./assets/BWphotoretouchBoth.png";
import GrassPxImg from "./assets/GrassPrev.jpg";
import RockWallPxImg from "./assets/RockWall.jpg";
import CliffImg from "./assets/Clifftiles.jpg";
import Resume from "./assets/ResumeDylanTran.pdf";
import pfpIMG from "./assets/PFP.png"



function ImageCarousel({ images }) {
  const [idx, setIdx] = useState(0);
 
  useEffect(() => { setIdx(0); }, [images]);
 
  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className="carousel">
        <img src={images[0].src} alt={images[0].alt} />
      </div>
    );
  }
 
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);
 
  return (
    <div className="carousel">
      <img src={images[idx].src} alt={images[idx].alt} />
 
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={prev} aria-label="Previous">&#8249;</button>
 
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === idx ? " active" : ""}`}
              onClick={() => setIdx(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
 
        <button className="carousel-btn" onClick={next} aria-label="Next">&#8250;</button>
      </div>
    </div>
  );
}
// ───────────────────────────────────────────────────────────────────────────────
 
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
 
  const projects = [
    {
      title: "Gila Monster",
      imgurl: gilaImg,
      imgalt: "Gila Monster in Adobe Illustator",
      content: <p>This is a gila monster made in Adobe Illustrator using the blob brush, which took me around 25 hours of work and is 100% vectors.</p>,
      tags: <ul className="tags"><li>Adobe Illustrator</li><li>Dec 11, 2025</li></ul>
    },
    {
      title: "Trash Removal Practice",
      imgurl: trashBeforeImg,
      imgalt: "Butterfly Brochure cover",
      images: [
        { src: trashBeforeImg, alt: "Beach with trash" },
        { src: trashAfterImg, alt: "Beach with trash edited out" },
      ],
      content: <p>Small personal project to improve my skills at editing out objects from a scene using the clone tool.</p>,
      tags: <ul className="tags"><li>Adobe Photoshop</li><li>Apr 28, 2026</li></ul>
    },
    {
      title: "Butterfly Brochure",
      imgurl: butterflyImg1,
      imgalt: "Butterfly Brochure cover",
      images: [
        { src: butterflyImg1, alt: "Butterfly Brochure Sheet 1" },
        { src: butterflyImg2, alt: "Butterfly Brochure Sheet 2" },
        { src: butterflyImg3, alt: "Butterfly Brochure Sheet 3" },
        { src: butterflyImg4, alt: "Butterfly Brochure Sheet 4" },
        { src: butterflyImg5, alt: "Butterfly Brochure Sheet 5" },
        { src: butterflyImg6, alt: "Butterfly Brochure Sheet 6" },
      ],
      content: <p>This is a museum brochure with a die cut cover, to show a caterpillar underneath. I had to recreate the map and all the butterflies as well as arrange the text. All done in Illustrator.</p>,
      tags: <ul className="tags"><li>Adobe Illustrator</li><li>Nov 11, 2025</li></ul>
    },
    {
      title: "Fallen Soldier",
      imgurl: soldierImg,
      imgalt: "Fallen Soldier Composition",
      content: <p>The final project for my Design 1 class was a designers choice, and I wanted to work with color balancing and contrast. Most of the composition is pencil, with small amounts of paint pen used in the center on the plant. My other goal was to work on the meaning of my art, and I wanted to show a life from death theme.</p>,
      tags: <ul className="tags"><li>Physical Media</li><li>Dec 31, 2025</li></ul>
    },
    {
      title: "Lake Dallas Public Library Logo and Banners",
      imgurl: ldplLogoVariationsImg,
      imgalt: "Variations of the Lake Dallas Public Library Logo",
      images: [
        { src: ldplLogoVariationsImg, alt: "Variations of the Lake Dallas Public Library Logo" },
        { src: summerReadingImg, alt: "Summer Reading Banner" },
        { src: libraryBannerImg, alt: "General Use Library Banner" },
      ],
      content: <p>This is a set of logo variations I made for the Lake Dallas Public Library that can be placed on differently colored flyers, webpages and more. I was also asked to make a banner for the Summer Reading program and a general use banner to put outside the library.</p>,
      tags: <ul className="tags"><li>Adobe Illustrator</li><li>Aug 21, 2025</li></ul>
    },
    {
      title: "Restoring black and white photo",
      imgurl: BWmanBothImg,
      imgalt: "Black and white photo of man before and after retouching",
      images: [
        { src: BWmanBeforeImg, alt: "Black and white photo of man before retouching" },
        { src: BWmanAfterImg, alt: "Black and white photo of man after retouching" },
        { src: BWmanBothImg, alt: "Black and white photo of man before and after retouching" },
      ],
      content: <p>This is a project where I had to clone out dirt, scratches and folds, and extend the background, as well as remove tape with layer adjustments. Parts of the image required a higher level of repair, such as around the eye and chin. </p>,
      tags: <ul className="tags"><li>Adobe Photoshop</li><li>Apr 29, 2026</li></ul>
    },
    {
      title: "Pixel Art Landscape Tiles",
      imgurl: GrassPxImg,
      images: [
        { src: CliffImg, alt: "Pixel art tiles containing rock variations and rocky terrain" },
        { src: RockWallPxImg, alt: "Pixel art tiles containing tall cliffs and stairs " },
        { src: GrassPxImg, alt: "Basic pixel art grass tile variations" },

      ],
      imgalt: "Gila Monster",
      content: <p>Commissioned tileset I did for a gamedev client in 32x32 tiles.</p>,
      tags: <ul className="tags"><li>Aseprite</li><li>June 12, 2025</li></ul>
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
 
  const getImages = (project) =>
    project.images ?? [{ src: project.imgurl, alt: project.imgalt }];
 
  return (
    <>

      <div className="overlay" />
      <div className="viewport-fade"/>

      <div className="page">
        
        <div className="layout">
          {!isOpen && <Dock />}

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
        <div className="imgcont"></div>
        <div className="dialog-container">
          <DialogPanel className="dialog-panel">
            {activeProject && (
              <>
                <div className="dialog-text">
                  <DialogTitle className="dialog-title">
                    {activeProject.title}
                  </DialogTitle>
 
                  <div>{activeProject.content}</div>
                  <div>{activeProject.tags}</div>
 
                  <button className="button-b" onClick={closeDialog}>
                    Back
                  </button>
                </div>
 
                <div className="dialog-imgcont">
                    <ImageCarousel images={getImages(activeProject)} />
                </div>
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
      title: "Lake Dallas Public Library Logo and Banners",
      imgurl: ldplLogoVariationsImg,
      imgalt: "Variations of the Lake Dallas Public Library Logo",
      images: [
        { src: ldplLogoVariationsImg, alt: "Variations of the Lake Dallas Public Library Logo" },
        { src: summerReadingImg, alt: "Summer Reading Banner" },
        { src: libraryBannerImg, alt: "General Use Library Banner" },
      ],
      content: <p>This is a set of logo variations I made for the Lake Dallas Public Library that can be placed on differently colored flyers, webpages and more. I was also asked to make a banner for the Summer Reading program and a general use banner to put outside the library.</p>,
      tags: 
      <ul className="tags">
        <li>Adobe Illustrator</li>
        <li>Aug 21, 2025</li>
      </ul>
    },
    {
      title: "Gila Monster",
      imgurl: gilaImg,
      imgalt: "Gila Monster in Adobe Illustator",
      content: <p>This is a gila monster made in Adobe Illustrator using the blob brush, which took me around 25 hours of work and is 100% vectors.</p>,
      tags: <ul className="tags"><li>Adobe Illustrator</li><li>Dec 11, 2025</li></ul>
    },
    {
      title: "Butterfly Brochure",
      imgurl: butterflyImg1,
      imgalt: "Butterfly Brochure cover",
      images: [
        { src: butterflyImg1, alt: "Butterfly Brochure Sheet 1" },
        { src: butterflyImg2, alt: "Butterfly Brochure Sheet 2" },
        { src: butterflyImg3, alt: "Butterfly Brochure Sheet 3" },
        { src: butterflyImg4, alt: "Butterfly Brochure Sheet 4" },
        { src: butterflyImg5, alt: "Butterfly Brochure Sheet 5" },
        { src: butterflyImg6, alt: "Butterfly Brochure Sheet 6" },
      ],
      content: <p>This is a museum brochure with a die cut cover, to show a caterpillar underneath. I had to recreate the map and all the butterflies as well as arrange the text. All done in Illustrator.</p>,
      tags: <ul className="tags"><li>Adobe Illustrator</li><li>Nov 11, 2025</li></ul>
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
 
  const getImages = (project) =>
    project.images ?? [{ src: project.imgurl, alt: project.imgalt }];
 
  return (
    <>
      <div className="overlay" />
      <div className="viewport-fade"/>
      
      <div className="page">
        <div className="layout">
          {!isOpen && <Dock />}
 
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
        <div className="imgcont"></div>
        <div className="dialog-container">
          <DialogPanel className="dialog-panel">
            {activeProject && (
              <>
                <div className="dialog-text">
                  <DialogTitle className="dialog-title">
                    {activeProject.title}
                  </DialogTitle>
                  <div>{activeProject.content}</div>
                  <div>{activeProject.tags}</div>

                  <button className="button-b" onClick={closeDialog}>
                    Back
                  </button>
                </div>
 
                <div className="dialog-imgcont">
                    <ImageCarousel images={getImages(activeProject)} />
                </div>
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
      title: "Gila Monster",
      imgurl: gilaImg,
      imgalt: "Gila Monster",
      content: <p>This is a gila monster made in Adobe Illustrator using the blob brush, which took me around 25 hours of work and is 100% vectors.</p>,
      tags: <ul className="tags"><li>Adobe Illustrator</li><li>Dec 11, 2025</li></ul>
    },
    {
      title: "Butterfly Brochure",
      imgurl: butterflyImg1,
      imgalt: "Butterfly Brochure cover",
      images: [
        { src: butterflyImg1, alt: "Butterfly Brochure Sheet 1" },
        { src: butterflyImg2, alt: "Butterfly Brochure Sheet 2" },
        { src: butterflyImg3, alt: "Butterfly Brochure Sheet 3" },
        { src: butterflyImg4, alt: "Butterfly Brochure Sheet 4" },
        { src: butterflyImg5, alt: "Butterfly Brochure Sheet 5" },
        { src: butterflyImg6, alt: "Butterfly Brochure Sheet 6" },
      ],
      content: <p>This is a museum brochure with a die cut cover, to show a caterpillar underneath. I had to recreate the map and all the butterflies as well as arrange the text. All done in Illustrator.</p>,
      tags: <ul className="tags"><li>Adobe Illustrator</li><li>Nov 11, 2025</li></ul>
    },
    {
      title: "Fallen Soldier",
      imgurl: soldierImg,
      imgalt: "Fallen Soldier Composition",
      content: <p>The final project for my Design 1 class was a designers choice, and I wanted to work with color balancing and contrast. Most of the composition is pencil, with small amounts of paint pen used in the center on the plant. My other goal was to work on the meaning of my art, and I wanted to show a life from death theme.</p>,
      tags: <ul className="tags"><li>Physical Media</li><li>Dec 31, 2025</li></ul>
    },
    {
      title: "Restoring black and white photo",
      imgurl: BWmanBothImg,
      imgalt: "Black and white photo of man before and after retouching",
      images: [
        { src: BWmanBeforeImg, alt: "Black and white photo of man before retouching" },
        { src: BWmanAfterImg, alt: "Black and white photo of man after retouching" },
        { src: BWmanBothImg, alt: "Black and white photo of man before and after retouching" },
      ],
      content: <p>This is a project where I had to clone out dirt, scratches and folds, and extend the background, as well as remove tape with layer adjustments. Parts of the image required a higher level of repair, such as around the eye and chin. </p>,
      tags: <ul className="tags"><li>Adobe Photoshop</li><li>Apr 29, 2026</li></ul>
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
 
  const getImages = (project) =>
    project.images ?? [{ src: project.imgurl, alt: project.imgalt }];
 
  return (
    <>
      <div className="overlay" />
      <div className="viewport-fade"/>
      
      <div className="page">
        <div className="layout">
          {!isOpen && <Dock />}
 
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
        <div className="imgcont"></div>
        <div className="dialog-container">
          <DialogPanel className="dialog-panel">
            {activeProject && (
              <>
                <div className="dialog-text">
                  <DialogTitle className="dialog-title">
                    {activeProject.title}
                  </DialogTitle>
 
                  <div>{activeProject.content}</div>
                  <div>{activeProject.tags}</div>
 
                  <button className="button-b" onClick={closeDialog}>
                    Back
                  </button>
                </div>
 
                <div className="dialog-imgcont">
                    <ImageCarousel images={getImages(activeProject)} />
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

function PhotoRetouch() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
 
  const projects = [
    {
      title: "Trash Removal Practice",
      imgurl: trashAfterImg,
      imgalt: "Butterfly Brochure cover",
      images: [
        { src: trashBeforeImg, alt: "Beach with trash" },
        { src: trashAfterImg, alt: "Beach with trash edited out" },
      ],
      content: <p>Small personal project to improve my skills at editing out objects from a scene using the clone tool.</p>,
      tags: <ul className="tags"><li>Adobe Photoshop</li><li>Apr 28, 2026</li></ul>
    },
    {
      title: "Restoring black and white photo",
      imgurl: BWmanBothImg,
      imgalt: "Black and white photo of man before and after retouching",
      images: [
        { src: BWmanBeforeImg, alt: "Black and white photo of man before retouching" },
        { src: BWmanAfterImg, alt: "Black and white photo of man after retouching" },
        { src: BWmanBothImg, alt: "Black and white photo of man before and after retouching" },
      ],
      content: <p>This is a project where I had to clone out dirt, scratches and folds, and extend the background, as well as remove tape with layer adjustments. Parts of the image required a higher level of repair, such as around the eye and chin. </p>,
      tags: <ul className="tags"><li>Adobe Photoshop</li><li>Apr 29, 2026</li></ul>
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
 
  const getImages = (project) =>
    project.images ?? [{ src: project.imgurl, alt: project.imgalt }];
 
  return (
    <>
      <div className="overlay" />
      <div className="viewport-fade"/>
      
      <div className="page">
        <div className="layout">
          {!isOpen && <Dock />}
 
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
        <div className="imgcont"></div>
        <div className="dialog-container">
          <DialogPanel className="dialog-panel">
            {activeProject && (
              <>
                <div className="dialog-text">
                  <DialogTitle className="dialog-title">
                    {activeProject.title}
                  </DialogTitle>
 
                  <div>{activeProject.content}</div>
                  <div>{activeProject.tags}</div>
 
                  <button className="button-b" onClick={closeDialog}>
                    Back
                  </button>
                </div>
 
                <div className="dialog-imgcont">
                    <ImageCarousel images={getImages(activeProject)} />
                </div>
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
      title: "Pixel Art Landscape Tiles",
      imgurl: GrassPxImg,
      images: [
        { src: CliffImg, alt: "Pixel art tiles containing rock variations and rocky terrain" },
        { src: RockWallPxImg, alt: "Pixel art tiles containing tall cliffs and stairs " },
        { src: GrassPxImg, alt: "Basic pixel art grass tile variations" },

      ],
      imgalt: "Gila Monster",
      content: <p>Commissioned tileset I did for a gamedev client in 32x32 tiles.</p>,
      tags: <ul className="tags"><li>Aseprite</li><li>June 12, 2025</li></ul>
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
 
  const getImages = (project) =>
    project.images ?? [{ src: project.imgurl, alt: project.imgalt }];
 
  return (
    <>
      <div className="overlay" />
      <div className="viewport-fade"/>
      
      <div className="page">
        <div className="layout">
          {!isOpen && <Dock />}
 
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
        <div className="imgcont"></div>
        <div className="dialog-container">
          <DialogPanel className="dialog-panel">
            {activeProject && (
              <>
                <div className="dialog-text">
                  <DialogTitle className="dialog-title">
                    {activeProject.title}
                  </DialogTitle>
 
                  <div>{activeProject.content}</div>
                  <div>{activeProject.tags}</div>
 
                  <button className="button-b" onClick={closeDialog}>
                    Back
                  </button>
                </div>
 
                <div className="dialog-imgcont">
                    <ImageCarousel images={getImages(activeProject)} />
                </div>
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
                <br/>
                <p>My main hero project that I am working on is a FPS game called Rapidfire, where the faster you go, the stronger your player becomes. The game is far from complete but I am consistently working on it and I hope to have it complete in a few years.</p>
                <br/>
               <p>Software proficiency:</p>
                <ul>
                  <li>Blender: Great at modelling, still learning UVs, texturing, and advanced rigging/animation</li>
                  <li>Adobe Illustrator: My strongest software, I have done hundreds of hours of work in Illustrator on different types of projects</li>
                  <li>Adobe InDesign: another program I have used extensively, I have made brochures, flyers, forms and more.</li>
                  <li>Adobe Photoshop: Very solid skills in image retouching, but I haven't used it for designs as much.</li>
                  <li>Microsoft and Google software suites: extremely proficient, I use these almost daily.</li>
                  <li>Aseprite/Libresprite: these are the softwares I use for pixel art, I have tons of experience and even contributed to the background of the Libresprite homescreen.</li>
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

                
                <h1>Education</h1>
                <ul>
                <li>Tarrant County College - AAS - Graphic Communication, expected May 2027</li>
                <li>Tarrant County College - AAS - Game and Simulation Design, expected May 2027</li>
                
                </ul>

                <h1>Resume</h1>
                <a href={Resume} target="_blank" rel="noopener noreferrer">Click here to open PDF in a new tab</a>
              </div>
            </div>
            </div>
          </div>
          <div className="PFP">
          <img src={pfpIMG}/>
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
          <Route path="/photoretouch" element={<PhotoRetouch />} />
          <Route path="/schoolprojects" element={<SchoolProjects />} />
          <Route path="/graphicdesign" element={<GraphicDesign />} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;