export default function ProjectCard({ title, onClick, imgurl, imgalt }) {
  return (
    <div className="project-card" onClick={onClick}>
      {imgurl && <img src={imgurl} alt={imgalt || "project image"} />}
      <h2 style={{ margin: 0 }}>{title || "Untitled"}</h2>
    </div>
  );
}