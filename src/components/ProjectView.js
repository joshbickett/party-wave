import icon from "../assets/icon.png";
import { Button } from "@mui/material";
import AssetCarousel from "./AssetCarousel";

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
          padding: "0 20px",
        }}
        className="content-container"
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#F8F8F8",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            <div style={{ padding: "10px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                {currentProject?.assets?.icon && (
                  <img
                    src={currentProject?.assets?.icon}
                    alt="project"
                    style={{ height: "100px", border: "1px solid gray" }}
                  />
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                      backgroundColor: "#E0E0E0",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <div style={{ margin: "5px" }}>{currentProject?.votes}</div>
                    <div>🌊</div>
                  </div>
                </div>
              </div>

              <h2>{currentProject?.name}</h2>
              <p>{currentProject?.description}</p>

              {/* <p>{project[4]}</p> */}
              {/* <p>{project[5]}</p> */}
            </div>
          </div>
        </div>

        <AssetCarousel assets={currentProject?.assets} />
      </div>
    </div>
  );
};

export default ProjectView;
