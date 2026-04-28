import { useState } from "react";
import DockItem from "./DockItem";
import { Link } from "react-router-dom";

// import your images
import homeImg from "../assets/globe.png";
import contactImg from "../assets/resume.png";
import GameAssetImg from "../assets/gameasset.png";
import GraphicDesignImg from "../assets/design.png";
import SchoolProjImg from "../assets/generalart.png";
import PhotoRetouchImg from "../assets/photoretouch.png"
  
export default function Dock() {
  const [mouseY, setMouseY] = useState(null);

  const items = [
    { id: 1, icon: homeImg, path: "/" , tag: "Home"},
    { id: 2, icon: GraphicDesignImg, path: "/graphicdesign", tag: "Graphic design" },
    { id: 3, icon: SchoolProjImg, path: "/schoolprojects", tag: "School Projects" },
    { id: 4, icon: PhotoRetouchImg, path: "/photoretouch", tag: "Photo Retouching" },
    { id: 5, icon: GameAssetImg, path: "/gamedev" , tag: "Game Assets"},
    { id: 6, icon: contactImg, path: "/contact" , tag: "About and Contact"},
  ];

  return (
    <div
      className="dock-container"
      onMouseMove={(e) => setMouseY(e.clientY)}
      onMouseLeave={() => setMouseY(null)}
    >
      <div className="dock">
        {items.map((item) => (
          <DockItem
            key={item.id}
            icon={item.icon}
            path={item.path}
            mouseY={mouseY}
            tag={item.tag}
          />
        ))}
      </div>
    </div>
  );
}
