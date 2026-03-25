import { useState } from "react";
import DockItem from "./DockItem";
import { Link } from "react-router-dom";

// import your images
import homeImg from "../assets/globe.png";
import contactImg from "../assets/contact.png";
import GameAssetImg from "../assets/gameasset.png";
export default function Dock() {
  const [mouseY, setMouseY] = useState(null);

  const items = [
    { id: 1, icon: homeImg, path: "/" },
    { id: 1, icon: homeImg, path: "/" },
    { id: 1, icon: homeImg, path: "/" },
    { id: 1, icon: homeImg, path: "/" },
    { id: 3, icon: GameAssetImg, path: "/GameDev" },
    { id: 5, icon: contactImg, path: "/contact" },
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
          />
        ))}
      </div>
    </div>
  );
}