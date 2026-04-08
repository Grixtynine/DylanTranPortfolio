import { useState } from "react";
import DockItem from "./DockItem";
import { Link } from "react-router-dom";

// import your images
import homeImg from "../assets/globe.png";
import contactImg from "../assets/contact.png";
import GameAssetImg from "../assets/gameasset.png";
import GraphicDesignImg from "../assets/design.png";
import SchoolProjImg from "../assets/";
  
export default function Dock() {
  const [mouseY, setMouseY] = useState(null);

  const items = [
    { id: 1, icon: homeImg, path: "/" , tag: "Home"},
    { id: 1, icon: GraphicDesignImg, path: "/graphicdesign", tag: "Graphic design" },
    { id: 1, icon: SchoolProjImg, path: "/schoolprojects", tag: "School Projects" },
    { id: 3, icon: GameAssetImg, path: "/gamedev" , tag: "Game Assets"},
    { id: 5, icon: contactImg, path: "/contact" , tag: "Contact"},
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
