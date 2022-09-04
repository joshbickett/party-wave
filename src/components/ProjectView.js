import icon from "../assets/icon.png";

const ProjectView = ({ project }) => {
  console.log("project", project);
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-start", padding: "20px" }}
    >
      <img src={icon} alt="project" style={{ width: "200px" }} />
      <div style={{ padding: "10px" }}>
        <h2>{project[1]}</h2>
        <p>{project[2]}</p>
        <p>{project[4]}</p>
        <p>{project[5]}</p>
      </div>
    </div>
  );
};

export default ProjectView;
