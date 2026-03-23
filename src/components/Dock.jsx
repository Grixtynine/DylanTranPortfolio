import { useState } from "react";
import DockItem from "./DockItem";
import testImg from "../assets/asadal_stock_66.jpg";
import { Link } from "react-router-dom";

export default function Dock() {
  const [mouseY, setMouseY] = useState(null);

  const items = [
    { id: 1, icon: "🏠" , path: "/"},
    { id: 2, icon: "📁" },
    { id: 3, icon: "🖥" , path: "Gamedev"},
    { id: 4, icon: "⚙️" },
    { id: 5, icon: "📧" },
    { id: 7, icon: "📧" },
    { id: 8, icon: "📧" },
    { id: 9, icon: "📧" },
    { id: 10, icon: "📧" },
    { id: 11, icon: "📧" },

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
            alt={item.alt}
            path={item.path}
            mouseY={mouseY}
          />
        ))}
      </div>
    </div>
  );
}