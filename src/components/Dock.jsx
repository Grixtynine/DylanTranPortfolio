import { useState } from "react";
import DockItem from "./DockItem";
import testImg from "../assets/asadal_stock_66.jpg";

export default function Dock() {
  const [mouseY, setMouseY] = useState(null);

  const items = [
    { id: 1, icon: "🏠" },
    { id: 2, icon: "📁" },
    { id: 3, icon: "🖥" },
    { id: 4, icon: "⚙️" },
    { id: 5, icon: "📧" },
    { id: 6, icon: testImg, alt: "Test" },  // <-- imported image
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
            mouseY={mouseY}
          />
        ))}
      </div>
    </div>
  );
}