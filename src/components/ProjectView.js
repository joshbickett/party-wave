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
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          {currentProject?.assets?.images[0] && (
            <img
              src={currentProject?.assets?.images[0]}
              alt="project"
              style={{ height: "200px", border: "1px solid gray" }}
            />
          )}

          <div style={{ padding: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ margin: "3px" }}>{currentProject?.votes}</div>
              <div>🌊</div>
            </div>

            <h2>{currentProject?.name}</h2>
            <p>{currentProject?.description}</p>

            <div>test</div>

            {/* <p>{project[4]}</p> */}
            {/* <p>{project[5]}</p> */}
          </div>
        </div>
        <div>
          {currentProject?.assets?.youtube && (
            <iframe
              width="560"
              height="315"
              src={currentProject?.assets?.youtube
                .split(".be/")
                .join("be.com/embed/")}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
