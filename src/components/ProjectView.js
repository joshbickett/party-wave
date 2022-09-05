import icon from "../assets/icon.png";
import { Button } from "@mui/material";

const ProjectView = ({ currentProject, setCurrentProject }) => {
  console.log("project", currentProject);
  return (
    <div>
      <Button
        style={{ margin: "10px" }}
        onClick={() => setCurrentProject(null)}
      >
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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ margin: "3px" }}>{currentProject?.votes}</div>
            <div>🌊</div>
          </div>

          <h2>{currentProject?.name}</h2>
          <p>{currentProject?.description}</p>

          {/* <p>{project[4]}</p> */}
          {/* <p>{project[5]}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
