export default function ProjectCard({ title, width, height }) {
  return (
    <div
      className="project-card"
      style={{ width: width, height: height }}
    >
      <h2>{title}</h2>
      <button className="button-a">Open</button>
    </div>
  );
}