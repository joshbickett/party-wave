import icon from "../assets/icon.png";
import { Button } from "@mui/material";

const ProjectView = ({ project, setActiveProject }) => {
  console.log("project", project);
  return (
    <div>
      <Button style={{ margin: "10px" }} onClick={() => setActiveProject(0)}>
        Go back
      </Button>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "20px",
        }}
      >
        <img src={icon} alt="project" style={{ width: "200px" }} />
        <div style={{ padding: "10px" }}>
          <h2>{project[1]}</h2>
          <p>{project[2]}</p>
          {/* <p>{project[4]}</p> */}
          <p>{project[5]}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
