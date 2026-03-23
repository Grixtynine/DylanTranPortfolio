export default function ProjectCard({ title, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <h2>{title}</h2>
      <button className="button-a">Open</button>
    </div>
  );
}