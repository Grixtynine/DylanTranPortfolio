import { useRef, useState, useEffect } from "react";

export default function DockItem({ icon, alt, mouseY }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!ref.current || mouseY === null) {
      setScale(1);
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;

    const distance = mouseY - centerY;
    const absDistance = Math.abs(distance);

    const maxDistance = 75;

    let newScale = 1;
    if (absDistance < maxDistance) {
      newScale = 1 + (1 - absDistance / maxDistance) * 0.3;
    }

    setScale(newScale);
  }, [mouseY]);

  // Detect if it's an image: assume strings starting with '/' or imported image
  const isImage = typeof icon === "string" && (icon.startsWith("/") || icon.endsWith(".jpg") || icon.endsWith(".png") || icon.endsWith(".jpeg") || icon.endsWith(".svg"));

  return (
    <div
      ref={ref}
      className="dock-item"
      style={{ transform: `scale(${scale})` }}
    >
      {isImage ? (
        <img src={icon} alt={alt} className="dock-icon" />
      ) : (
        <span style={{ fontSize: "24px" }}>{icon}</span>
      )}
    </div>
  );
}